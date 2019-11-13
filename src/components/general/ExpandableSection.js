import React, { useState, useContext } from 'react';
import { useSpring } from 'react-spring';

import AnimatedExpandIcon from './AnimatedExpandIcon';
import ExpandableCard from './ExpandableCard';

import { ExpandableSectionHeader, ExpandableParentBody } from '../../helpers/styled-components/containers';
import {DataContext} from '../../helpers/context/contexts';

export default function ExpandableSection({ content = "", subcontent=[] }) {
    const { noGreaterThan450: mediaQ } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({
        opacity: open ? 1 : 0,
        maxHeight: open ? '8000px' : '0px',
    });

    return (
        <div>
            <ExpandableSectionHeader
                size={mediaQ ? 'base' : 'large'}
                onClick={() => setOpen(o => !o)}
                style={{overflow: 'hidden'}}
            >
                {content}
                <AnimatedExpandIcon open={open}/>
            </ExpandableSectionHeader>
            <ExpandableParentBody style={expandableAnimation}>
                {subcontent.map(stuff => <ExpandableCard {...stuff}/>)}
            </ExpandableParentBody>
        </div>
    );
};