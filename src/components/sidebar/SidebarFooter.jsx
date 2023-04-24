import { Box , Typography } from "@mui/material";
import {
    FavoriteRounded,
    CopyrightRounded
}from "@mui/icons-material";

const SidebarFooter = () => {
    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"end",
            flexGrow:"1",
            height:100
        }}
    >
        <Typography variant="subtitle2" color="text.primary">
            طراحی شده با{" "}
            <FavoriteRounded 
                sx={{
                    verticalAlign:"middle",
                    color:"tomato",
                    height:20
                }}
            />
        </Typography>
        <Typography variant="caption" color="text.primary" sx={{mt:2}}>
            کپی رایت 1401 {" "}
            <CopyrightRounded
                sx={{
                    verticalAlign:"middle",
                    height:16
                }}
            />
        </Typography>
    </Box>
    )
}

export default SidebarFooter;