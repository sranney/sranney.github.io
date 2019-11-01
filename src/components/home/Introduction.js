import React, {lazy, Suspense} from "react";

import TwitterQuote from "../blog/TwitterQuote";

import {StyledImage} from "../../helpers/styled-components/images";
import {FlexWrapper} from "../../helpers/styled-components/containers";
import { PostPar, PostTitle, PostSectionHeader} from "../../helpers/styled-components/typography";

const IntroArr = [
    {
        key: 0,
        type: 'title',
        content: 'Introduction - Learning Strategy',
    },
    {
        key: 1,
        type: 'par',
        content: 'Engineering requires understanding how to use certain technology as tools. It goes without saying that learning new technology can be quite overwhelming. 🥵',
        underline: false
    },
    {
        key: 2,
        type: 'par',
        content: 'There are seemingly an endless number of them first of all. Second, the rate at which technology changes means that as you master one thing, it could potentially become "out of date." Even worse, what you are learning could become 💀. But, as soon as you look at job descriptions, you see experience required on a whole bunch of technologies that, if you blinked your eyes, you may not even know what they are, why they exist or what problem they were made to solve. 🥴 So, you panic, thinking, "There\'s no way I\'ll be able to keep up with the Jones\'s." You don\'t want to become a 👻, to become a 🦖, so you think, "Okay, let\'s try to figure out what I need to learn." But if you are anything like I used to be, looking at job descriptions can swell that anxiety up again. Some jobs want PHP. Some jobs want 10 years of React experience (haha). Other jobs want a plethora of other things. A whole bunch of technology is out there.😵',
        underline: false
    },
    {
        key: 3,
        type: 'par',
        content: 'What do you do?',
        underline: false
    },
    {
        key: 4,
        type: 'sectionheader',
        content: 'Motivation - Arm Yourself for the Hard Work Ahead',
    },
    {
        key: 5,
        type: 'par',
        content: 'As engineers, we spend a lot of time thinking about "Why?" 🤨 Because of the opportunity costs of investing your time in learning new technology, you\'ve got to ask this.',
        underline: false
    },
    {
        key: 6,
        type: 'par',
        content: 'Why invest your time in learning technology this instead of doing other things you enjoy?',
        underline: true
    },
    {
        key: 7,
        type: 'par',
        content: 'This question is so important to answer honestly starting out, and can be a reminder why you are doing this for the days that are particularly hard.',
        underline: false
    },
    {
        key: 8,
        type: 'par',
        content: 'For me, the answer to that question really boils down to a few things.',
        underline: false
    },
    {
        key: 9,
        type: 'par',
        content: 'Often times, development is what I want to spend my time doing above a lot of other things. Writing code. Thinking about application design. Taking an idea, just a thought, and turning it into something that I can see and interact with, that is alive. 😍 Development is a level of creativity I have not found in anything else. It is an art. 🖌️ When I wrote my first application, I knew that this was the right field for me.❤️',
        underline: false
    },
    {
        key: 10,
        type: 'par',
        content: '"If you want to do something, work hard for it." This is how I was raised. The ultimate outcome for this way of thinking for me has played out in the following way:  If I truly want something, I will work hard to achieve it. Over the years, I have grown a hope that I can overcome challenges I face. I love challenges, and view them as growth opportunities.',
        underline: false
    },
    {
        key: 11,
        type: 'par',
        content: 'On top of all these things, I love sharing and discussing what I am passionate about. This is a litmus test for me. If I am going to do skill sharing with someone, I better truly understand what I am talking about. No need to waste anyone\'s time doing anything else.',
        underline: false
    },
    {
        key: 12,
        type: 'par',
        content: 'Because I love growth opportunities, teaching and development, I spend a lot of time learning and becoming a better engineer. I seek out the areas that I am not strong in, and figure out how I can get better.',
        underline: false
    },
    {
        key: 13,
        type: 'par',
        content: 'The hope of being able to accomplish things when faced with challenges is a critical component in learning new technology or trying to become a engineer.',
        underline: false
    },
    {
        key: 14,
        type: 'twitter',
        content: 'https://twitter.com/TejasKumar_/status/1183038223037206528?ref_src=twsrc%5Etfw' 
    },
    {
        key: 15,
        type: 'twitter',
        content: 'https://twitter.com/TejasKumar_/status/1183038225717313538?ref_src=twsrc%5Etfw'
    },
    {
        key: 16,
        type: 'par',
        content: 'I largely agree with what the study and Tejas are explaining. Hope of overcoming is very important to have in everything you strive towards. However, I disagree with what is being expressed as "reality." I have seen first-hand that I overcome challenges. With just effort, strategy and perseverance, not delusional thinking, you can overcome challenges and achieve what you want. How many challenges have you overcome? What did you do to overcome those challenges? Can you apply that same attack plan to other things? Reality truly is closer to optimism when it comes to learning development or a new technology. Fear and doubt, especially when it comes to learning how to code, are lies and they generate pessimism. In my opinion, that\'s closer to a delusion.',
        underline: false
    },
    {
        key: 17,
        type: 'par',
        content: 'You can do this. It will take time and hard work, but you can do this. 💦 🔨 You just need a strategy! 🗺️',
        underline: true
    },
    {
        key: 18,
        type: 'sectionheader',
        content: 'Understand you don\'t have to know it all. No one does!',
    },
    {
        key: 19,
        type: 'par',
        content: 'That feeling you get of being overwhelmed by what to learn is just a bit of shock from how fast everything moves and how many technologies are out there.',
        underline: false
    },
    {
        key: 20,
        type: 'par',
        content: 'Ask yourself these questions:',
        underline: true
    },
    {
        key: 21,
        type: 'par',
        content: 'Do you truly think that there is someone out there with a mastery of every technology that is coming up daily? Do you think that the vast majority of companies looking to hire are looking for engineers who know the newest technology within the first month that it has been released? Do you think that adaptation speed is immediate? ',
        underline: false
    },
    {
        key: 22,
        type: 'par',
        content: 'After realizing that those questions were only answered "yes" by the overwhelming anxiety of, how can you keep up with everything, and not reality, you begin to understand that the actual questions you need to answer are much smaller than all of that. It is about one step at a time. You don\'t need to solve all the big problems right now. 😌',
        underline: true
    },
    {
        key: 23,
        type: 'sectionheader',
        content: 'Flip your perspective: Instead of how can I learn everything, think about how to decide what not to learn'
    },
    {
        key: 24,
        type: 'par',
        content: 'There is a great article on Dave Geddes blog titled, "Deciding What Not To Learn". This article is actually referenced in the Redux FAQs documentation. It is that good.',
        underline: false
    },
    {
        key: 25,
        type: 'par',
        content: 'What Geddes discusses is a technique that will help us narrow down what you actually want to learn. So let\'s get started:',
        underline: false
    },
    {
        key: 26,
        type: 'par',
        content: 'First, write down all of the frameworks and technologies that you can think of that you might have an interest in learning or that you have read about in articles or job reqs. Your list will most likely be different than mine. If it helps, you can form them in a diagram as they have been done by Geddes. Pictured below is my stab at his strategy. Although I am currently a front-end engineer, I have experience with database analytics so I very much enjoy SQL and NoSQL technologies. Then pick the ones that you are actually interested in...',
        underline: false
    },
    {
        key: 27,
        type: 'par',
        content: '... and cross everything else out.😮',
        underline: true
    }, 
    {
        key: 28,
        type: 'image',
        content: 'https://mylearningposts-api.herokuapp.com/images/how-to-determine-what-not-to-learn.jpg',
        fallbackContent: 'https://mylearningposts-api.herokuapp.com/images/how-to-determine-what-not-to-learn_edited.jpg'
    },
    {
        key: 1000,
        type: 'par',
        content: 'Confession to make: I am a huge fan of the JavaScript library, React. You will see a pattern emerge from the tech that I haven\'t crossed out haha. In the future, yours and my charts may change. But for the right now, this is what we should focus on. I didn\'t cross Svelte off the list because I\'ve been intrigued by what I have heard. Additionally, several of the things that I have crossed off the list, such as Karma/Jasmine testing, or Express or CSS modules are things that I know. I will definitely continue to use them, but they aren\'t where my focus for learning will be going. I would much rather get to know Gatsby, GraphQL and Apollo then I would be to learn more about Express.',
        underline: false
    },
    {
        key: 29,
        type: 'par',
        content: 'Geddes states, "An interesting thing happens when you do this. You don\'t feel like you have to learn everything...precious headspace and mental energy get freed up to learn the few things you\'re actually interested about right now." He crosses Ember out of his diagram and states, "I\'m not going to be learning Ember any time soon, but Ember is doing things that is making all the other current and future frameworks better."',
        underline: false
    },
    {
        key: 30,
        type: 'par',
        content: 'To me, this last statement implicitly summarizes a very important part of Geddes\' concept. Have you ever heard the phrase "Jack of all trades, master of none?" No one is capable of taking all of this on individually. We must rely on other engineers to pick up those other frameworks. It is more of our responsibility in the field to be disciplined in crafting our knowledge in what excites us, in what can keep our focus. Jumping around to learn a lot of different technology amounts to nothing more than a distracted mind. While other engineers work on what excites them, but makes us 😴, I will be working on React, for instance.🤗 I will have more of a chance of making a difference with that framework, because I love it so much, than I would in something that I was made bored by. That\'s the hope anyways...',
        underline: true
    },
    {
        key: 31,
        type: 'sectionheader',
        content: 'Let\'s take one step back.'
    },
    {
        key: 32,
        type: 'par',
        content: 'I came across this tweet the other day that I really like.',
        underline: false
    },
    {
        key: 33,
        type: 'twitter',
        content: 'https://twitter.com/iammerrick/status/1185754417674407937?ref_src=twsrc%5Etfw'
    },
    {
        key: 34,
        type: 'par',
        content: 'So what really matters? Tools such as React, Angular, Svelte, etc? Or is it more the high level thinking that you learn from using those tools? How does evolution occur in technology?',
        underline: false
    },
    {
        key: 35,
        type: 'par',
        content: '💡💡💡 Evolution in technology is always spurred on by evaluating the problems of today, the attempts to solve that problem today, seeing what worked, understanding "Why does a technology exist?" and "What problem is this trying to solve?" The great wisdom that Christensen is sharing with us here is: "Sure, learn the tools, but even more importantly, learn the why." That is going to be so much more important to your development as an engineer. Eric Elliott expresses a similar sentiment here.',
        underline: false
    },
    {
        key: 10010,
        type: 'twitter',
        content: 'https://twitter.com/_ericelliott/status/1186991102890565632?ref_src=twsrc%5Etfw'
    },
    {
        key: 36,
        type: 'par',
        content: 'Again, what matters more here than what you choose to learn is how you choose to learn it. As Tyler McGinnis states in his wonderful 📢 React Hooks course 📢, "When learning something new, ask two questions. Why does this thing exist? What problems does this thing solve?" 🧐',
        underline: false
    },
    {
        key: 37,
        type: 'par',
        content: '💡💡💡 The reasons just outlined demonstrate why reading Medium articles is far from an acceptable method to learn what should be the bare minimum knowledge of a technology before applying it. It is only through what is discussed above that responsible members of the development community can be relied upon to carry things forward as Geddes discusses.',
        underline: true   
    },
    {
        key: 1236,
        type: 'sectionheader',
        content: 'Be a craftsman, not a cowboy'
    },
    {
        key: 1890,
        type: 'par',
        content: 'Software design has a lot to do with composition. Composition is not a phrase unique to software engineering. It is a term used throughout many different '
    },
    {
        key: 1891,
        type: 'par',
        content: ''
    },
    {
        key: 38,
        type: 'sectionheader',
        content: 'So you want to learn a technology? Read the manual first.'
    },
    {
        key: 39,
        type: 'par',
        content: 'When I was in boot camp, my go-to method for using a tool was to just jump right into it, reading blogs and forums, and watching Udemy and PluralSight courses to help me through the pitfalls. Each one of those sources would state something differently, or give me answers that were only part of the puzzle. Very rarely did the authors actually take a step back from the tool to ask the questions that Tyler McGinnis gifted his students with. Those questions that are so important to understanding just exactly what I was getting myself into. So my learning was all over the place, and, worse than that, I was only learning bits and pieces of HOW to learn a tool, without actually learning the tool. My return on the time I was spending was minimal, which is frustrating to say the least. But a lot of other developers around me were doing the same thing, so I kept that up for a bit.',
        underline: false
    },
    {
        key: 40,
        type: 'par',
        content: 'Kent C Dodds is one of the most respected JavaScript engineers today. Recently, he posted this tweet in a discussion about Redux and colocation of state:',
        underline: false
    },
    {
        key: 1234,
        type: 'twitter',
        content: 'https://twitter.com/kentcdodds/status/1176490279282458624?ref_src=twsrc%5Etfw'
    },
    {
        key: 41,
        type: 'par',
        content: 'This was very interesting to me.🤔 I had been using Redux for quite some time by the time that I read this statement. I had read 📚 on the technology, and felt like I had a pretty good grasp on the technology. But hearing this, I thought, why not go through the FAQs and test that knowledge? At the very least, I will gain a much better understanding of this software.',
        underline: false
    },
    {
        key: 42,
        type: 'par',
        content: 'After spending a few days in the FAQs, and taking 📝📝📝, I had come out understanding so much more about how to use the entire system. I will be sharing these notes in another post here in the near future. Mark Erikson has done an excellent job of finding outside resources and maintaining these docs. Surprisingly, excluding working with and debugging Redux implementation issues, I have learned more by doing this than by reading countless number of other resources, and watching 45 hour long Udemy courses.',
        underline: false
    },
    {
        key: 43,
        type: 'par',
        content: 'But, honestly, is it that surprising?? Let\'s think about the game telephone 📞. Let me tell you about the game, in case you aren\'t familiar with it. You play with a group of friends/family. One person starts the game off by whispering in another person\'s ear as to not reveal to the other participants what they have said. Then the person who has received the message whispers what they have heard into another participant\'s ear. This continues until the last remaining participant hears the message. That last person states what they have heard. It is always interesting to hear how distant the last received message is from the original message. It is always missing some elements of the intended method.',
        underline: false
    },
    {
        key: 44,
        type: 'par',
        content: 'For most software there is always one set of documentation, one source of truth from which all other blogs, video courses, etc. are written from. The official documentation on the software is that OG. Personal experience while important as the next step after reading through the official docs, can introduce bias and thus stray from the documentation. Any way that you look at it, reading someone\'s blog or watching someone\'s course unless they have actually been involved in the creation of the tool, is inevitably just that individual\'s perspective on the tool. What could be even worse, is that you don\'t know how many degrees of separation the author of a blog is from the actual documentation. Every degree adds additional bias, adds different twists and ultimately gets away from "Why does the technology exist?" and "What problems does it solve?". 📞 You end up focusing on how to use it, and forget about the intended use for a technology or the appropriate application. That\'s why a lot of software ends up being written poorly. Developers aren\'t asking the questions that matter when writing software, they are focused on how to implement.',
        underline: false
    },
    {
        key: 45,
        type: 'par',
        content: 'So if you are an engineer, and want to learn a new technology, read the docs!! Or you could end up using a 🔧 when you needed a 🔨.',
        underline: true
    },
    {
        key: 46,
        type: 'par',
        content: 'Of course, I\'m not against video courses, blogs, forums, etc. Just don\'t start there! If you start with the official documentation, you will discover something pretty cool. You\'ll be coming to those other learning materials with a deeper understanding of the tools already. You\'ll notice pretty quickly the difference between articles that were written by people who haven\'t read the official docs, and those that had the official docs in mind. You\'ll notice more of the posers. It gives you more of the power. I can\'t tell you how many times I have watched a video or read a blog and seen this. I used to never see that, but just get confused if something wasn\'t working right.',
        underline: false
    },
    {
        key: 47,
        type: 'par',
        content: 'By giving yourself the upperhand of reading the official docs, learning from all other resources becomes so much easier. You get the power of understanding your tools better and of having knowledge before you start digging into other resources.',
        underline: true
    },
    {
        key: 48,
        type: 'sectionheader',
        content: 'Other resources - how to know what blogs to read, what videos to watch? What other resources are there?',
    },
    {
        key: 49,
        type: 'par',
        content: 'Official docs tend to reference articles that are helpful in understanding topics. That\'s a helpful strategy in finding additional resources. But what if the docs that you are looking at don\'t have additional resources?',
        underline: false
    },
    {
        key: 50,
        type: 'par',
        content: 'What I have found super helpful in this situation is to look for the engineers that the technology\'s community respects the most.These people have a reputation to uphold, so if they write about technology that you are interested in learning, most likely they will work hard to enlighten their audience with the truths about it.Twitter is a place where a lot of engineers actively share their thoughts on their craft.Those considered thought leaders in their fields are often found tweeting helpful suggestions to their followers.It is a place of knowledge sharing and inspiration.',
        underline: false
    },
    {
        key: 51,
        type: 'par',
        content: 'If you can find out who created the software you are trying to learn, going on Twitter is a great place to start looking at their work. Following other thought leaders is also rewarding. Doing a quick Google search for "Top JavaScript Thought Leaders on Twitter" yields some fantastic results. For instance, this article by TechBeacon. Addy Osmani, Kent C Dodds, Trevor Norris are just a few of the people on the list, all considered among the top of their field.',
        underline: false
    },
    {
        key: 52,
        type: 'par',
        content: 'Looking further, you quickly get to understand that writers of OSS, such as React or Redux, are often on Twitter too, and they are providing insight into their software. If you are following Twitter closely, you may actually get to see live updates via tweets of the software you are looking to learn. That is so exciting!',
        underline: false
    },
    {
        key: 53,
        type: 'par',
        content: 'So Twitter is a good place to start getting to know who you should learn from. The next step is to then go out and find what they are talking about in blogs, video courses, etc.',
        underline: true
    },
    {
        key: 54,
        type: 'par',
        content: 'For instance, looking at Kent C Dodds twitter profile, you see that he has a blog site called, kentcdodds.com. Opening that up you will see that he is quite a prolific writer and quite a profound one as well. He often times writes on application design, optimization, testing philosophy, costs and benefits of certain development techniques and React. Looking on egghead.io, on YouTube and other sites such as Front End Masters, you\'ll find that Kent C Dodds also has A LOT of courses for you to take. Right away, you have a gold mine of information that will supplement your bigger questions on how to go deep into understanding technology. And you can have confidence in the quality of the information too.',
        underline: false
    },
    {
        key: 55,
        type: 'par',
        content: 'Mathias Bynens often blogs on v8.dev. This is a wonderful resource for understanding Google Chrome. He gives you great insight into new JS syntax as well as case studies on development.',
        underline: false
    },
    {
        key: 56,
        type: 'par',
        content: 'Stick with trying to learn from the thought leaders. The information will be the highest quality, second only to the docs. Additionally, those thought leaders will often share things that they think are cool from what they are spending their time reading/working on. If you find a thought leader talking about someone else, go search that avenue out.',
        underline: true
    },
    {
        key: 57,
        type: 'sectionheader',
        content: 'Utilize the resources around you. If you know someone that knows something that you want to learn, talk to them about it.'
    },
    {
        key: 58,
        type: 'par',
        content: 'Besides the official documentation and thought leaders, the community of engineers around you is probably your next best resource. We have obviously all been in the shoes of having to learn a new technology. Learning from each others\' learning path in a technology helps to navigate the overwhelming amount of React Hooks tutorials for instance. If you ask me whose course will get you up and running using React Hooks the quickest and help you understand the reasoning of "Why hooks", I would point you right to Tyler McGinnis. No messing around. Talking to your community will reveal to you what teachers they find that are high quality and explain technology in ways that really make sense.',
        underline: false
    },
    {
        key: 59,
        type: 'par',
        content: 'You will be surprised by how open most engineers are to helping each other out, if you haven\'t done this before. Recently, I decided I wanted to get better at understanding testing philosophies, and TDD. I had been hearing from some co-workers of mine that there was one engineer that really was the best to talk to about testing. So I wrote him a message and met with him and talked to him about my intentions. He is generously meeting with me every week to teach me. I couldn\'t be more grateful to him for his time and energy.',
        underline: false
    },
    {
        key: 60,
        type: 'par',
        content: 'Meetups are a great way to meet people as well. Put the fear of meeting other people aside. It is in most cases in your head. I met someone who is a bit of a mentor to me at a meetup once. This was two years ago, when I started to learn development. I just told him that I was new, and wanted to learn from someone who had been in the industry for a long time. I asked if I could meet him for coffee. I came prepared with a list of questions. He has been extremely reliable, and two years later, he even came to my wedding! You can meet all different types of people who will share with you. You just have to open up and share with them.',
        underline: false
    },
    {
        key: 61,
        type: 'par',
        content: 'Inspiration, accountability in your studies and the gift of knowledge can be found by being well connected with your community. A lot of times, just asking will result in you receiving. If you want to learn a technology that no one you know uses, find a meetup and talk to people that you meet to form that community.',
        underline: true
    },
    {
        key: 62,
        type: 'sectionheader',
        content: 'The more time that you put into learning engineering, the more you will receive.'
    },
    {
        key: 63,
        type: 'par',
        content: 'So far, we have covered some good ideas on how to discover good learning resources for getting started on learning a technology. At this point, we must ask ourselves another question: how much do you want it? Is it just enough to get the job done? Or do you want more than that?',
        underline: false
    },
    {
        key: 64,
        type: 'par',
        content: 'If you want more than just getting the basics down correctly, then you\'ve got to put the time and energy in to get that. I, for myself, want to go as deep as the rabbit hole will go. I find it fun.',
        underline: false
    },
    {
        key: 65,
        type: 'par',
        content: 'How did you determine what to put on your diagram that we drew out earlier? Where did you learn about these technologies? There are tools that can help you get up to speed with the newest and coolest stuff, as well as tools to help you dig deeper into your current stack.',
        underline: false
    },
    {
        key: 66,
        type: 'image',
        content: 'https://mylearningposts-api.herokuapp.com/images/code%20apps.jpg',
        fallbackContent: 'https://mylearningposts-api.herokuapp.com/images/code%20apps_edited.jpg'
    },
    {
        key: 67,
        type: 'par',
        content: 'Dev Network is a great resource for connecting with other engineers. On its About dev.to page, it describes itself as "Where programmers share ideas and help each other grow. It is an online community for sharing and discovering great ideas, having debates, and making friends. Anyone can share articles, questions, discussions, etc. as long as they have the rights to the words they are sharing." I actually found out about this site because Tyler McGinnis has referenced it before. I\'ll often look on there to get ideas on what kind of side projects to build, or to read conversations about technology I\'m learning. Every developer whose thoughts I enjoy reading, I make sure to follow on Twitter.',
        underline: false
    },
    {
        key: 68,
        type: 'par',
        content: 'I use a lot of OSS libraries, and want to keep up with updates on them as well as read suggested ideas that come in the form of pull requests. Instead of flooding my gmail account with all of this information, I use this app called GitHawk which will organize all of my notifications into a nice UI. It is developed by Ryan Nystrom who works on Mobile at GitHub. That way, I can just pull this up and get up-to-date information on the OSS I care about. This brings me to a very important point.',
        underline: false
    },
    {
        key: 69,
        type: 'par',
        content: 'If you use OSS, GitHub is typically the place where the code for that OSS is stored for you to view. You can watch for any updates to the OSS\'s repo by clicking on watch at the top of its page. This will send you notifications on pull requests, on issues, and on releases that have been made. Some of the best discussions for understanding the internals for the software can be found by reading the discussions that exist there. It will feel like you\'ve opened the flood gates with how much information that will come at you. But just reading the titles for the notifications can more often than not give you enough information about whether or not you are interested in reading more about the particular conversation. In addition to this, paying attention to whose names you frequently see can give you more insight into additional developers you should pay attention to. They often have Twitter accounts too.',
        underline: false
    },
    {
        key: 70,
        type: 'image',
        content: 'https://mylearningposts-api.herokuapp.com/images/Github.png',
        fallbackContent: 'https://mylearningposts-api.herokuapp.com/images/Github_edited.png'
    },
    {
        key: 71,
        type: 'par',
        content: 'Additionally if you look at the code that is written in the OSS that you are studying, you can get insight into design patterns and what tech is used to write the software. Often times you would find that it is actually TypeScript, and not JavaScript alone that is used. It gives you a sense of the weight that people are putting into TypeScript. Certainly, at the minimum, if you want to contribute to that OSS, you\'ll have to do it in TypeScript.',
        underline: false
    },
    {
        key: 72,
        type: 'par',
        content: 'Reddit',
        underline: true
    },
    {
        key: 73,
        type: 'par',
        content: 'I didn\'t consider ever reading about tech on Reddit. That is, until the Redux FAQs pointed to multiple discussions that were happening on Reddit. It turns out that at least a few of the really great developers who you want to learn from are also active on Reddit. Or there are announcements about different advancements in software or project ideas.',
        underline: false
    },
    {
        key: 74,
        type: 'par',
        content: 'Podcasts',
        underline: true
    },
    {
        key: 75,
        type: 'par',
        content: 'I don\'t know how these thought leaders do what they do, but in addition to being active on Twitter and a multitude of other forums, a lot of them also maintain podcasts. From these podcasts, you can get a more intimate look at how they think about code. Also, podcasts like Syntax.fm by Wes Bos and Scott Tolinski will constantly introduce technology, best practices, philosophies on where tech is heading, the history of development, how to become a freelancer, and so many other topics that are wonderful to talk about.',
        underline: false
    },
    {
        key: 76,
        type: 'par',
        content: 'So there are a ton of additional ways to immerse yourself in technology. It is such a fun time to be an engineer.',
        underline: false
    },
    {
        key: 77,
        type: 'sectionheader',
        content: 'Trust your gut'
    },
    {
        key: 78,
        type: 'par',
        content: 'If you have been an engineer for quite some time, you have learned invaluable lessons on what quality looks like. Use that to help you navigate through all the card tricks and false teachings.'
    },
    {
        key: 79,
        type: 'sectionheader',
        content: 'In conclusion, don\'t sweat this. There are tons of resources to help you become an engineer and learn new technology. It is just about finding what won\'t be a waste of your time, asking yourself and others engineering questions, focusing on a select few technologies that will keep your focus, and finding your community. Good luck!'
    },
    {
        key: 80,
        type: 'par',
        content: 'The whole purpose of this site is to point people in the right direction of where to learn material. Although I will be writing blogs myself, I will be only writing on material that I thought was interesting that I have read. My code examples will be my own, but they will be generated as a response to certain techniques or patterns that I have observed. As you see below, I have posted some stuff related to what I have talked about in the blog post. This is what I will always do. I will point you to the people that I have learned from.',
        underline: false
    },
    {
        key: 81,
        type: 'par',
        content: '"If I have seen further it is by standing on the shoulders of Giants." - Isaac Newton',
        underline: false
    },
    {
        key: 82,
        type: 'sectionheader',
        content: 'Using agile principals while putting what you are learning to practice',
    },
    {
        key: 83,
        type: 'par',
        content: 'Important to learning anything '
    }
]

export default function Blog () {
    return IntroArr.map(({type,content,underline,fallbackContent,key})=>{
        switch(type) {
            case 'par':
                return <PostPar underline={underline} key={key}>{content}</PostPar>;
            case 'title':
                return <PostTitle key={key}>{content}</PostTitle>;
            case 'sectionheader':
                return <PostSectionHeader key={key}>{content}</PostSectionHeader>;
            case 'twitter':
                return <TwitterQuote url={content} key={key}/>;
            case 'image':
                return <FlexWrapper key={key}><StyledImage src={content}/></FlexWrapper>;
            default:
                return <></>;
        }
    });
}


