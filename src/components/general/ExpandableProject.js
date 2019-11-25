//@flow
import React, {useState, useContext} from 'react';
import type {Element} from 'react';
import { useSpring } from 'react-spring';
import ExpandableSection from './ExpandableSection';
import type {SectionContentTypes} from './ExpandableSection';
import AnimatedExpandIcon from './AnimatedExpandIcon';

import {ExpandableParentBody, ExpandableProjectHeader} from '../../helpers/styled-components/expandableContainers';
import {StyledAnchor, StyledLink} from '../../helpers/styled-components/links';
import { PostPar } from '../../helpers/styled-components/typography';

import {DataContext} from '../../helpers/context/contexts';

type ProjectContentTypes = {|key: string, type: string, ...SectionContentTypes|};

export type ProjectType = {|
    projectTitle: string,
    projectContent: Array<ProjectContentTypes>,
    contenthref: string
|};

export default function ExpandableProject ({
    projectTitle='',
    projectContent=[{
        type: '',
        sectionContent:'',
        sectionSubContent:[{
            cardContent:'',
            cardSubContent: '',
            key: ''
        }],
        key:''
    }],
    contenthref=''
}: ProjectType) {
    const {noGreaterThan450} = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({
        opacity: open ? 1 : 0,
        maxHeight: open ? '10000px' : '0px',
    });

    return (
        <div>
            <ExpandableProjectHeader
                onClick={() => setOpen(o => !o)}
                size={noGreaterThan450 ? 'xlarge' : 'xxlarge'}
            >
                {
                    projectTitle === 'spencerranney.com'
                    ? <><StyledLink to={contenthref} size='xlarge'>{projectTitle}</StyledLink><br /></>
                    : <><StyledAnchor href={contenthref} size='xlarge'>{projectTitle}</StyledAnchor> <br /></>
                }
                <AnimatedExpandIcon open={open} />
            </ExpandableProjectHeader>
            <ExpandableParentBody style={expandableAnimation}>
                {
                    projectContent.map<Element<typeof ExpandableSection | StyledAnchor | PostPar>>(({
                        type,
                        sectionContent,
                        sectionSubContent,
                        key
                    }: ProjectContentTypes)=>{
                        if (type === 'category') {
                            return (
                                <ExpandableSection 
                                    key={key} 
                                    sectionContent={sectionContent}
                                    sectionSubContent={sectionSubContent}
                                />
                            );
                        } else if (type === 'source-code') {
                            return <StyledAnchor key={key} size='xlarge' style={{ paddingRight: '8px' }} href={sectionContent}>github</StyledAnchor>;
                        } else if (type === 'description') {
                            return <PostPar key={key}>{sectionContent}</PostPar>;
                        }
                        return <></>
                    })
                }
            </ExpandableParentBody>
        </div>

    )

}
