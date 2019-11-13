import React, {useState, useContext} from 'react';
import { useSpring } from 'react-spring';

import AnimatedExpandIcon from './AnimatedExpandIcon';

import { ExpandableHeader, ExpandableBody} from '../../helpers/styled-components/containers';
import {DataContext} from '../../helpers/context/contexts';

export default function ExpandableCard({content="", subcontent=""}) {
    const { noGreaterThan450: mediaQ } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({ 
        opacity: open ? 1 : 0,
        maxHeight: open ? '1000px' : '0px',
        transform: open ? 'scale(1)' : 'scale(0)',
        padding: open ? '32px' : '8px'
    });

    return (
        <div>
            <ExpandableHeader 
                size={mediaQ ? 'small' : 'base'}
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