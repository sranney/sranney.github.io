import React, {Fragment} from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useMediaPredicate } from 'react-media-hook';

import { PostBody } from "../../helpers/styled-components/containers";
import { PostTitle, PostPar } from "../../helpers/styled-components/typography";
import { StyledAnchor, StyledAbsoluteAnchor } from "../../helpers/styled-components/links";

import SlideInViewContainer from "../general/SlideInViewContainer";


const recommendationsArr = [
    {
        key: 0,
        author: 'Jeremy Schultz',
        linkedin: 'https://www.linkedin.com/in/jeremy-schultz-2551447a',
        role: 'Manager, Partner Solutions Engineering at Dealer.com',
        words: "Spencer Ranney is the most passionate engineer I've ever met. His energy is contagious and he brings the best out of everyone around him. Spencer is genuine, friendly, humble and kind. He is a developer you can (and should) build a team around. I have had the great opportunity to work extensively with Spencer and I am better for it. All of us are.\nSpencer asks insightful questions and creates thoughtful solutions executed brilliantly. He is always learning; always honing his craft. He is generous with his knowledge and his time, always willing to help with no thought of taking credit. He is as selfless a teammate as I have ever seen and his team deeply appreciates it. Spencer has taken on a prominent leadership role among his colleagues where he organizes(and often delivers) recurring training and information sessions for engineers. These sessions are always well- attended and are hugely beneficial to our teams and to our location.\nSpencer also brings great innovation to the equation. He sees code with an impressive clarity and consistently delivers excellent and inspired solutions. If Spencer doesn't already know a particular technology, he'll learn it over the weekend. If there is a challenge anyone else may deem impossible, Spencer is the guy who not only believes it can be done, but who comes with three(ore more) viable solutions that solve the problem better than anyone imagined.\nIf you're looking for an engineer who will deliver the highest quality software, be engaged and engaging while also raising the bar and inspiring everyone he meets, Spencer is your next hire."
    },
    {
        key: 6,
        author: 'Will Nielsen',
        linkedin: 'https://www.linkedin.com/in/willnielsen',
        role: 'Manager of Software Engineering',
        words: "Spencer has worked in the same group as me, thought not reporting to me, for 20 months. From day one I have been impressed with him and glad we hired him as a UI Engineer. Immediately, he was seeking ways to help collaboratively improve the level of engineering in the department by leading seminars and getting involved, even leading, groups that centered around developing a vibrant engineering culture within Dealer.com's Dallas offices. His work by all accounts is predictably and consistently excellent, and he is clearly a team player."
    },
    {
        key: 8,
        author: 'Aaron Hancock',
        linkedin: 'https://www.linkedin.com/in/aaronhancock',
        role: 'Director, Software Engineering - Partner Programs at Dealer.com, A Cox Automotive Company',
        words: "Spencer has been a fantastic team member! His professionalism, work ethic, and reliability have been a key contributor to the success we've experienced as an organization. He's a great teacher and not afraid of any challenge. I highly recommend Spencer!"
    },    
    {
        key: 9,
        author: 'Garrett Martin',
        linkedin: 'https://www.linkedin.com/in/garrett-martin-4a5b6356',
        role: 'Senior User Interface Engineer at Cox Auto',
        words: "Spencer is the most optimistic engineer I've ever met. He has a passion for learning and teaching the latest technology trends which elevates others around him. Never satisfied with the quick and dirty solution, Spencer strives for constant self-improvement and takes initiative to refactor legacy code. He brings a positive attitude to work every day and has genuine human concern for others. His patience and drive allow him to develop fantastic solutions where others would likely get frustrated and give up. Spencer has a bright future in engineering and any team would greatly benefit from his contributions!"
    },
    {
        key: 1,
        author: 'Devanshi Parikh',
        linkedin: 'https://www.linkedin.com/in/devanshiparikh/',
        role: 'Software Engineer at Dealer.com',
        words: 'Spencer is very passionate about learning and teaching new technologies. I really like working with him. He is an amazing team member, who is always willing to help others. He has a very deep understanding of React and Redux. He is a valuable asset to have on any team.'
    },
    {
        key: 3,
        author: 'Saif Khaled',
        linkedin: 'https://www.linkedin.com/in/saifmasadeh/',
        role: 'Software Engineer at CoxAutoInc',
        words: 'I have been working with Spencer for around a year at Cox automotive, he is an amazing guy, very passionate about technology, easy going, he loves to share his knowledge with others, I got the chance to go to few of his talks about React, Redux, and other topics, and I was amazed by his deep knowledge about these topics.\nSpencer adds value to the team he works with, and always makes some time to look at his colleagues PR(s) and gives his feedback. He shows his leadership skills in may occasions and organized a "round table" meetings to encourage people to talk about different topics. Spencer is a rock star, he is blooming and growing very fast, and I am sure that he will be a great tech lead in the future.'
    },
    {
        key: 4,
        author: 'Eric Lopez',
        linkedin: 'linkedin.com/in/eric-lopez-0002',
        role: 'UI Engineer at Cox Automotive, Inc.',
        words: "Spencer is one of the nicest people I've ever met. I believe he could get hired anywhere for this alone, but his passion for code is second-to-none. Spencer not only takes the time to learn new things, he gladly takes his knowledge and shares with everyone selflessly. Anyone looking for a great engineer and an even greater person should look to get Spencer on your team immediately!"
    },
    {
        key: 5,
        author: 'Aaron Dewberry',
        linkedin: 'https://www.linkedin.com/in/aaronkyle',
        role: 'Sr. UI Engineer at Cox Auto Inc.',
        words: "Spencer has been a great co - worker. He has an open mind, a thirst for knowledge, and cares very much about the quality of his work. He loves to share his leanings and to that end lead a lot of sharing sessions to help and encourage other developers. I've enjoyed working with Spencer, and if given the opportunity I'd do so again."
    },
    {
        key: 7,
        author: 'Stephen Hunt',
        linkedin: 'linkedin.com/in/yourguardian',
        role: 'UI Engineer II at Cox Automotive Inc.',
        words: 'Spencer is an attentive, mindful, knowledgeable, hungry developer. Any time I had a question, Spencer could always answer it or would find the answer super fast. He knows how to analyze and approach problems quite well. I would jump at any chance to work with him now and in the future.'
    },
    {
        key: 2,
        author: 'Jared Gilpin',
        linkedin: 'linkedin.com/in/jaredgilpin',
        role: 'Full Stack Developer',
        words: 'Spencer was invaluable as the teaching assistant in my class at SMU’s Coding Bootcamp program. He proved himself as a knowledgable JavaScript expert who was personable, willing to support students, and able to help us problem solve. I credit him with helping to motivate and inspire me to complete the SMU Bootcamp and launch my new career'
    },
    {
        key: 13,
        author: 'Courtney D. Montgomery',
        linkedin: 'linkedin.com/in/courtneydm',
        role: 'Front-End Developer at McAfee',
        words: "I am one of the fortunate students who have Spencer as a Teacher's Assistant during my experience in the SMU Coding Boot Camp. Spencer is always willing to help; when called upon, he has a great way of guiding a person towards identifying their issue and solving the problem instead of doing the work for them. He is eager to share his knowledge of Web Development, as well as new technologies he is learning. I consider Spencer a valuable resource, and am glad to have him as someone I can call upon in my time of need."
    },
    {
        key: 14,
        author: 'Sandra Marquez',
        linkedin: 'linkedin.com/in/sandrarmarquez',
        role: 'Software Developer at CVS Health',
        words: "Spencer is a joy to work with. He handled every project assigned to him with aplomb and diligence, displaying the ability to follow creative direction while adding his own creative input in a diplomatic and useful way. To say he’s a team leader would be an understatement. Spencer would be an asset to have on any team. It is an honor for me to recommend him."
    },
    {
        key: 15,
        author: 'Ismael Barba',
        linkedin: 'linkedin.com/in/ismaelbarba',
        role: 'US Marine Corps Veteran',
        words: "Many would say Spencer is very gifted when it comes to Web App Development, but I know different. The truth is Spencer is the hardest working person I have ever come across. He has an relentless determination to complete any task that he has placed before him. When faced with a very difficult problem in Web Development, he always manages to find a way to solve the problem. Spencer is also a great leader who leads from the front lines. He's great at project management which is the reason I believe his projects always turn out great. He also pushes others to better themselves and always makes himself available to help anyone who may need it. I would recommend Spencer because as a Marine I know Spencer will accomplish any mission given to him and then afterwards help others do the same."
    },
    {
        key: 10,
        author: 'Steven Shirley',
        role: 'Student during my time as a TA at SMU',
        linkedin: 'https://www.linkedin.com/in/stevenrichardshirley/',
        words: "There is only positivity that can be said about Spencer Ranney. I was one of Spencer's students during my time at SMU, and his enthusiasm and eagerness to help is something you don't see everyday. Whether it was asking his opinion on a new project idea, asking him a convoluted code question, or just saying hello, Spencer takes the time to give you his very best, and always leaves you with a smile on your face. I have a ton of respect for Spencer, and anyone who has the opportunity to work with him should never hesitate."
    },
    {
        key: 11,
        author: 'Andy Ho',
        role: 'Student during my time as a TA at SMU',
        linkedin: 'https://www.linkedin.com/in/andytanho/',
        words: "There are so many great things to say about Spencer that I don't know where to start. He was my TA at SMU Web Development. He shows the enthusiasm to Web Development that I haven't seen in others. He is definitely very smart and bright. He seems to have the answers to all the tough questions I present to him as a Student. He would help me and went beyond to make sure that I truly understand. I look up to Spencer as a role model. He inspired me. Beside web development, Spencer shows outstanding understanding in data science as well. I was very fortunate to know Spencer!"
    },
    {
        key: 12,
        author: 'Joshua Newsome',
        role: 'Peer in SMU Coding Boot Camp when I was a student',
        linkedin: 'https://www.linkedin.com/in/joshua-newsome/',
        words: "When I think of Spencer, the first thing that comes to mind is the energy and enthusiasm he brought to class every day. Spencer and I were classmates and he stood out in the class as one of the brightest. I had the pleasure working on a group project together. Spencer's hard work and dedication was the glue to make sure our project was as successful as it was. His creativity, work ethic, and vision are inspiring and I feel lucky to have met and worked directly with such a great person."
    }
];


export default function Recommendations() {
    return (
        <PostBody>
            <PostTitle>📢 Recommendations 📢</PostTitle>
            <PostPar>I have had the good fortune of forming some really great work relationships in my career
                . I feel blessed to have these people in my life. Here's what some of them have to say about me. </PostPar>
            <StyledAbsoluteAnchor right='5%' top='1%' size="xlarge" href="https://www.linkedin.com/in/spencer-ranney/" target="_blank"><FaLinkedinIn /></StyledAbsoluteAnchor>
            {
                recommendationsArr.map(({key, author, role, words, linkedin}) => {
                    return (
                        <SlideInViewContainer key={key}> 
                            <div className='feature'>
                                <span className='primary'>{author}</span><span className='secondary'>{role}</span>
                                <span className="reference"><StyledAnchor size="large" href={linkedin} target="_blank"><FaLinkedinIn /></StyledAnchor></span>
                            </div>
                            <div className='content'><span className='tertiary'>{words}</span></div>
                        </SlideInViewContainer>
                    );
                })
            }
        </PostBody>
    );
}


