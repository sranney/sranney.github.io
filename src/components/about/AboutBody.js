import React, {useEffect, useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { useSpring, useTransition, animated } from 'react-spring';
import Biography from './Biography';
import Recommendations from './Recommendations';
import Portfolio from './Portfolio';

export default function AboutBody({position, direction}) {
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

/* <ReactCSSTransitionGroup
    transitionName='slide'
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
>
    {left === 0 && <Biography key={0} direction={direction} />}
    {left === 1 && <Portfolio key={1} direction={direction} />}
    {left === 2 && <Recommendations key={2} direction={direction} />}
</ReactCSSTransitionGroup> */