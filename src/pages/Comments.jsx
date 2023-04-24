import { Helmet } from 'react-helmet-async';
import { Card ,CardContent} from '@mui/material';

import { ForumRounded } from '@mui/icons-material';

import { grey } from '@mui/material/colors';
import {useTheme} from '@mui/material/styles';
import {CustomDivider} from '../components/common';
import { CommentsSlider } from "../components/pages";

const Comments = ({helmetTitle}) => {
    const theme =useTheme();
    return(
        <Card sx={{
            height:"100vh",
            backgroundColor: theme.palette.mode === 'dark' ? grey[700] : grey[300],
            overflowY:"scroll",
            display:"flex",
            flexDirection:"column"
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor='success.main'
                    cColor='success'
                    icon={<ForumRounded/>}
                    align='center'
                    text='نظرات'
                />
                   <CommentsSlider/>
            </CardContent>
            </Card>
    )
}

export default Comments;