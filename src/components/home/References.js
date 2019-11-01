import React, {Fragment} from "react";
import { StyledAnchor, PostSectionHeader } from "../../helpers/styled-components/typography";


const references = [
    {
        key: 0,
        href:'https://twitter.com/geddski',
        text: 'Dave Geddes on Twitter'
    },
    {
        key: 1,
        href: 'https://gedd.ski/',
        text: 'Dave Geddes blog'
    },
    {
        key: 2,
        href: 'https://gedd.ski/post/what-not-to-learn/',
        text: 'Dave Geddes Article "Deciding What Not To Learn"'
    },
    {
        key: 3,
        href: 'https://redux.js.org/faq/general',
        text: 'Redux FAQs'
    },
    {
        key: 4,
        href: "https://twitter.com/_ericelliott",
        text: "Eric Elliott on Twitter"
    },
    {
        key: 5,
        href: "https://ericelliottjs.com/premium-content/lesson-pure-functions",
        text: "Eric Elliott Less on Pure Functions"
    },
    {
        key: 6,
        href:"https://medium.com/@_ericelliott",
        text: "Eric Elliott on Medium"
    },
    {
        key: 1720,
        href: "https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea",
        text: "Eric Elliott's Composing Software Book Introduction ❤️"
    },
    {
        key: 7,
        href: "https://twitter.com/tylermcginnis?lang=en",
        text: "Tyler McGinnis on Twitter"
    },
    {
        key: 8,
        href: "https://tylermcginnis.com/courses/react-hooks/",
        text: "Tyler McGinnis's React Hooks course"
    },
    {
        key: 9,
        href: "https://tylermcginnis.com/blog",
        text: "Tyler McGinnis's blog"
    },
    {
        key: 10,
        href: "https://twitter.com/kentcdodds",
        text: "Kent C Dodds on Twitter"
    },
    {
        key: 11,
        href: 'kentcdodds.com',
        text: "kentcdodds.com"
    },
    {
        key: 12,
        href: "https://kentcdodds.com/blog/colocation",
        text: "Kent C Dodds blog article on colocation of state"
    },
    {
        key: 13,
        href: "https://twitter.com/acemarke",
        text: "Mark Erikson on Twitter"
    },
    {
        key: 100,
        href: "https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet/",
        text: "An article on Mark Erikson's blog 'Blogged Answers: Redux - Not Dead Yet!'"
    },
    {
        key: 14,
        href: "https://techbeacon.com/app-dev-testing/42-javascript-experts-follow-twitter",
        text: "JavaScript Thought Leaders on Twitter"
    },
    {
        key: 15,
        href: "https://twitter.com/mathias",
        text: "Mathias Bynens on Twitter"
    },
    {
        key: 16,
        href: "https://v8.dev/",
        text: "V8 Google JavaScript and WebAssembly engine blog site"
    },
    {
        key: 17,
        href: 'https://v8.dev/features/top-level-await',
        text: 'V8 blog post on "Top-level await"'
    },
    {
        key: 18,
        href: 'dev.to',
        text: "Dev Network"
    },
    {
        key: 19,
        href: "https://dev.to/about",
        text: "About dev.to page"
    },
    {
        key: 20,
        href:  'https://dev.to/emmawedekind/my-favorite-teachers-in-the-javascript-community-53h',
        text: 'Article on Dev.to "My Favorite Teachers In The JavaScript Community"'
    },
    {
        key: 21,
        href: 'https://dev.to/developertea/interview-with-eric-elliott-on-javascript-writing-and-creating-high-velocity-development-teams',
        text: 'Article on Dev.to "Interview with Eric Elliott"'
    },
    {
        key: 22,
        href: 'https://twitter.com/_ryannystrom',
        text: 'Ryan Nystrom on Twitter'
    },
    {
        key: 23,
        href:"syntax.fm",
        text: 'Syntax.fm'
    },
    {
        key: 24,
        href: "https://twitter.com/wesbos",
        text: 'Wes Bos on Twitter'
    },
    {
        key: 25,
        href: "https://wesbos.com/blog/",
        text: "Wes Bos's blog"
    },
    {
        key: 26,
        href: "https://twitter.com/stolinski",
        text: "Scott Tolinski on Twitter"
    },
    {
        key: 27,
        href: "https://www.scotttolinski.com/",
        text: "Scott Tolinski's site built on Gatsby"
    },
    {
        key: 28,
        href: "https://www.leveluptutorials.com/",
        text: "Scott Tolinski's Level Up Tutorials"
    }
];

export default function References () {
    return (
        <Fragment>
            <PostSectionHeader>References and Other Goodies</PostSectionHeader>
            <ul>
                {
                    references.map(({text,...rest}) => <StyledAnchor {...rest}>{text}</StyledAnchor>)
                }
            </ul>
        </Fragment>
    )
}