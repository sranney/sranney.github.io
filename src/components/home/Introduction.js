import React, {useContext} from "react";

import TwitterQuote from "../blog/TwitterQuote";

import {FlexWrapper} from "../../helpers/styled-components/containers";
import { PostPar, PostTitle, PostSectionHeader, StyledAnchor } from "../../helpers/styled-components/typography";
import {StyledImage} from "../../helpers/styled-components/assets";

// const IntroArr = [
//     {
//         type: 'title',
//         content: 'Introduction - Learning Strategy',
//     },
//     {
//         type: 'par',
//         content: 'It goes without saying that learning new technology can be quite overwhelming. 🥵',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'There are seemingly an endless number of them first of all. Second, the rate at which technology changes means that as you master one thing, it could potentially become "out of date." Even worse, what you are learning could become 💀. But, as soon as you look at job descriptions, you see experience required on a whole bunch of technologies that, if you blinked your eyes, you may not even know what they are, why they exist or what problem they were made to solve. 🥴 So, you panic, thinking, "There's no way I'll be able to keep up with the Jones's." You don't want to become a 👻, to become a 🦖, so you think, "Okay, let's try to figure out what I need to learn." But if you are anything like I used to be, looking at job descriptions can swell that anxiety up again. Some jobs want PHP. Some jobs want 10 years of React experience (haha). Other jobs want a plethora of other things. A whole bunch of technology is out there.😵',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'What do you do?',
//         underline: false
//     },
//     {
//         type: 'sectionheader',
//         content: 'Motivation - Arm Yourself for the Hard Work Ahead',
//     },
//     {
//         type: 'par',
//         content: 'As engineers, we spend a lot of time thinking about "Why?" 🤨 Because of the opportunity costs of investing your time in learning new technology, you\'ve got to ask this.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'Why invest your time in learning technology this instead of doing other things you enjoy?',
//         underline: true
//     },
//     {
//         type: 'par',
//         content: 'This question is so important to answer honestly starting out, and can be a reminder why you are doing this for the days that are particularly hard.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'For me, the answer to that question really boils down to a few things.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'Often times, development is what I want to spend my time doing above a lot of other things. Writing code. Thinking about application design. Taking an idea, just a thought, and turning it into something that I can see and interact with, that is alive. 😍 Development is a level of creativity I have not found in anything else. It is an art. 🖌️ When I wrote my first application, I knew that this was the right field for me.❤️',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: '"If you want to do something, work hard for it." This is how I was raised. The ultimate outcome for this way of thinking for me has played out in the following way:  If I truly want something, I will work hard to achieve it. Over the years, I have grown a hope that I can overcome challenges I face. I love challenges, and view them as growth opportunities.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'On top of all these things, I love sharing and discussing what I am passionate about. This is a litmus test for me. If I am going to do skill sharing with someone, I better truly understand what I am talking about. No need to waste anyone\'s time doing anything else.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'Because I love growth opportunities, teaching and development, I spend a lot of time learning and becoming a better engineer. I seek out the areas that I am not strong in, and figure out how I can get better.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'The hope of being able to accomplish things when faced with challenges is a critical component in learning new technology or trying to become a engineer.',
//         underline: false
//     },
//     {
//         type: 'twitter',
//         content: 'https://twitter.com/TejasKumar_/status/1183038223037206528?ref_src=twsrc%5Etfw' 
//     },
//     {
//         type: 'twitter',
//         content: 'https://twitter.com/TejasKumar_/status/1183038225717313538?ref_src=twsrc%5Etfw'
//     },
//     {
//         type: 'par',
//         content: 'I largely agree with what the study and Tejas are explaining. Hope of overcoming is very important to have in everything you strive towards. However, I disagree with what is being expressed as "reality." I have seen first-hand that I overcome challenges. With just effort, strategy and perseverance, not delusional thinking, you can overcome challenges and achieve what you want. How many challenges have you overcome? What did you do to overcome those challenges? Can you apply that same attack plan to other things? Reality truly is closer to optimism when it comes to learning development or a new technology. Fear and doubt, especially when it comes to learning how to code, are lies and they generate pessimism. In my opinion, that\'s closer to a delusion.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'You can do this. It will take time and hard work, but you can do this. 💦 🔨 You just need a strategy! 🗺️',
//         underline: true
//     },
//     {
//         type: 'sectionheader',
//         content: 'Understand you don\'t have to know it all. No one does!',
//     },
//     {
//         type: 'par',
//         content: 'That feeling you get of being overwhelmed by what to learn is just a bit of shock from how fast everything moves and how many technologies are out there.',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'Ask yourself these questions:',
//         underline: true
//     },
//     {
//         type: 'par',
//         content: 'Do you truly think that there is someone out there with a mastery of every technology that is coming up daily? Do you think that the vast majority of companies looking to hire are looking for engineers who know the newest technology within the first month that it has been released? Do you think that adaptation speed is immediate? ',
//         underline: false
//     },
//     {
//         type: 'par',
//         content: 'After realizing that those questions were only answered "yes" by the overwhelming anxiety of, how can you keep up with everything, and not reality, you begin to understand that the actual questions you need to answer are much smaller than all of that. It is about one step at a time. You don\'t need to solve all the big problems right now. 😌',
//         underline: true
//     },
//     {
//         type: 'sectionheader',
//         content: 'Flip your perspective: Instead of how can I learn everything, think about how to decide what not to learn'
//     },
//     {

//     }
// ]

export default function Introduction () {
    return (
        <React.Fragment>
            <PostTitle>Introduction - Learning Strategy</PostTitle>
            <PostPar>
                It goes without saying that learning new technology can be quite overwhelming. 🥵 
            </PostPar>
            <PostPar>
                There are seemingly an endless number of them first of all. Second, the rate at which technology changes means that as you master one thing, it could potentially become "out of date." Even worse, what you are learning could become 💀. But, as soon as you look at job descriptions, you see experience required on a whole bunch of technologies that, if you blinked your eyes, you may not even know what they are, why they exist or what problem they were made to solve. 🥴 So, you panic, thinking, "There's no way I'll be able to keep up with the Jones's." You don't want to become a 👻, to become a 🦖, so you think, "Okay, let's try to figure out what I need to learn." But if you are anything like I used to be, looking at job descriptions can swell that anxiety up again. Some jobs want PHP. Some jobs want 10 years of React experience (haha). Other jobs want a plethora of other things. A whole bunch of technology is out there.😵
            </PostPar>
            <PostPar>
                What do you do? 
            </PostPar>
            <PostSectionHeader>
                Motivation - Arm Yourself for the Hard Work Ahead
            </PostSectionHeader>
            <PostPar>
                As engineers, we spend a lot of time thinking about "Why?" 🤨 Because of the opportunity costs of investing your time in learning new technology, you've got to ask this. 
            </PostPar>
            <PostPar underline>
                Why invest your time in learning technology this instead of doing other things you enjoy?
            </PostPar>
            <PostPar>
                This question is so important to answer honestly starting out, and can be a reminder why you are doing this for the days that are particularly hard.
            </PostPar>
            <PostPar>
                For me, the answer to that question really boils down to a few things.
            </PostPar>
            <PostPar>
                Often times, development is what I want to spend my time doing above a lot of other things. Writing code. Thinking about application design. Taking an idea, just a thought, and turning it into something that I can see and interact with, that is alive. 😍 Development is a level of creativity I have not found in anything else. It is an art. 🖌️ When I wrote my first application, I knew that this was the right field for me.❤️
            </PostPar>
            <PostPar>
                "If you want to do something, work hard for it." This is how I was raised. The ultimate outcome for this way of thinking for me has played out in the following way:  If I truly want something, I will work hard to achieve it. Over the years, I have grown a hope that I can overcome challenges I face. I love challenges, and view them as growth opportunities.
            </PostPar>
            <PostPar>
                On top of all these things, I love sharing and discussing what I am passionate about. This is a litmus test for me. If I am going to do skill sharing with someone, I better truly understand what I am talking about. No need to waste anyone's time doing anything else.
            </PostPar>            
            <PostPar>
                Because I love growth opportunities, teaching and development, I spend a lot of time learning and becoming a better engineer. I seek out the areas that I am not strong in, and figure out how I can get better.
            </PostPar>
            <PostPar>
                The hope of being able to accomplish things when faced with challenges is a critical component in learning new technology or trying to become a engineer.
            </PostPar>
            <TwitterQuote url="https://twitter.com/TejasKumar_/status/1183038223037206528?ref_src=twsrc%5Etfw"/>
            <TwitterQuote url="https://twitter.com/TejasKumar_/status/1183038225717313538?ref_src=twsrc%5Etfw"/>
            <PostPar>
                I largely agree with what the study and Tejas are explaining. Hope of overcoming is very important to have in everything you strive towards. However, I disagree with what is being expressed as "reality." I have seen first-hand that I overcome challenges. With just effort, strategy and perseverance, not delusional thinking, you can overcome challenges and achieve what you want. How many challenges have you overcome? What did you do to overcome those challenges? Can you apply that same attack plan to other things? Reality truly is closer to optimism when it comes to learning development or a new technology. Fear and doubt, especially when it comes to learning how to code, are lies and they generate pessimism. In my opinion, that's closer to a delusion.
            </PostPar>
            <PostPar underline>
                You can do this. It will take time and hard work, but you can do this. 💦 🔨 You just need a strategy! 🗺️
            </PostPar>
            <PostSectionHeader>
                Understand you don't have to know it all. No one does!
            </PostSectionHeader>
            <PostPar>
                That feeling you get of being overwhelmed by what to learn is just a bit of shock from how fast everything moves and how many technologies are out there.
            </PostPar>
            <PostPar underline>
                Ask yourself these questions:
            </PostPar>
            <PostPar>
                Do you truly think that there is someone out there with a mastery of every technology that is coming up daily? Do you think that the vast majority of companies looking to hire are looking for engineers who know the newest technology within the first month that it has been released? Do you think that adaptation speed is immediate? 
            </PostPar>
            <PostPar underline>
                After realizing that those questions were only answered "yes" by the overwhelming anxiety of, how can you keep up with everything, and not reality, you begin to understand that the actual questions you need to answer are much smaller than all of that. It is about one step at a time. You don't need to solve all the big problems right now. 😌
            </PostPar>
            <PostSectionHeader>
                Flip your perspective: Instead of how can I learn everything, think about how to decide what not to learn
            </PostSectionHeader>
            <PostPar>
                There is a great article on <StyledAnchor href='https://twitter.com/geddski'>Dave Geddes</StyledAnchor> <StyledAnchor href='https://gedd.ski/'>blog</StyledAnchor> entitled, <StyledAnchor href='https://gedd.ski/post/what-not-to-learn/'>"Deciding What Not To Learn"</StyledAnchor>. This article is actually referenced in the <StyledAnchor href='https://redux.js.org/faq/general#when-should-i-learn-redux'>Redux FAQs</StyledAnchor> documentation. It is that good.
            </PostPar>
            <PostPar>
                What Geddes discusses is a technique that will help us narrow down what you actually want to learn. So let's get started:
            </PostPar>
            <PostPar>
                First, write down all of the frameworks and technologies that you can think of that you might have an interest in learning or that you have read about in articles or job reqs. Your list will most likely be different than mine. If it helps, you can form them in a diagram as they have been done by Geddes. Pictured below is my stab at his strategy. Although I am currently a front-end engineer, I have experience with database analytics so I very much enjoy SQL and NoSQL technologies. Then pick the ones that you are actually interested in...
            </PostPar>
            <PostPar underline>
                ... and cross everything else out.😮
            </PostPar>
            <div><StyledImage src='https://mylearningposts-api.herokuapp.com/images/how-to-determine-what-not-to-learn.jpg' /></div>
            <PostPar>
                Confession to make: I am a huge fan of the JavaScript library, React. You will see a pattern emerge from the tech that I haven't crossed out haha. In the future, yours and my charts may change. But for the right now, this is what we should focus on. I didn't cross Svelte off the list because I've been intrigued by what I have heard. Additionally, several of the things that I have crossed off the list, such as Karma/Jasmine testing, or Express or CSS modules are things that I know. I will definitely continue to use them, but they aren't where my focus for learning will be going. I would much rather get to know Gatsby, GraphQL and Apollo then I would be to learn more about Express.
            </PostPar>
            <PostPar>
                Geddes states, "An interesting thing happens when you do this. You don't feel like you have to learn everything... precious headspace and mental energy get freed up to learn the few things you're actually interested about right now." He crosses Ember out of his diagram and states, "I'm not going to be learning Ember any time soon, but Ember is doing things that is making all the other current and future frameworks better."
            </PostPar>
            <PostPar underline>
                To me, this last statement implicitly summarizes a very important part of Geddes' concept. Have you ever heard the phrase "Jack of all trades, master of none?" No one is capable of taking all of this on individually. We must rely on other engineers to pick up those other frameworks. It is more of our responsibility in the field to be disciplined in crafting our knowledge in what excites us, in what can keep our focus. Jumping around to learn a lot of different technology amounts to nothing more than a distracted mind. While other engineers work on what excites them, but makes us 😴, I will be working on React, for instance. 🤗 I will have more of a chance of making a difference with that framework, because I love it so much, then I would in something that I was made bored by. That's the hope anyways...
            </PostPar>
            <PostSectionHeader>
                Let's take one step back.
            </PostSectionHeader>
            <PostPar>
                I came across this tweet the other day that I really like.
            </PostPar>
            <TwitterQuote url="https://twitter.com/iammerrick/status/1185754417674407937?ref_src=twsrc%5Etfw" />
            <PostPar>
                So what really matters? Tools such as React, Angular, Svelte, etc? Or is it more the high level thinking that you learn from using those tools? How does evolution occur in technology? 
            </PostPar>
            <PostPar underline>
                💡💡💡 Evolution in technology is always spurred on by evaluating the problems of today, the attempts to solve that problem today, seeing what worked, understanding "Why does a technology exist?" and "What problem is this trying to solve?" The great wisdom that Christensen is sharing with us here is: "Sure, learn the tools, but even more importantly, learn the why." That is going to be so much more important to your development as an engineer. <StyledAnchor href="https://twitter.com/_ericelliott">Eric Elliott</StyledAnchor> expresses a similar sentiment here.  
            </PostPar>
            <TwitterQuote url="https://twitter.com/_ericelliott/status/1186991102890565632?ref_src=twsrc%5Etfw" />
            <PostPar>
                Again, what matters more here than what you choose to learn is how you choose to learn it. As <StyledAnchor href="https://twitter.com/tylermcginnis?lang=en">Tyler McGinnis</StyledAnchor> states in his wonderful 📢 <StyledAnchor href="https://tylermcginnis.com/courses/react-hooks/">React Hooks course</StyledAnchor>📢, "When learning something new, ask two questions. Why does this thing exist? What problems does this thing solve?" 🧐
            </PostPar>
            <PostPar underline>
                💡💡💡 The reasons just outlined demonstrate why reading Medium articles is far from an acceptable way to learn what should be the bare minimum knowledge of technology before applying them. It is only through what is discussed above that responsible members of the development community can be relied upon to carry things forward as Geddes discusses.
            </PostPar>
            <PostSectionHeader>
                So you want to learn a technology? Read the manual first.
            </PostSectionHeader>
            <PostPar>
                When I was in boot camp, my go-to method for using a tool was to just jump right into it, reading blogs and forums, and watching Udemy and PluralSight courses to help me through the pitfalls. Each one of those sources would state something differently, or give me answers that were only part of the puzzle. Very rarely did the authors actually take a step back from the tool to ask the questions that Tyler McGinnis gifted his students with. Those questions that are so important to understanding just exactly what I was getting myself into. So my learning was all over the place, and, worse than that, I was only learning bits and pieces of HOW to learn a tool, without actually learning the tool. My return on the time I was spending was minimal, which is frustrating to say the least. But a lot of other developers around me were doing the same thing, so I kept that up for a bit. 
            </PostPar>
            <PostPar>
                <StyledAnchor href="https://twitter.com/kentcdodds">Kent C Dodds</StyledAnchor> is one of the most respected JavaScript engineers today. Recently, he posted this tweet in a discussion about Redux and <StyledAnchor href="https://kentcdodds.com/blog/colocation">colocation of state</StyledAnchor>:
            </PostPar>
            <TwitterQuote url="https://twitter.com/kentcdodds/status/1176490279282458624?ref_src=twsrc%5Etfw"/>
            <PostPar>
                This was very interesting to me.🤔 I had been using Redux for quite some time by the time that I read this statement. I had read 📚 on the technology, and felt like I had a pretty good grasp on the technology. But hearing this, I thought, why not go through the <StyledAnchor url="https://redux.js.org/faq">FAQs</StyledAnchor> and test that knowledge? At the very least, I will gain a much better understanding of this software.
            </PostPar>
            <PostPar>
                After spending a few days in the FAQs, and taking 📝📝📝, I have come out understanding so much more about how to use the entire system. I will be sharing these notes in another post here in the near future. <StyledAnchor url="https://twitter.com/acemarke">Mark Erikson</StyledAnchor> has done an excellent job of finding outside resources and maintaining these docs. Surprisingly, excluding working with and debugging Redux implementation issues, I have learned more by doing this than by reading countless number of other resources, and watching 45 hour long Udemy courses.
            </PostPar>
            <PostPar>
                But, honestly, is it that surprising?? Let's think about the game telephone 📞. Let me tell you about the game, in case you aren't familiar with it. You play with a group of friends/family. One person starts the game off by whispering in another person's ear as to not reveal to the other participants what they have said. Then the person who has received the message whispers what they have heard into another participant's ear. This continues until the last remaining participant hears the message. That last person states what they have heard. It is always interesting to hear how distant the last received message is from the original message. It is always missing some elements of the intended method.
            </PostPar>
            <PostPar>
                For software there is always one set of documentation, one source of truth from which all other blogs, video courses, etc. are written from. The official documentation on the software is that OG. Personal experience while important as the next step after reading through the official docs, can introduce bias and thus stray from the documentation. Any way that you look at it, reading someone's blog or watching someone's course unless they have actually been involved in the creation of the tool, is inevitably just that individual's perspective on the tool. What could be even worse, is that you don't know how many degrees of separation the author of a blog is from the actual documentation. Every degree adds additional bias, adds different twists and ultimately gets away from "Why does the technology exist?" and "What problems does it solve?". 📞 You end up focusing on how to use it, and forget about the intended use for a technology or the appropriate application. That's why a lot of software ends up being written poorly. Developers aren't asking the questions that matter when writing software, they are focused on how to implement.
            </PostPar>
            <PostPar underline>
                So if you are an engineer, and want to learn a new technology, read the docs!! Or you could end up using a 🔧 when you needed a 🔨.
            </PostPar>
            <PostPar>
                Of course, I'm not against video courses, blogs, forums, etc. Just don't start there! If you start with the official documentation, you will discover something pretty cool. You'll be coming to those other learning materials with a deeper understanding of the tools already. You'll notice pretty quickly the difference between articles that were written by people who haven't read the official docs, and those that had the official docs in mind. You'll notice more of the posers. It gives you more of the power. I can't tell you how many times I have watched a video or read a blog and seen this. I used to never see that, but just get confused if something wasn't working right.
            </PostPar>
            <PostPar underline>
                By giving yourself the upperhand of reading the official docs, learning from all other resources becomes so much easier. You get the power of understanding your tools better and of having knowledge before you start digging into other resources.
            </PostPar>
            <PostSectionHeader>
                Other resources - how to know what blogs to read, what videos to watch? What other resources are there?
            </PostSectionHeader>
            <PostPar>
                Official docs tend to reference articles that are helpful in understanding topics. That's a helpful strategy in finding additional resources. But what if the docs that you are looking at don't have additional resources?
            </PostPar>
            <PostPar>
                What I have found super helpful in this situation is to look for the engineers that the technology's community respects the most. These people have a reputation to uphold, so if they write about technology that you are interested in learning, most likely they will work hard to enlighten their audience with the truths about it. Twitter is a place where a lot of engineers actively share their thoughts on their craft. Those considered thought leaders in their fields are often found tweeting helpful suggestions to their followers. It is a place of knowledge sharing and inspiration.
            </PostPar>
            <PostPar>
                If you can find out who created the software you are trying to learn, going on Twitter is a great place to start looking at their work. Following other thought leaders is also rewarding. Doing a quick Google search for "Top JavaScript Thought Leaders on Twitter" yields some fantastic results. For instance, <StyledAnchor href="https://techbeacon.com/app-dev-testing/42-javascript-experts-follow-twitter">this article by TechBeacon</StyledAnchor>. Addy Osmani, Kent C Dodds, Trevor Norris are just a few of the people on the list, all considered among the top of their field.
            </PostPar>
            <PostPar>
                Looking further, you quickly get to understand that writers of OSS, such as React or Redux, are often on Twitter too, and they are providing insight into their software. If you are following Twitter closely, you may actually get to see live updates via tweets of the software you are looking to learn. That is so exciting!
            </PostPar>
            <PostPar underline>
                So Twitter is a good place to start getting to know who you should learn from. The next step is to then go out and find what they are talking about in blogs, video courses, etc.
            </PostPar>
            <PostPar>
                For instance, looking at Kent C Dodds twitter profile, you see that he has a blog site called, <StyledAnchor href='kentcdodds.com'>kentcdodds.com</StyledAnchor>. Opening that up you will see that he is quite a prolific writer and quite a profound one as well. He often times writes on application design, optimization, testing philosophy, costs and benefits of certain development techniques and React. Looking on egghead.io, on YouTube and other sites such as Front End Masters, you'll find that Kent C Dodds also has A LOT of courses for you to take. Right away, you have a gold mine of information that will supplement your bigger questions on how to go deep into understanding technology. And you can have confidence in the quality of the information too.
            </PostPar>
            <PostPar>
                <StyledAnchor href="https://twitter.com/mathias">Mathias Bynens</StyledAnchor> often blogs on v8.dev. This is a wonderful resource for understanding Google Chrome. He gives you great insight into new JS syntax as well as case studies on development.
            </PostPar>
            <PostPar underline>
                Stick with trying to learn from the thought leaders. The information will be the highest quality, second only to the docs. Additionally, those thought leaders will often share things that they think are cool from what they are spending their time reading/working on. If you find a thought leader talking about someone else, go search that avenue out.
            </PostPar>
            <PostSectionHeader>
                Utilize the resources around you. If you know someone that knows something that you want to learn, talk to them about it.
            </PostSectionHeader>
            <PostPar>
                Besides the official documentation and thought leaders, the community of engineers around you is probably your next best resource. We have obviously all been in the shoes of having to learn a new technology. Learning from each others' learning path in a technology helps to navigate the overwhelming amount of React Hooks tutorials for instance. If you ask me whose course will get you up and running using React Hooks the quickest, I would point you right to Tyler McGinnis. No messing around. Talking to your community will reveal to you what teachers they find that are high quality and explain technology in ways that really make sense.
            </PostPar>
            <PostPar>
                You will be surprised by how open most engineers are to helping each other out, if you haven't done this before. Recently, I decided I wanted to get better at understanding testing philosophies, and TDD. I had been hearing from some co-workers of mine that there was one engineer that really was the best to talk to about testing. So I wrote him a message and met with him and talked to him about my intentions. He is generously meeting with me every week to teach me. I couldn't be more grateful to him for his time and energy. 
            </PostPar>
            <PostPar underline>
                Inspiration, accountability in your studies and the gift of knowledge can be found by being well connected with your community. A lot of times, just asking will result in you receiving. If you want to learn a technology that noone you know uses, find a meetup and talk to people that you meet to form that community.
            </PostPar>
            <PostSectionHeader>
                The more time that you put into learning development, the more you will receive.
            </PostSectionHeader>
            <PostPar>
                So far, we have covered some good ideas on how to discover good learning resources for getting started on learning a technology. At this point, we must ask ourselves another question: how much do you want it? Is it just enough to get the job done? Or do you want more than that?
            </PostPar>
            <PostPar>
                If you want more than just getting the basics down correctly, then you've got to put the time and energy in to get that. I, for myself, want to go as deep as the rabbit hole will go. I find it fun.
            </PostPar>
            <PostPar>
                How did you determine what to put on your diagram that we drew out earlier? Where did you learn about these technologies? There are tools that can help you get up to speed with the newest and coolest stuff, as well as tools to help you dig deeper into your current stack.
            </PostPar>
            <FlexWrapper><StyledImage src='https://mylearningposts-api.herokuapp.com/images/code%20apps.jpg' /></FlexWrapper>
            <PostPar>
                <StyledAnchor href='dev.to'>Dev Network</StyledAnchor> is a great resource for connecting with other engineers. On its <StyledAnchor href=''>About dev.to page</StyledAnchor>, it describes itself as "Where programmers share ideas and help each other grow. It is an online community for sharing and discovering great ideas, having debates, and making friends. Anyone can share articles, questions, discussions, etc. as long as they have the rights to the words they are sharing." I actually found out about this site because Tyler McGinnis has referenced it before. I'll often look on there to get ideas on what kind of side projects to build, or to read conversations about technology I'm learning. Every developer whose thoughts I enjoy reading, I make sure to follow on Twitter. 
            </PostPar>
            <PostPar>
                I use a lot of OSS libraries, and want to keep up with updates on them as well as read suggested ideas that come in the form of pull requests. Instead of flooding my gmail account with all of this information, I use this app called GitHawk which will organize all of my notifications into a nice UI. It is developed by <StyledAnchor href='https://twitter.com/_ryannystrom'>Ryan Nystrom</StyledAnchor> who works on Mobile at GitHub. That way, I can just pull this up and get up-to-date information on the OSS I care about. This brings me to a very important point.
            </PostPar>
            <PostPar>
                If you use OSS, GitHub is typically the place where the code for that OSS is stored for you to view. You can watch for any updates to the OSS's repo by clicking on watch at the top of its page. This will send you notifications on pull requests, on issues, and on releases that have been made. Some of the best discussions for understanding the internals for the software can be found by reading the discussions that exist there. In addition to this, paying attention to whose names you frequently see can give you more insight into additional developers you should pay attention to. They often have Twitter accounts too.
            </PostPar>
            <FlexWrapper><StyledImage src='https://mylearningposts-api.herokuapp.com/images/Github.png' /></FlexWrapper>
            <PostPar>
                Additionally if you look at the code that is written in the OSS that you are studying, you can get insight into design patterns and what tech is used to write the software. Often times you would find that it is actually TypeScript, and not JavaScript alone that is used. It gives you a sense of the weight that people are putting into TypeScript. Certainly, at the minimum, if you want to contribute to that OSS, you'll have to do it in TypeScript.
            </PostPar>
            <PostPar underline>
                Reddit
            </PostPar>
            <PostPar>
                I didn't consider ever reading about tech on Reddit. That is, until the Redux FAQs pointed to multiple discussions that were happening on Reddit. It turns out that at least a few of the really great developers who you want to learn from are also active on Reddit. So definitely check that out.
            </PostPar>
            <PostPar underline>
                Podcasts
            </PostPar>
            <PostPar>
                I don't know how these thought leaders do what they do, but in addition to being active on Twitter and a multitude of other forums, a lot of them also maintain podcasts. From these podcasts, you can get a more intimate look at how they think about code. Also, podcasts like <StyledAnchor href="syntax.fm">Syntax.fm</StyledAnchor> by <StyledAnchor href="https://twitter.com/wesbos">Wes Bos</StyledAnchor> and <StyledAnchor href="https://twitter.com/stolinski">Scott Tolinski</StyledAnchor> will constantly introduce technology, best practices, philosophies on where tech is heading, the history of development, how to become a freelancer, and so many other topics that are wonderful to talk about.
            </PostPar>
            <PostPar>
                So there are a ton of additional ways to immerse yourself in technology. It is such a fun time to be an engineer.
            </PostPar>
            <PostSectionHeader>
                So don't sweat this. There are tons of resources to help you become an engineer and learn new technology. It is just about finding what won't be a waste of your time, truly asking questions that will make you think like a developer, focusing on a select few technologies, and finding your community. Good luck!
            </PostSectionHeader>
        </React.Fragment>
    )
}















