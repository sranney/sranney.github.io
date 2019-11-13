import React, {useState, useContext} from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import { ThemeContext } from 'styled-components';
import { FaTimes, FaPlus } from 'react-icons/fa';
import { ExpandableHeader, ExpandableBody} from '../../helpers/styled-components/containers';

export default function ExpandableCard({content="", subcontent="", mediaQ=false}) {
    const [open, setOpen] = useState(false);
    const expandableAnimation = useSpring({ 
        opacity: open ? 1 : 0,
        maxHeight: open ? '800px' : '0px',
        transform: open ? 'scale(1)' : 'scale(0)',
        padding: open ? '32px' : '8px'
    });
    const transition = useTransition(open, null,{
        from: {position: 'absolute', opacity: 0},
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
                {
                    transition.map(({item, key, props}) => {
                        item
                            ? <animated.div key={key} style={props}><FaTimes/></animated.div>
                            : <animated.div key={key} style={props}><FaPlus /></animated.div>
                    })
                }
            </ExpandableHeader>
            <ExpandableBody style={expandableAnimation}>
                {subcontent}
            </ExpandableBody>
        </div>
    );
};