import {useState , useEffect} from "react";

import { Helmet } from 'react-helmet-async';
import {Card ,CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import {   TerminalRounded } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useTheme } from "@mui/material/styles";
import {CustomDivider } from '../components/common';
import { ShowProjects } from "../components/pages";

const Projects = ({helmetTitle}) => {
    const [loading , setLoading] = useState(false);
    const theme = useTheme();

    useEffect(()=>{
        setLoading(true);
    
        return()=> {
            setLoading(false);
        }
    },[])
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
            <CustomDivider
                bColor='primary.main'
                cColor='primary'
                icon={<TerminalRounded/>}
                align='center'
                text='نمونه کار ها'
            />
            
                    <Grid container sx={{mx:3 , mt:3}} >
                       <ShowProjects loading={loading} />
                    </Grid>
            </CardContent>
        </Card>    
    )
}

export default Projects;