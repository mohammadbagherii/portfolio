import { Box ,IconButton } from "@mui/material";

import {socialMediaData} from "../constants/socialMediaData";

const SocialMediaIcon = () => {
    const data = socialMediaData();
    return(
        <Box component="div" sx={{m : "0 auto", textAlign:"center"}} >
                {data.map((socialmedia,index)=>(
                <IconButton key={index} aria-label={socialmedia.label} >
                    <a
                        href={socialmedia.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {socialmedia.icon}                       
                    </a>
                </IconButton>
              ))}
            </Box>  
    )
}

export default SocialMediaIcon;