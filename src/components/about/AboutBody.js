import React, {useEffect, useState} from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import Biography from './Biography';
import Recommendations from './Recommendations';
import Portfolio from './Portfolio';

export default function AboutBody({position=0, direction='left'}) {
    const determineComponent = (position) => {
        if (position === 0) {
            return [{
                component: <Biography />,
                key: 'bio'
            }];
        } else if (position === 1) {
            return [{
                component: <Portfolio />,
                key: 'portf'
            }];
        } else if (position === 2) {
            return [{
                component: <Recommendations />,
                key: 'recs'
            }];
        }
    }

    const [component, setComponent] = useState(determineComponent(position));

    useEffect(() => setComponent(determineComponent(position)),[position]);

    const transition = useTransition(component,comp=>comp.key, {
        from: { opacity: 0, left: `${direction === 'right' ? '-' : ''}150%`, transform: 'translateX(-50%)', position: 'absolute', width: '100%'},
        enter: { opacity: 1, left: '50%', transform: 'translateX(-50%)'},
        leave: { opacity: 0, left: `${direction === 'right' ? '' : '-'}150%`, transform: 'translateX(-50%)'}
    });

    return (
        <div style={{position: 'relative'}}>
            {transition.map(({item, key, props}) => <animated.div key={key} style={props}>{item.component}</animated.div>)}
        </div>
    );
};