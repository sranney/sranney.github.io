import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import {useTransition, animated} from 'react-spring';

import {PostBody} from '../../helpers/styled-components/containers';
import {PostTitle, PostPar} from '../../helpers/styled-components/typography';
import { StyledAbsoluteAnchor } from '../../helpers/styled-components/links';
import Skills from '../portfolio/Skills';

const currTech = [
    {
        text: 'React using Hooks APIs and Context API 😍',
        key: 'react'
    },
    {
        text: 'Styled Components',
        text: 'What a great tool! I love having my CSS coupled with my components. Makes things so much more maintainable!',
        key: 'styled'
    },
    {
        text: 'React Router',
        subtext: 'Classic React stuff here, but reliable and does exactly what I need it to do',
        key: 'router'
    },
    {
        text: 'React Spring',
        subtext: 'Wow! Just wow! Started to play around with this, it is in the slide transitions between Recommendations/Portfolio/Biography and the animations of the modal currently. I\'m going to move all other animations over to this and add some more, including transitions between routes',
        key: 'spring'
    },
    {
        text: 'Node',
        key: 'I love my JavaScript',
        key: 'node'
    },
    {
        text: 'Heroku',
        subtext: 'host for my backend',
        key: 'heroku'
    },
    {
        text: 'Express and Body Parser',
        subtext: 'got some endpoints I need to hit for getting data from the back-end!',
        key: 'express'
    },
    {
        text: 'lodash',
        subtext: 'library focused on optimizing some of the more difficult array/object operations to optimize. Why not use it?',
        key: 'lodash'
    },
    {
        text: 'React Testing Library',
        subtext: 'Currently building out unit tests for this site - best to use this library as it will bypass implementation details and allow me to have robust tests that don\'t need to be refactored as much',
        key: 'rtl'
    },
    {
        text: 'React Hooks Testing Library',
        subtext: 'I have a lot of custom hooks that I need to build out tests for!',
        key: 'rhtl'
    },
    {
        text: 'Jest',
        subtext: 'I have to have something to run these tests with, and if I\'m using React, I usually go with Jest',
        key: 'jest'
    },
    {
        text: 'Netlify',
        subtext: 'host for my front-end. Makes refreshing pages with client-side routing without having to use hash routing a breeze!! Just a little redirect file 👏',
        key: 'Netlify'
    },
    {
        text: 'React Intersection Observer',
        subtext: 'Hooks, hooks, hooks! While I could have created this myself, it was already built and has support around it. Allows me to trigger animation/lazy loading of assets when stuff gets into the viewport!',
        key: 'rio'
    },
    {
        text: 'React Media Hook',
        subtext: 'Through hooks, allows me to set up media queries on the front end so that I can set up rendering different components depending on viewport width. Learned this trick from Chantastic. PWA for the win.',
        key: 'rmh'
    },
    {
        text: 'React Swipeable Views',
        subtext: 'a pretty cool React HOC. Allows me to make content that is good for mobile devices. Who doesn\'t like swipeable content on mobile, right?',
        key: 'rsv'
    },
    {
        text: 'React Toggle',
        subtext: 'A checkbox hack that is a React component, and ensures accessibility. Sweet! Looked under the hood of Dan Abramov\'s great blog site, Overreacted, and saw that this is what he uses for his toggle so I stole it. Haha! 🙈',
        key: 'rt'
    },
    {
        text: 'Bit',
        subtext: 'A great site that allows you to share and reuse other people\'s components. Only the loader that is used while assets are loading is from Bit. Look at the package.json and you\'ll see that is the only instance of a component from bit. Again, I could have built this one out by myself, but I already built out so much other stuff on this site by myself. I might port this over to a React Spring loader. We\'ll see',
        key: 'bit'
    },
    {
        text: 'Babel',
        subtext: 'Cuz browsers are out of sync with newest JS, need transpiling of React JSX. Makes sense. They can\'t be expected to keep up with everyone and their kids',
        key: 'babel'
    },
    {
        text: 'Webpack and Webpack Dev Server',
        subtext: 'While maybe a little boiler plate-y, definitely is a simple, yet powerful bundler. I want to become a master with Webpack and take over the world. 🙊',
        key: 'wp'
    },
    {
        text: 'Webpack Bundle Analyzer',
        subtext: 'You know that GEICO slogan, "15 minutes could save you 15% or More on Car Insurance?" After seeing the breakdown of my bundle, this technology legitimately helped me take my bundle.js size down to about 4/9 of what it was growing into. I love this tool!'
    }
]

export default function Portfolio() {
    return (
        <PostBody>
            <PostTitle>🛠️ Portfolio 🛠️</PostTitle>
            <StyledAbsoluteAnchor right='5%' top='10%' size='xxlarge' href='https://github.com/sranney' target='_blank'><FaGithubAlt /></StyledAbsoluteAnchor>
            <PostPar>
                This site represents what I have been enjoying learning the most right now. Within it, I am using a whooooole bunch of React related technologies! 🎊🥳🍻
            </PostPar>
            <PostPar>
                These include: 
            </PostPar>
        </PostBody>
    );
}