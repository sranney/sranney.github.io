import React, {useState} from 'react';
import { useSpring, useTransition } from 'react-spring';
import { IconContext } from 'react-icons';
import { ExpandableHeader, ExpandableBody} from '../../helpers/styled-components/containers';
import AnimatedExpandIcon from './AnimatedExpandIcon';

export default function ExpandableCard({content="", subcontent="", mediaQ=false}) {
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({ 
        opacity: open ? 1 : 0,
        maxHeight: open ? '1000px' : '0px',
        transform: open ? 'scale(1)' : 'scale(0)',
        padding: open ? '32px' : '8px'
    });
    const transition = useTransition(open, null,{
        from: {position: 'absolute', opacity: 0, top: 0, right: 0},
        enter: {opacity: 1},
        leave: { opacity: 0}
    });

    return (
        <div>
            <ExpandableHeader 
                size={mediaQ ? 'base' : 'large'}
                onClick={()=>setOpen(o=>!o)}
            >
                {content}
                <AnimatedExpandIcon open={open} />
            </ExpandableHeader>
            <ExpandableBody style={expandableAnimation}>
                {subcontent}
            </ExpandableBody>
        </div>
    );
};