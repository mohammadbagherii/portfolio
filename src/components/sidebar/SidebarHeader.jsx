import { useState } from "react";
import {  Typography } from "@mui/material";
import avatar from '../../assets/avatar1.jpg'
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphaberPersian";
import { useTheme } from "@mui/material/styles";

import { CustomAvatar } from "../common";
import ThemeActionButton from './../ThemeActionButton';
import { grey } from '@mui/material/colors';
import SocialMediaIcon from "../SocialMediaIcon";
const SidebarHeader = () => {
    const [start , setStart] = useState(false);
    const theme = useTheme();

    return(
        <>
            <ThemeActionButton/>
            <CustomAvatar
                avatar={avatar}
                size={200}
                fallback="M B"
            />
            <Typography 
                variant="h6" 
                color= {theme.palette.mode === 'dark' ? 'secondary.main' : 'primary.main'} 
            >
            <Typography variant="caption" color="gray" >{"{{"}</Typography>
            <RandomReveal onComplete={()=> setStart(true)} isPlaying duration={4} characters="محمد باقری" characterSet={alphabetPersian} />  
            <Typography variant="caption" color="gray" >{"}}"}</Typography>
            </Typography>
            {start && (
                <Typography 
                    variant="caption" 
                    color={theme.palette.mode === 'dark' ? 'gray' : grey[800]} 
                >
                <Typography variant="caption" color="gray" >[[ {" "}</Typography>
               <RandomReveal isPlaying duration={4} characters=" توسعه دهنده ی فرانت اند" characterSet={alphabetPersian}/> 
                <Typography variant="caption" color="gray" > {" "} ]]</Typography>
                </Typography>
            )} 
            
            <SocialMediaIcon/>
        </>
    )
}

export default SidebarHeader;