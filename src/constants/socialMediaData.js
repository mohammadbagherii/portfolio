import { GitHub , Instagram , Telegram , WhatsApp } from "@mui/icons-material";
import { grey } from '@mui/material/colors';
export const socialMediaData = () => {
    const socialMedia =[
    {
        label : "Github",
        href:"https://github.com/mohammadbagherii",
        icon:<GitHub  sx={{color:grey[700]}}/>
    },
    {
        label : "Instagram",
        href:"https://www.instagram.com/_mohammadbagheri__",
        icon:<Instagram sx={{color:grey[700]}} />
    },
    {
        label : "Telegram",
        href:"https://t.me/MBMOHAMMAD99",
        icon:<Telegram sx={{color:grey[700]}} />
    },
    {
        label : "WhatsApp",
        href:"https://wa/me/9162936682",
        icon:<WhatsApp sx={{color:grey[700]}} />
    },
    ]
    return socialMedia;
}