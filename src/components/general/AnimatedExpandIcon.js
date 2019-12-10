//@flow
import React from 'react';
import { animated, useTransition } from 'react-spring';
import {StyledCloseIcon} from '../../helpers/styled-components/icons'
import PlusIcon from '../../helpers/icons/icon-plus.svg';

type openStatusType = {
    open: boolean
};

export default function AnimatedExpandIcon({ open }: openStatusType) {
    const transition = useTransition(open, null, {
        from: { position: 'absolute', opacity: 0, top: -8, right: -8,zIndex: 100 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    return transition.map(({ item, key, props }) =>
      item ? (
        <animated.div key={key} style={props}>
          <StyledCloseIcon />
        </animated.div>
      ) : (
        <animated.div key={key} style={props}>
          <PlusIcon />
        </animated.div>
      )
    );
}
