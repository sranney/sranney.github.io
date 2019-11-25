import React from 'react';

import {PostBody} from '../helpers/styled-components/postContainers';
import {CenteredContentWrapper} from '../helpers/styled-components/containers';
import { PostPar, PostTitle } from '../helpers/styled-components/typography';
import InViewImage from './general/InViewImage';

export default function Welcome() {
	return (
		<div>
			<PostBody>
				<PostTitle>👋 Hello, I&apos;m Spencer 👋</PostTitle>
				<CenteredContentWrapper>
					<InViewImage loader caption="You can trust me! I'm wearing a bow-tie!" imgSrc='http://mylearningposts-api.herokuapp.com/images/me-in-tux.jpg'/>
				</CenteredContentWrapper>
				<PostPar>
					Thanks for visiting my site! I&apos;m an engineer in love with code and the craft of my profession. This site is a bit of a passion project for me, and is very personal. It is my hope that you&apos;ll get to know who I am through my writing. I am always seeking out ways to expand my knowledge and thinking in this field. That&apos;s what I&apos;ll be writing about mostly on this site.
				</PostPar>
				<PostPar>
					There are so many great and generous people to learn from online. I am fortunate enough to have found some people in my local communities as well. It makes a lot of sense to me that there is an abundance of generous people wanting to share what they know, because I love sharing what I know. I often teach seminars at work, and I have been a tutor and a teaching assistant in a bootcamp. My experience at the bootcamp as a teaching assistant was a lot of work, especially on top of my job. A lot of hours with students including weekends, and constantly grading their assignments and trying to inspire different ways of thinking about material. But it was one of the biggest blessings in my life at the same time. During the graduation proceedings for the students, I looked around the room at the faces of the students that I worked with. All of these students were deservedly proud of what they had done. They had taken a step towards accomplishing something that they wanted, they had made their lives better by working hard and taking a chance on themselves. And they started a career in software development. To have been a part of this transformative times in these students lives was a great gift to me, and one that has shaped a lot of what I want to be in my career as an engineer.
				</PostPar>
				<PostPar>
					I want to give back to the community that has produced work that has inspired and excited me. A community that has changed the trajectory of my life. I&apos;m finally doing something that I love! I want to be in a position where I can guide someone to getting a job as a software engineer. I want to make as significant of a contribution as I can to the world of software engineering, and to somehow, someway have a part in the journey of coders becoming engineers. I&apos;ve got a long journey of my own ahead of me to reach the levels of those that inspire me. This site is intended to share what I am learning on a period basis, and help provide guidance in where to learn certain things. I spend a lot of time figuring out what the best learning materials are so that I can get up to speed with a technology quickly. I&apos;ll be writing about everything from engineering principals to techniques and design patterns that I learn to some cool new technology that I have picked up.
				</PostPar>
				<PostPar>
					I hope you&apos;ll join me on this journey.
				</PostPar>
			</PostBody>
		</div>
	)
}