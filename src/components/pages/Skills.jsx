import { useState,useEffect } from 'react';

import { devSkills } from '../../constants/skills';
import {Skill} from './';

const Skills = () => {
    const [html , setHtml] = useState(0);
    const [css , setCss] = useState(0);
    const [javascript , setJavascript] = useState(0);
    const [reactJs , setReactJs] = useState(0);
    const [git , setGit] = useState(0);

    const {htmlSkill , cssSkill, jsSkill , reactSkill , gitSkill} = devSkills;


    useEffect(()=>{
        const timer = setInterval(()=>{
            setHtml((oldProgress)=>{
                const diff = Math.random() * 10;
                return Math.min(oldProgress +diff , 95);
            })
            setCss((oldProgress)=>{
                const diff = Math.random() * 10;
                return Math.min(oldProgress +diff , 73);
            })
            setJavascript((oldProgress)=>{
                const diff = Math.random() * 10;
                return Math.min(oldProgress +diff , 82);
            })
            setReactJs((oldProgress)=>{
                const diff = Math.random() * 10;
                return Math.min(oldProgress +diff , 95);
            })
            setGit((oldProgress)=>{
                const diff = Math.random() * 10;
                return Math.min(oldProgress +diff , 70);
            })
        },200)

        return() => {
            clearInterval(timer);
        }
    })

    return(
        <>
            <Skill
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                name={htmlSkill.name}
                value={html}
            />
            <Skill
                icon={cssSkill.icon}
                color={cssSkill.color}
                name={cssSkill.name}
                value={css}
            />
            <Skill
                icon={jsSkill.icon}
                color={jsSkill.color}
                name={jsSkill.name}
                value={javascript}
            />
            <Skill
                icon={reactSkill.icon}
                color={reactSkill.color}
                name={reactSkill.name}
                value={reactJs}
            />
                   
            <Skill
                icon={gitSkill.icon}
                color={gitSkill.color}
                name={gitSkill.name}
                value={git}
            />
        </>
    )
}

export default Skills;