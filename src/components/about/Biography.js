import React from "react";

import {PostBody, CenteredContentWrapper} from "../../helpers/styled-components/containers";
import { PostPar, PostTitle, PostSectionHeader } from "../../helpers/styled-components/typography";
import InViewImage from "../general/InViewImage";

export default function Biography() {
	return (
		<PostBody>
			<PostTitle>Hello, I'm Spencer 👋</PostTitle>
			<CenteredContentWrapper>
				<InViewImage loader caption="You can trust me! I'm wearing a bow-tie!" imgSrc="http://mylearningposts-api.herokuapp.com/images/me-in-tux.jpg"/>
			</CenteredContentWrapper>
			<PostPar>
				While I believe my posts here will speak clearly about who I am as an engineer and what my philosophy of engineering is, there's a lot more to who I am than that. So let me tell you a little bit about who I am, and where I got started.
			</PostPar>
			<PostSectionHeader>
				A "Little" About Me as an Engineer (and a Little More Engineering Principals)
			</PostSectionHeader>
			<PostPar>
				I am a forward-looking and passionate engineer focused on the pillars of my craft. It seems that the more I learn about engineering, the more excited I am about it... and the more I want to learn. I view testing as a vehicle for quality and confidence. Writing good tests make you think at a higher level than your implementation, and thus more at the heart of what you actually should be caring about which is the end-user's interactions with your software. Testing makes you a better engineer. I ask questions about the tools that I use so that I may best use them. Without understanding the problems that the creators of the tool were trying to address and why a tool exists, your engineering solutions will be constrained by the tools that were intended to enhance your development experience. I look to learn from thought leaders in my field. My excitement for technology, and for sharing what I know have led me to becoming a teacher in my communities. The craft of engineering pushes me towards becoming the best engineer I can be. 🚀🚀🚀
			</PostPar>
			<PostSectionHeader>
				My Background
			</PostSectionHeader>
			<CenteredContentWrapper>
				<InViewImage loader caption="My hometown, Austin, back in 1990. ❤️" imgSrc="http://mylearningposts-api.herokuapp.com/images/Austin-1990.jpg" />
			</CenteredContentWrapper>            
			<PostPar>
				I grew up in Austin, TX. I still remember it looking like this, believe it or not. Early in life, I didn't have an interest in engineering and I didn't think that I would ever want to code. After a bad experience with it in high school, I was certain that it wasn't for me. No, at the time, all I wanted to do was play jazz.
			</PostPar>
			<CenteredContentWrapper>
				<InViewImage loader caption="My favorite musician, Louis Armstrong 🎵" imgSrc="http://mylearningposts-api.herokuapp.com/images/louis-armstrong.jpg"/>
			</CenteredContentWrapper>
			<PostPar>
				I felt like time spent anywhere else other than playing jazz 🎹 was a sacrifice. I worked long hours at my jobs as an actuarial analyst, and just didn't feel like I was doing what I wanted to do. But all of this changed in March of 2014, when I was in my masters. I took a quantitative trading class, started to study analytics and fell in love with what I call logical creative thinking which programming is all about. All of my subsequent job pursuits were for jobs where I could code in one regards or another. During this time, I found a love for understanding smart betas, alpha decay and other statistical methods that could be applied to hedge fund return patterns to see what added value they were actually providing. I spent most of my days and nights reading and coding. I was in heaven... so I thought.
			</PostPar>
			<CenteredContentWrapper>
				<InViewImage loader caption="Truly, some days are still like this... and I enjoy them" imgSrc="http://mylearningposts-api.herokuapp.com/images/day-in-life-of-programmer.gif" />
			</CenteredContentWrapper>
			<PostPar>
				I pursued analytics hard, and ended up getting some interesting work experience in political analytics and money manager analytics. Unfortunately neither of those positions paid! So I had to keep looking. I ended up finding some work up in the Dallas area through a connection I had. So, although I told myself that I would never leave Austin (I'm a die-hard fan of my hometown haha), I packed myself up and moved to Dallas. This job was really pretty cool. I got to use my down time however I wanted to use it, so I used it to develop tools for my company. I built a tool that had Excel as the UI (with custom user forms I created), and R as a back end that would scrape data from the SEC EDGAR database. I also got to work with the virtual HPI unit (Healthcare Performance Improvement) where I was recognized for my work in SQL and Tableau. I was the main revenue cycle SQL analyst for many months. Eventually the Dallas office requested my services working a large amount of data for a very large case, so I ended up working both healthcare analytics and litigation analytics at the same time. 🥵 
			</PostPar>
			<PostPar>
				Within the first year of living in Dallas, I met a wonderful girl. She was everything that I was looking for in my partner. So I married her. This past weekend, we celebrated 6 months of marriage. We are celebrating 4 years together on November 14th.
			</PostPar>
			<CenteredContentWrapper>
				<InViewImage loader caption="My beautiful wife, and me. Aren't I lucky?" imgSrc="http://mylearningposts-api.herokuapp.com/images/lauren-and-me.jpg" />
			</CenteredContentWrapper>
			<PostSectionHeader>
				Analytics to... Front-End Engineering?
			</PostSectionHeader>
			<PostPar>
				If you have gotten this far in my ramble, you will notice that I have a love for both mathematics and for music. Analytics was satisfying one of those two loves. However, I wanted to create. I had heard about front-end engineering from a friend of mine, so I decided to check it out. I found a boot camp at SMU and decided to pursue it. The first application I built was a real hacky thing, not built with an understanding of engineering principals at all. But the look and feel of it amazed my peers in the program. At the time, I was a big time cowboy coder, and so taking an idea and producing the solution that I generated was the most fun I had ever had in my career. Music's spotlight quickly faded away, and all I wanted to do was produce code and applications. The process of it was the most fun. I quit my job because it wasn't going to be possible for me to become an engineer and work my day job on the weekends and most nights. All I wanted was to study JavaScript. Just wish I had heard some of the advice that has helped me grow into the engineer I am today much earlier. You can think of this blog as being my answer to that extent. Anyways, coding was something that I was good at, but software engineering was a challenge that I fell in love with because of the ability for me manifest something from code and ideas. After I quit my job in litigation consulting and analytics, I coded 16 hours a day to soak up and learn as much as I possibly could. 😍 At the end of the program, I got to work with a team to build a web socket chess game and present it to industry professionals. Despite having the flu the whole week leading up to game day, I loved every moment of it.
			</PostPar>
			<CenteredContentWrapper>
				<InViewImage loader caption="I still had a little bit of the flu in this picture. But I think I'm smiling because I get so deliriously happy talking about code sometimes. 🤪" imgSrc="http://mylearningposts-api.herokuapp.com/images/me-at-bootcamp-pre.jpg" />
			</CenteredContentWrapper>
			<PostPar>
				Immediately after graduation from this bootcamp, I became a teaching assistant for the bootcamp where I got to support students, many who were first learning how to code. This offered so many interesting challenges, including having to help students learn how to think like engineers. I helped them understand their tools, asked questions about application design to challenge them and spur growth in understanding the bigger picture. This experience brought such growth to my understanding of the tools that I still love today, such as React, Node, and CSS. To be able to work with students and help them grow, I had to make sure that I had a teaching kind of knowledge of the technology. This was where I first found that I was a good teacher at technology. A lot of students frequently wanted my help, and after everytime they worked with me, they would tell me they came out knowing the material in a better way than they had expected. My ability to help these students accomplish their goals was one of the most fulfilling opportunities I have had in my adult life. I keep in contact with a few of the students to see how their journey is going.
			</PostPar>
			<CenteredContentWrapper>
				<InViewImage loader caption="The students that I worked with as a teaching assistant in the bootcamp. One of the biggest privilege of my life was to be a part of their journey. I learned so much from them." imgSrc="http://mylearningposts-api.herokuapp.com/images/bootcamp-grads.jpeg" />
			</CenteredContentWrapper>
			<PostSectionHeader>
				Most Recently... Wait You're Still Talking?
			</PostSectionHeader>
			<PostPar>
				I am currently a front end engineer at Dealer.com. At this job, I have been able to work with some of the best people I have ever met. Together we have formed a culture of growth and encouragement. On paper, my job has been to contribute to and enhance the company's CMS as well as build out custom solutions using that CMS for our clients. I had the opportunity to work on retail sites for Volvo, Lincoln, Toyota, Hyundai, Lexus, Cadillac, Chevrolet, Buick and GMC. I additionally got to build out tracking frameworks for analytics departments to analyze how users interact with the sites we built out. I used React and Redux on the job to build out a custom solution for Toyota. Every day feels like a Saturday to me. I get to do coding while hanging out with individuals that I love. However, my work here has consisted of so much more than just those things. 
			</PostPar>
			<PostPar>
				Independent of the scrum teams that we each work on, 6 contributors, including myself, working across product, and engineering came together late last year to form a committee meant to strengthen even further that culture. We organized cross-functional presentations, and brought people from different units together in a bunch of other ways. My love of teaching has been encouraged from day one. If I know something that other people would benefit from, managers and co-workers encourage me to share it. This type of encouragement and my love for teaching have led me to make 6 presentations covering topics such as CSS design systems, React, Redux, learning as an engineer and modern JavaScript. 
			</PostPar>
			<PostPar>
				I have formed a reputation for being not only knowledgeable in these topics, but also being a good teacher. I am involved in many processes of teams applying the aforementioned technologies and several more, including sitting with them and pair or mob programming a solution out at the same time as I teach concepts. On an individual basis, I sit with developers and help them learn different topics in technologies.
			</PostPar>
			<PostPar>
				But I didn't just pick those tech up one day and know how to use them. It has been only from a very methodical, tenacious and continuous practice of study that I am able to continue to grow in my application of these tools. What I outline in my first essay here, "Introduction: Learning Strategy," is a method of study that I have developed over time. Because technology continues to change and progress, trying to better solve the problems still facing us in technology, the process must be continued every day. It is about being forward-looking in my study of technology and knowing who to learn from.
			</PostPar>
			<CenteredContentWrapper>
				<InViewImage loader caption="Me in Squamish on Lauren's and my honeymoon. This is definitely a happy place for me. The quiet solitude of the 🏔️." imgSrc="http://mylearningposts-api.herokuapp.com/images/me-in-squamish.jpg" />
			</CenteredContentWrapper>
			<PostSectionHeader>
				"If I have seen further it is by standing on the shoulders of giants." - Isaac Newton 🍎
			</PostSectionHeader>
			<PostPar>
				Knowing who to listen to and learn from is such an important part of picking up new things in technology. It seems like everyone wants to be a teacher these days, but not everyone knows how to teach. Or they just want to put out there that they know how to do something for their own job security. Worst case scenario when you are actually trying to learn technology would be to get distracted by the many voices of the last two and miss out on the actual teachers who will accelerate your learning process.
			</PostPar>
			<PostSectionHeader>
				My mission with this site is to help point you to the teachings of the giants of our field.
			</PostSectionHeader>
			<PostPar>
				I hope you'll join me on this journey.
			</PostPar>
		</PostBody>
	)
}