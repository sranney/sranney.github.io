import React, {useState} from 'react';
import {animated, useSpring, useTransition} from 'react-spring';
import ExpandableSection from './ExpandableSection';
import {ExpandableParentBody, ExpandableProjectHeader} from '../../helpers/styled-components/containers';
import {StyledAnchor, StyledLink} from '../../helpers/styled-components/links';
import { PostPar } from '../../helpers/styled-components/typography';
import AnimatedExpandIcon from './AnimatedExpandIcon';


export default function ExpandableProject ({content,type,subcontent}) {
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({
        opacity: open ? 1 : 0,
        maxHeight: open ? '10000px' : '0px',
    });
    const transition = useTransition(subcontent, item => item.key, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return (
        <div>
            <ExpandableProjectHeader
                onClick={() => setOpen(o => !o)}
            >
                {
                    content === 'spencerranney.com' ?
                        <><StyledLink to='/' size='xlarge'>{content}</StyledLink><br /></>
                    :
                        <><StyledAnchor href={contenthref} size='xlarge'>{content}</StyledAnchor> <br /></>
                }
                <AnimatedExpandIcon open={open} />
            </ExpandableProjectHeader>
            <ExpandableParentBody style={expandableAnimation}>
                {
                    subcontent.map(({type,content,subcontent,key})=>{
                        if (type === 'category') {
                            return <ExpandableSection key={key} content={content} subcontent={subcontent}>{content}</ExpandableSection>;
                        } else if (type === 'source-code') {
                            return <StyledAnchor key={key} size='xlarge' style={{ paddingRight: '8px' }} href={content}>(github)</StyledAnchor>;
                        } else if (type === 'description') {
                            return <PostPar key={key}>{content}</PostPar>;
                        } else if (type === 'project') {

                        }
                    })
                }
            </ExpandableParentBody>
        </div>

    )

}
