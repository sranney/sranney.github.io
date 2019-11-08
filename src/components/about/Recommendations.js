import React from "react";
import {FaLinkedinIn} from "react-icons/fa";

import { PostBody, CenteredContentWrapper } from "../../helpers/styled-components/containers";
import { PostPar, PostTitle, PostCaption, PostSectionHeader} from "../../helpers/styled-components/typography";
import {StyledAnchor} from "../../helpers/styled-components/links";

const recommendationsArr = [
    {
        author: 'Devanshi Parikh',
        role: 'Software Engineer at Dealer.com',
        words: 'Spencer is very passionate about learning and teaching new technologies. I really like working with him. He is an amazing team member, who is always willing to help others. He has a very deep understanding of React and Redux. He is a valuable asset to have on any team.'
    },
    {
        author: 'Jared Gilpin',
        role: 'Full Stack Developer',
        words: 'Spencer was invaluable as the teaching assistant in my class at SMU’s Coding Bootcamp program.He proved himself as a knowledgable JavaScript expert who was personable, willing to support students, and able to help us problem solve.I credit him with helping to motivate and inspire me to complete the SMU Bootcamp and launch my new career'
    },
    {
        author: 'Saif Khaled',
        role: 'Software Engineer at CoxAutoInc',
        words: 'I have been working with Spencer for around a year at Cox automotive, he is an amazing guy, very passionate about technology, easy going, he loves to share his knowledge with others, I got the chance to go to few of his talks about React, Redux, and other topics, and I was amazed by his deep knowledge about these topics.\nSpencer adds value to the team he works with, and always makes some time to look at his colleagues PR(s) and gives his feedback.He shows his leadership skills in may occasions and organized a "round table" meetings to encourage people to talk about different topics.Spencer is a rock star, he is blooming and growing very fast, and I am sure that he will be a great tech lead in the future.'
    },
    {
        author: 'Eric Lopez',
        role: 'UI Engineer at Cox Automotive, Inc.',
        words: "Spencer is one of the nicest people I've ever met. I believe he could get hired anywhere for this alone, but his passion for code is second-to-none. Spencer not only takes the time to learn new things, he gladly takes his knowledge and shares with everyone selflessly. Anyone looking for a great engineer and an even greater person should look to get Spencer on your team immediately!"
    },
    {
        author: 'Aaron Dewberry',
        role: 'Sr. UI Engineer at Cox Auto Inc.',
        words: "Spencer has been a great co - worker.He has an open mind, a thirst for knowledge, and cares very much about the quality of his work.He loves to share his leanings and to that end lead a lot of sharing sessions to help and encourage other developers.I've enjoyed working with Spencer, and if given the opportunity I'd do so again."
    },
    {
        author: 'Will Nielsen',
        role: 'Manager of Software Engineering',
        words: "Spencer has worked in the same group as me, thought not reporting to me, for 20 months.From day one I have been impressed with him and glad we hired him as a UI Engineer.Immediately, he was seeking ways to help collaboratively improve the level of engineering in the department by leading seminars and getting involved, even leading, groups that centered around developing a vibrant engineering culture within Dealer.com's Dallas offices. His work by all accounts is predictably and consistently excellent, and he is clearly a team player."
    },
    {
        author: 'Stephen Hunt',
        role: 'UI Engineer II at Cox Automotive Inc.',
        words: 'Spencer is an attentive, mindful, knowledgeable, hungry developer.Any time I had a question, Spencer could always answer it or would find the answer super fast.He knows how to analyze and approach problems quite well.I would jump at any chance to work with him now and in the future.'
    },
    {
        author: 'Aaron Hancock',
        role: 'Director, Software Engineering - Partner Programs at Dealer.com, A Cox Automotive Company',
        words: "Spencer has been a fantastic team member! His professionalism, work ethic, and reliability have been a key contributor to the success we've experienced as an organization. He's a great teacher and not afraid of any challenge.I highly recommend Spencer!"
    },
    {
        author: 'Garrett Martin',
        role: 'Senior User Interface Engineer at Cox Auto',
        words: "Spencer is the most optimistic engineer I've ever met. He has a passion for learning and teaching the latest technology trends which elevates others around him. Never satisfied with the quick and dirty solution, Spencer strives for constant self-improvement and takes initiative to refactor legacy code. He brings a positive attitude to work every day and has genuine human concern for others. His patience and drive allow him to develop fantastic solutions where others would likely get frustrated and give up. Spencer has a bright future in engineering and any team would greatly benefit from his contributions!"
    },
    {
        author: 'Steven Shirley',
        words: 'Student at SMU Coding Boot Camp who I taught as a teaching assistant',
        role: 'Front End Web Developer'
    },
    {
        author: 'Andy Ho',
        role: 'Student at SMU Coding Boot Camp who I worked with as a teaching assistant',
        words: "There are so many great things to say about Spencer that I don't know where to start. He was my TA at SMU Web Development. He shows the enthusiasm to Web Development that I haven't seen in others.He is definitely very smart and bright.He seems to have the answers to all the tough questions I present to him as a Student.He would help me and went beyond to make sure that I truly understand.I look up to Spencer as a role model.He inspired me.Beside web development, Spencer shows outstanding understanding in data science as well.I was very fortunate to know Spencer!"
    },
    {
        author: 'Joshua Newsome',
        role: 'Peer in SMU Coding Boot Camp when I was a student',
        words: "When I think of Spencer, the first thing that comes to mind is the energy and enthusiasm he brought to class every day.Spencer and I were classmates and he stood out in the class as one of the brightest. I had the pleasure working on a group project together.Spencer's hard work and dedication was the glue to make sure our project was as successful as it was. His creativity, work ethic, and vision are inspiring and I feel lucky to have met and worked directly with such a great person."
    },
    {
        author: 'Courtney D. Montgomery',
        role: 'Front-End Developer at McAfee',
        words: "I am one of the fortunate students who have Spencer as a Teacher's Assistant during my experience in the SMU Coding Boot Camp. Spencer is always willing to help; when called upon, he has a great way of guiding a person towards identifying their issue and solving the problem instead of doing the work for them. He is eager to share his knowledge of Web Development, as well as new technologies he is learning. I consider Spencer a valuable resource, and am glad to have him as someone I can call upon in my time of need."
    },
    {
        author: 'Sandra Marquez',
        role: 'Software Developer at CVS Health',
        words: "Spencer is a joy to work with.He handled every project assigned to him with aplomb and diligence, displaying the ability to follow creative direction while adding his own creative input in a diplomatic and useful way.To say he’s a team leader would be an understatement.Spencer would be an asset to have on any team.It is an honor for me to recommend him."
    },
    {
        author: 'Ismael Barba',
        role: 'US Marine Corps Veteran',
        words: "Many would say Spencer is very gifted when it comes to Web App Development, but I know different.The truth is Spencer is the hardest working person I have ever come across.He has an relentless determination to complete any task that he has placed before him.When faced with a very difficult problem in Web Development, he always manages to find a way to solve the problem.Spencer is also a great leader who leads from the front lines.He's great at project management which is the reason I believe his projects always turn out great. He also pushes others to better themselves and always makes himself available to help anyone who may need it. I would recommend Spencer because as a Marine I know Spencer will accomplish any mission given to him and then afterwards help others do the same."
    }
];

export default function Recommendations() {
    return (
        <PostBody>
            <PostTitle>Recommendations</PostTitle>
            <StyledAnchor href="https://www.linkedin.com/in/spencer-ranney/"><FaLinkedinIn/></StyledAnchor>

        </PostBody>
    );
}


