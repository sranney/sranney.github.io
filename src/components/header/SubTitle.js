import React from 'react';
import {animated, useTransition} from 'react-spring';
import {HeaderPar} from '../../helpers/styled-components/typography';

const text = [
    {
        letter: 'F',
        key: 0
    },
    {
        letter: 'o',
        key: 1
    },
    {
        letter: 'r',
        key: 2
    },
    {
        letter: ' ',
        key: 3
    },
    {
        letter: 't',
        key: 4
    },
    {
        letter: 'h',
        key: 5
    },
    {
        letter: 'e',
        key: 6
    },
    {
        letter: ' ',
        key: 7
    },
    {
        letter: 'l',
        key: 8
    },
    {
        letter: 'o',
        key: 9
    },
    {
        letter: 'v',
        key: 10
    },
    {
        letter: 'e',
        key: 11
    },
    {
        letter: ' ',
        key: 12
    },
    {
        letter: 'o',
        key: 13
    },
    {
        letter: 'f',
        key: 14
    },
    {
        letter: ' ',
        key: 15
    },
    {
        letter: 'E',
        key: 16
    },
    {
        letter: 'n',
        key: 17
    },
    {
        letter: 'g',
        key: 18
    },
    {
        letter: 'i',
        key: 19
    },
    {
        letter: 'n',
        key: 20
    },
    {
        letter: 'e',
        key: 21
    },
    {
        letter: 'e',
        key: 22
    },
    {
        letter: 'r',
        key: 23
    },
    {
        letter: 'i',
        key: 24
    },
    {
        letter: 'n',
        key: 25
    },
    {
        letter: 'g',
        key: 26
    }
]

export default function SubTitle() {
    const transition = useTransition(text,text=>text.key,{
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });
    return (
        <p>
            {transition.map(({item, key, props})=>{
                return <animated.span key={key} style={props}>{item.letter}</animated.span>;
            })}
        </p>
    )
}