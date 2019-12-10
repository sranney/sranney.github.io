//@flow
import React from 'react';
import type {Element} from 'react';
import {useMediaPredicate} from 'react-media-hook';
import {PostBody} from '../../helpers/styled-components/postContainers';
import {PostTitle, PostPar} from '../../helpers/styled-components/typography';
import { StyledAnchor } from '../../helpers/styled-components/links';
import ExpandableProject from '../general/ExpandableProject';
import {DataContext} from '../../helpers/context/contexts';

const portfolioData = [
  {
    projectTitle: "spencerranney.com",
    key: "proj-portf",
    contenthref: "/",
    projectContent: [
      {
        sectionContent:
          "https://github.com/sranney/sranney.github.io/tree/develop",
        type: "source-code",
        key: "sc-portf"
      },
      {
        sectionContent:
          "This site was written in some of the technologies that I have enjoyed using most recently. I am using a whooooole bunch of React related technologies! 🎊🥳🍻👏",
        type: "description",
        key: "descr-portf"
      },
      {
        sectionContent: "UI",
        key: "catg-ui",
        type: "category",
        sectionSubContent: [
          {
            cardContent: "React 😍",
            cardSubContent:
              "Hooks, portals and context, oh my! 🦁 I love Hooks and Context and I'm using both throughout here. Just functions, so composable - non-visual logic can now be shared easily across different components! Shifts the thinking about React from lifecycles to syncronization of the UI with state. Context API makes it so that you can more easily colocate state with UI. And with useContext hook and custom hooks, now we also don't have the issue of wrapper hell. So optimized, more declarative which is easier to understand, and component tree is less cluttered. It's no wonder to me that a lot of people are releasing new hooks seemingly every day. Great way to keep up with all of that is the site usehooks.com",
            key: "react"
          },
          {
            cardContent: "Styled Components",
            cardSubContent:
              "What a great tool! I love having my CSS coupled with my components. Makes things so much more maintainable!",
            key: "styled"
          },
          {
            cardContent: "React Router",
            cardSubContent:
              "Classic React client-side routing stuff here, but reliable and does exactly what I need it to do",
            key: "router"
          },
          {
            cardContent: "React Spring",
            cardSubContent:
              "Wow! Just wow! Started to play around with this, it is in the slide transitions between References/Portfolio/Biography and the animations of the modal currently. I'm going to move all other animations over to this and add some more, including transitions between routes",
            key: "spring"
          },
          {
            cardContent: "React Intersection Observer",
            cardSubContent:
              "Hooks, hooks, hooks! While I could have created this myself, it was already built and has support around it. Allows me to trigger animation/lazy loading of assets when stuff gets into the viewport!",
            key: "rio"
          },
          {
            cardContent: "React Media Hook",
            cardSubContent:
              "Through hooks, allows me to set up media queries on the front end so that I can set up rendering different components depending on viewport width. Learned this trick from Chantastic. PWA for the win.",
            key: "rmh"
          },
          {
            cardContent: "React Swipeable Views",
            cardSubContent:
              "a pretty cool React HOC. Allows me to make content that is good for mobile devices. Who doesn't like swipeable content on mobile, right?",
            key: "rsv"
          },
          {
            cardContent: "React Toggle",
            cardSubContent:
              "A checkbox hack that is a React component, and ensures accessibility. Sweet! Looked under the hood of Dan Abramov's great blog site, Overreacted, and saw that this is what he uses for his toggle so I stole it. Haha! 🙈",
            key: "rt"
          },
          {
            cardContent: "Bit",
            cardSubContent:
              "A great site that allows you to share and reuse other people's components. Only the loader that is used while assets are loading is from Bit. Look at the package.json and you'll see that is the only instance of a component from bit. Again, I could have built this one out by myself, but I already built out so much other stuff on this site by myself. I might port this over to a React Spring loader",
            key: "bit"
          }
        ]
      },
      {
        sectionContent: "BackEnd",
        type: "category",
        key: "catg=be",
        sectionSubContent: [
          {
            cardContent: "Node",
            cardSubContent:
              "I love my JavaScript, so I love using it on the backend of applications!",
            key: "node"
          },
          {
            cardContent: "Express and Body Parser",
            cardSubContent:
              "got some endpoints I need to hit for getting data from the back-end!",
            key: "express"
          }
        ]
      },
      {
        sectionContent: "hosting software",
        type: "category",
        key: "catg-host",
        sectionSubContent: [
          {
            cardContent: "Heroku",
            cardSubContent: "host for my backend and assets",
            key: "heroku"
          },
          {
            cardContent: "Netlify",
            cardSubContent:
              "host for my front-end. Makes refreshing pages with client-side routing without having to use hash routing a breeze!! Just a little redirect file 👏",
            key: "Netlify"
          }
        ]
      },
      {
        sectionContent: "Testing libraries",
        type: "category",
        key: "catg-tl",
        sectionSubContent: [
          {
            cardContent: "React Testing Library",
            cardSubContent:
              "Currently building out unit tests for this site - best to use this library as it will bypass implementation details and allow me to have robust tests that don't need to be refactored as much",
            key: "rtl"
          },
          {
            cardContent: "React Hooks Testing Library",
            cardSubContent:
              "I have a lot of custom hooks that I need to build out tests for!",
            key: "rhtl"
          },
          {
            cardContent: "Jest",
            cardSubContent:
              "I have to have something to run these tests I'm building with React Testing Library, and if I'm using React, I usually go with Jest",
            key: "jest"
          }
        ]
      },
      {
        sectionContent: "Other utilities",
        type: "category",
        key: "catg-ou",
        sectionSubContent: [
          {
            cardContent: "lodash",
            cardSubContent:
              "library focused on optimizing some of the more difficult array/object operations to optimize. I used it to do complex filtering on the front end and the back end of the post data that I have put together. Why not use it?",
            key: "lodash"
          },
          {
            cardContent: "eslint",
            cardSubContent:
              "because I'm not going to always catch where I make mistakes and because this helps me to remember best practices",
            key: "eslint"
          },
          {
            cardContent: "Flow",
            cardSubContent:
              "makes me be a lot more intentional with my code. implements static typing - helps with ensuring prop types are set and also helps me find a few additional errors along the way... I'm definitely not using this tool to its fullest extent yet, but I wanted to start learning it",
            key: "flow"
          }
        ]
      },
      {
        sectionContent: "DevOps/Bundling and Transpiling Stuff!",
        type: "category",
        key: "catg-devops",
        sectionSubContent: [
          {
            cardContent: "Babel",
            cardSubContent:
              "Cuz browsers are out of sync with newest JS, need transpiling of React JSX. Makes sense. They can't be expected to keep up with everyone and their kids",
            key: "babel"
          },
          {
            cardContent: "Webpack and Webpack Dev Server",
            cardSubContent:
              "While maybe a little boiler plate-y, definitely is a simple, yet powerful bundler. I want to become a master with Webpack and take over the world. 🙊",
            key: "wp"
          },
          {
            cardContent: "Webpack Bundle Analyzer",
            cardSubContent:
              'You know that GEICO slogan, "15 minutes could save you 15% or More on Car Insurance?" After seeing the breakdown of my bundle, this technology legitimately helped me take my bundle.js size down to about 4/9 of what it was growing into. I love this tool!',
            key: "wba"
          }
        ]
      }
    ]
  }
];

type PortfolioContent = {|
    projectTitle: string,
    key: string,
    contenthref: string,
    projectContent: Array<{
        sectionContent: string,
        key: string,
        type: string,
        sectionSubContent?: Array<{
            cardContent: string,
            cardSubContent: string,
            key: string
        }>
    }>
|};

export default function Portfolio() {
    const noGreaterThan450 = useMediaPredicate('(max-width: 450px)');
    return (
      <DataContext.Provider value={noGreaterThan450}>
        <PostBody>
          <PostTitle>🛠️ Portfolio 🛠️</PostTitle>
          <StyledAnchor
            size="xxlarge"
            href="https://github.com/sranney"
            target="_blank"
          >
            See my github profile
          </StyledAnchor>
          <PostPar>
            Tap, tap, tap projects, categories and technology names to see a
            little bit about why I chose to use something, or what I used it in!
          </PostPar>
          {portfolioData.map <
            Element<typeof ExpandableProject>>
              (({ key, ...projectContent }: PortfolioContent) => (
                <ExpandableProject key={key} {...projectContent} />
              ))}
        </PostBody>
      </DataContext.Provider>
    );
}