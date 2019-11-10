import React, {useContext} from 'react';

import {ThemeContext} from 'styled-components';

import {IconContext} from 'react-icons';
import * as SkillIcons from 'react-icons/di';

const skillArr = [
    {
        key: 0,
        icon: 'DiReact'
    },
    {
        key: 1,
        icon: 'DiCss3Full'
    },
    {
        key: 2,
        icon: 'DiFirebase'
    },
    {
        key: 3,
        icon: 'DiGit'
    },
    {
        key: 4,
        icon: 'DiHeroku'
    },
    {
        key: 5,
        icon: 'DiHtml5'
    },
    {
        key: 6,
        icon: 'DiJavascript'
    },
    {
        key: 7,
        icon: 'DiJqueryLogo'
    },
    {
        key: 8,
        icon: 'DiMaterializecss'
    },
    {
        key: 9,
        icon: 'DiMongodb'
    },
    {
        key: 10,
        icon: 'DiMysql'
    },
    {
        key: 11,
        icon: 'DiNodejsSmall'
    },
    {
        key: 12,
        icon: 'DiNpm'
    },
    {
        key: 13,
        icon: 'DiSass'
    }
]

export default function Skills () {
    const {theme} = useContext(ThemeContext);
    const themeColor = theme === 'dark' ? 'var(--color-neutral-0)' : 'var(--color-primary-800)';
    return (
        <div>
            <IconContext.Provider value={{ size: '4em', color: themeColor}}>
                {
                    skillArr.map(({key,icon}) => {
                        const IconComponent = SkillIcons[icon];
                        return <IconComponent key={key}/>;
                    })
                }
            </IconContext.Provider>
        </div>
    );
}