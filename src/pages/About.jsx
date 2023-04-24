import { Card ,CardContent} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import {useTheme} from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import {  CodeRounded , SelfImprovementRounded } from '@mui/icons-material';
import avatar from '../assets/avatar.jpg';
import {DevInfo, Skills , DevWorkCount} from '../components/pages';

import { grey } from '@mui/material/colors';
import { CustomAvatar, CustomDivider } from '../components/common';
const About = ({helmetTitle}) => {
    const theme = useTheme();

    return(
        <Card sx={{
            height:"100vh",
            backgroundColor: theme.palette.mode === 'dark' ? grey[700] : grey[300],
            overflowY:"scroll",
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{mx:3}}>
                <Grid
                        xs={0}
                        sm={0}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        <CustomAvatar
                            avatar={avatar}
                            size={200}
                            fallback='M B'
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <CustomDivider
                            bColor="primary.main"
                            cColor='primary'
                            icon={<CodeRounded/>}
                            align='left'
                            text=' من یک توسعه دهنده ی فرانت اند هستم'
                        />
                                              
                    <Grid container >
                        <Grid
                            xs={12}
                            sm={8}
                            md={9}
                            lg={9}
                        >
                            <DevInfo/>
                        </Grid>
                        <Grid
                           xs={4}
                           sm={4}
                           md={3}
                           lg={3}
                           sx={{
                            mt:4,
                            display:{
                                xs:"none",
                                sm:"block",
                                md:"block"
                            }
                           }}
                        >
                            <DevWorkCount/>
                        </Grid>
                    
                    </Grid>
                   
                    </Grid>
                    
                </Grid>
                    
                <Grid container>
                    <Grid sx={{width:1 , mt:1}} >
                    <CustomDivider
                            bColor="secondary.main"
                            cColor='secondary'
                            icon={<SelfImprovementRounded/>}
                            align='center'
                            text=' مهارت های من'
                        />
                        <Skills/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default About;