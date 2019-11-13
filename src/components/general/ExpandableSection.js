import React, { useState } from 'react';
import { useSpring, useTransition, animated} from 'react-spring';
import { ExpandableSectionHeader, ExpandableParentBody } from '../../helpers/styled-components/containers';
import AnimatedExpandIcon from './AnimatedExpandIcon';
import ExpandableCard from './ExpandableCard';

export default function ExpandableSection({ content = "", subcontent=[], mediaQ = false }) {
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({
        opacity: open ? 1 : 0,
        maxHeight: open ? '8000px' : '0px',
    });
    const transition = useTransition(subcontent, item => item.key,{
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    return (
        <div>
            <ExpandableSectionHeader
                size={mediaQ ? 'base' : 'large'}
                onClick={() => setOpen(o => !o)}
            >
                {content}
                <AnimatedExpandIcon open={open}/>
            </ExpandableSectionHeader>
            <ExpandableParentBody className='what the fuck' style={expandableAnimation}>
                {/* {transition.map(({item, key, props})=>{
                    console.log(item);
                    <animated.div key={key} style={props}><ExpandableCard {...item} /></animated.div>
                })} */}

                {subcontent.map(stuff => <ExpandableCard {...stuff}/>)}
            </ExpandableParentBody>
        </div>
    );
};