import React, {useState, useContext} from 'react';
import { useSpring } from 'react-spring';
import ExpandableSection from './ExpandableSection';
import AnimatedExpandIcon from './AnimatedExpandIcon';

import {ExpandableParentBody, ExpandableProjectHeader} from '../../helpers/styled-components/containers';
import {StyledAnchor, StyledLink} from '../../helpers/styled-components/links';
import { PostPar } from '../../helpers/styled-components/typography';

import {DataContext} from '../../helpers/context/contexts';

export default function ExpandableProject ({content,subcontent}) {
    const {noGreaterThan450:mediaQ} = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({
        opacity: open ? 1 : 0,
        maxHeight: open ? '10000px' : '0px',
    });

    return (
        <div>
            <ExpandableProjectHeader
                onClick={() => setOpen(o => !o)}
                size={mediaQ ? 'xlarge' : 'xxlarge'}
            >
                {
                    content === 'spencerranney.com'
                    ? <><StyledLink to='/' size='xlarge'>{content}</StyledLink><br /></>
                    : <><StyledAnchor href={contenthref} size='xlarge'>{content}</StyledAnchor> <br /></>
                }
                <AnimatedExpandIcon open={open} />
            </ExpandableProjectHeader>
            <ExpandableParentBody style={expandableAnimation}>
                {
                    subcontent.map(({type,content,subcontent,key})=>{
                        if (type === 'category') {
                            return <ExpandableSection key={key} content={content} subcontent={subcontent}>{content}</ExpandableSection>;
                        } else if (type === 'source-code') {
                            return <StyledAnchor key={key} size='xlarge' style={{ paddingRight: '8px' }} href={content}>github</StyledAnchor>;
                        } else if (type === 'description') {
                            return <PostPar key={key}>{content}</PostPar>;
                        }
                    })
                }
            </ExpandableParentBody>
        </div>

    )

}
