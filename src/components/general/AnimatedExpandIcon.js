//@flow
import React from 'react';
import { animated, useTransition } from 'react-spring';
import { FaTimes, FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';

type openStatusType = {
    open: boolean
};

export default function AnimatedExpandIcon({ open }: openStatusType) {
    const transition = useTransition(open, null, {
        from: { position: 'absolute', opacity: 0, top: 0, right: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    return transition.map(({ item, key, props }) =>
        item
            ? (
                <animated.div key={key} style={props}>
                    <IconContext.Provider value={{ style: { color: 'var(--color-danger-800)' } }}>
                        <FaTimes />
                    </IconContext.Provider>
                </animated.div>
            )
            : <animated.div key={key} style={props}><FaPlus /></animated.div>
    );
}
