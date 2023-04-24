import { Typography } from '@mui/material';
import {  KeyboardArrowLeftRounded } from '@mui/icons-material';

const Info = ({children}) => {
    return(
        <Typography variant='body1' color="black" textAlign="left" sx={{mt:2}} >
            <KeyboardArrowLeftRounded
            sx={{
                verticalAlign:"bottom",
                color:"primary.main"
            }}
            />
             {children}
        </Typography>
    )
}

const DevInfo = () => {
    return(
        <>
            <Info>نام و نام خانوادگی : محمد باقری</Info>
            <Info> سن : 22</Info>
            <Info>شهر : اصفهان</Info>
            <Info> آدرس ایمیل : mobagherii99@gmail.com </Info>
            <Info>شماره موبایل : 09162936682</Info>       
        </>
    )
}

export default DevInfo;