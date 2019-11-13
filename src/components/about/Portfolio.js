import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import {useMediaPredicate} from 'react-media-hook';
import {PostBody} from '../../helpers/styled-components/containers';
import {PostTitle, PostPar, PostSectionHeader} from '../../helpers/styled-components/typography';
import { StyledAbsoluteAnchor, StyledAnchor, StyledLink } from '../../helpers/styled-components/links';
import ExpandableCard from '../general/ExpandableCard';

const currTech = [
    {
        content: 'spencerranney.com',
        type: 'project',
        key: 'proj-portf'
    },
    {
        content: 'https://github.com/sranney/sranney.github.io/tree/develop',
        type: 'source-code',
        key: 'sc-portf'
    },
    {
        content: 'This site was written in some of the technologies that I have been enjoying learning the most right now. Within it, I am using a whooooole bunch of React related technologies! 🎊🥳🍻 These include:',
        type: 'description',
        key: 'descr-portf'
    },
    {
        content: 'UI',
        type: 'category',
        key: 'catg-ui'
    },
    {
        content: 'React 😍',
        subcontent: 'Hooks, portals and context, oh my! 🦁 I love Hooks and Context and I\'m using both throughout here. Just functions, so composable - non-visual logic can now be shared easily across different components! Shifts the thinking about React from lifecycles to syncronization of the UI with state. Context API makes it so that you can more easily colocate state with UI. And with useContext hook and custom hooks, now we also don\'t have the issue of wrapper hell. So optimized, more declarative which is easier to understand, and component tree is less cluttered. It\'s no wonder to me that a lot of people are releasing new hooks seemingly every day. Great way to keep up with all of that is the site usehooks.com',
        key: 'react',
        type: 'tech'
    },
    {
        content: 'Styled Components',
        subcontent: 'What a great tool! I love having my CSS coupled with my components. Makes things so much more maintainable!',
        key: 'styled',
        type: 'tech'
    },
    {
        content: 'React Router',
        subcontent: 'Classic React client-side routing stuff here, but reliable and does exactly what I need it to do',
        key: 'router',
        type: 'tech'
    },
    {
        content: 'React Spring',
        subcontent: 'Wow! Just wow! Started to play around with this, it is in the slide transitions between Recommendations/Portfolio/Biography and the animations of the modal currently. I\'m going to move all other animations over to this and add some more, including transitions between routes',
        key: 'spring',
        type: 'tech'
    },
    {
        content: 'React Intersection Observer',
        subcontent: 'Hooks, hooks, hooks! While I could have created this myself, it was already built and has support around it. Allows me to trigger animation/lazy loading of assets when stuff gets into the viewport!',
        key: 'rio',
        type: 'tech'
    },
    {
        content: 'React Media Hook',
        subcontent: 'Through hooks, allows me to set up media queries on the front end so that I can set up rendering different components depending on viewport width. Learned this trick from Chantastic. PWA for the win.',
        key: 'rmh',
        type: 'tech'
    },
    {
        content: 'React Swipeable Views',
        subcontent: 'a pretty cool React HOC. Allows me to make content that is good for mobile devices. Who doesn\'t like swipeable content on mobile, right?',
        key: 'rsv',
        type: 'tech'
    },
    {
        content: 'React Toggle',
        subcontent: 'A checkbox hack that is a React component, and ensures accessibility. Sweet! Looked under the hood of Dan Abramov\'s great blog site, Overreacted, and saw that this is what he uses for his toggle so I stole it. Haha! 🙈',
        key: 'rt',
        type: 'tech'
    },
    {
        content: 'Bit',
        subcontent: 'A great site that allows you to share and reuse other people\'s components. Only the loader that is used while assets are loading is from Bit. Look at the package.json and you\'ll see that is the only instance of a component from bit. Again, I could have built this one out by myself, but I already built out so much other stuff on this site by myself. I might port this over to a React Spring loader',
        key: 'bit',
        type: 'tech'
    },
    {
        content: 'BackEnd',
        type: 'category',
        key: 'catg=be'
    },
    {
        content: 'Node',
        subcontent: 'I love my JavaScript, so I love using it on the backend of applications!',
        key: 'node',
        type: 'tech'
    },
    {
        content: 'Express and Body Parser',
        subcontent: 'got some endpoints I need to hit for getting data from the back-end!',
        key: 'express',
        type: 'tech'
    },
    {
        content: 'hosting software',
        type: 'category',
        key: 'catg-host'
    },
    {
        content: 'Heroku',
        subcontent: 'host for my backend and assets',
        key: 'heroku',
        type: 'tech'
    },
    {
        content: 'Netlify',
        subcontent: 'host for my front-end. Makes refreshing pages with client-side routing without having to use hash routing a breeze!! Just a little redirect file 👏',
        key: 'Netlify',
        type: 'tech'
    },
    {
        content: 'Testing libraries',
        type: 'category',
        key: 'catg-tl'
    },
    {
        content: 'React Testing Library',
        subcontent: 'Currently building out unit tests for this site - best to use this library as it will bypass implementation details and allow me to have robust tests that don\'t need to be refactored as much',
        key: 'rtl',
        type: 'tech'
    },
    {
        content: 'React Hooks Testing Library',
        subcontent: 'I have a lot of custom hooks that I need to build out tests for!',
        key: 'rhtl',
        type: 'tech'
    },
    {
        content: 'Jest',
        subcontent: 'I have to have something to run these tests I\'m building with React Testing Library, and if I\'m using React, I usually go with Jest',
        key: 'jest',
        type: 'tech'
    },
    {
        content: 'Other utilities',
        type: 'category',
        key: 'catg-ou'
    },
    {
        content: 'lodash',
        subcontent: 'library focused on optimizing some of the more difficult array/object operations to optimize. I used it to do complex filtering on the front end and the back end of the post data that I have put together. Why not use it?',
        key: 'lodash',
        type: 'tech'
    },
    {
        content: 'DevOps/Bundling and Transpiling Stuff!',
        type: 'category',
        key: 'catg-devops'
    },
    {
        content: 'Babel',
        subcontent: 'Cuz browsers are out of sync with newest JS, need transpiling of React JSX. Makes sense. They can\'t be expected to keep up with everyone and their kids',
        key: 'babel',
        type: 'tech'
    },
    {
        content: 'Webpack and Webpack Dev Server',
        subcontent: 'While maybe a little boiler plate-y, definitely is a simple, yet powerful bundler. I want to become a master with Webpack and take over the world. 🙊',
        key: 'wp',
        type: 'tech'
    },
    {
        content: 'Webpack Bundle Analyzer',
        subcontent: 'You know that GEICO slogan, "15 minutes could save you 15% or More on Car Insurance?" After seeing the breakdown of my bundle, this technology legitimately helped me take my bundle.js size down to about 4/9 of what it was growing into. I love this tool!',
        key: 'wba',
        type: 'tech'
    }
]

export default function Portfolio() {
    const noGreaterThan450px = useMediaPredicate('(max-width: 450px)');
    return (
        <PostBody>
            <PostTitle>🛠️ Portfolio 🛠️</PostTitle>
            <StyledAbsoluteAnchor right='5%' top='3%' size='xxlarge' href='https://github.com/sranney' target='_blank'><FaGithubAlt /></StyledAbsoluteAnchor>
            <PostPar>Tap, tap, tap technology names to see a little bit about why I chose to use something, or what I used it in!</PostPar>
            {
                currTech.map(({ content, subcontent, contenthref, key, type }) => {

                    if (type === 'tech') {
                        return <ExpandableCard mediaQ={noGreaterThan450px} content={content} subcontent={subcontent} key={key} />;
                    } else if (type === 'category') {
                        return <PostSectionHeader key={key}>{content}</PostSectionHeader>
                    } else if (type === 'project') {
                        if (content === 'spencerranney.com') {
                            return <><StyledLink key={key} to='/' size='xlarge'>{content}</StyledLink><br /></>;
                        } else {
                            return <><StyledAnchor key={key} href={contenthref} size='xlarge'>{content}</StyledAnchor> <br /></>;
                        }
                    } else if (type === 'source-code') {
                        return <StyledAnchor key={key} size='xlarge' style={{ paddingRight: '8px' }} href={content}>(github)</StyledAnchor>;
                    } else if (type === 'description') {
                        return <PostPar key={key}>{content}</PostPar>;
                    }
                })
            }
        </PostBody>
    );
};