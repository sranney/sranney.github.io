//@flow
import React, { useState, useContext } from 'react';
import type {Element} from 'react';
import { useSpring } from 'react-spring';

import AnimatedExpandIcon from './AnimatedExpandIcon';
import ExpandableCard from './ExpandableCard';
import type {CardContentTypes} from './ExpandableCard';

import { ExpandableSectionHeader, ExpandableParentBody } from '../../helpers/styled-components/expandableContainers';
import {DataContext} from '../../helpers/context/contexts';

export type CardTypes = {|key: string,...CardContentTypes|};

export type SectionContentTypes = {|sectionContent: string,sectionSubContent?: Array<CardTypes>|};

export default function ExpandableSection({ 
    sectionContent="", 
    sectionSubContent=[{cardContent:"",cardSubContent:"",key:""}] 
}: SectionContentTypes) {
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
                {sectionContent}
                <AnimatedExpandIcon open={open}/>
            </ExpandableSectionHeader>
            <ExpandableParentBody style={expandableAnimation}>
                {sectionSubContent.map<Element<typeof ExpandableCard>>(({key,...cardContent}: CardTypes) => <ExpandableCard key={key} {...cardContent}/>)}
            </ExpandableParentBody>
        </div>
    );
}