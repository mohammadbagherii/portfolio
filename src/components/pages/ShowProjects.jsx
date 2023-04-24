import EllipsisText from "react-ellipsis-text";
import { Typography ,Card ,CardContent ,CardActionArea,CardActions,CardMedia, Slide,Button} from '@mui/material';
import {projects} from '../../constants/projects';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const ShowProjects = ({loading}) => {
    return(
        <>
        {
            projects.map((project,index)=>(
                <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{px:2 , mb:2 ,direction:"rtl"}} >
                    <Slide direction="up" in={loading} style={{
                        transitionDelay:loading ? `${index+3}99ms` : "0ms"
                    }} >
                        <Card sx={{maxWidth:345 ,backgroundColor:"steelblue"}} >
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    width='200'
                                    height='250'
                                    image={project.image}
                                    alt={project.title}
                                    />
                                <CardContent>
                                    <Typography variant="body1" textAlign='left' gutterBottom >
                                        {project.title}
                                    </Typography>
                                    <Typography  sx={{direction:'ltr'}} variant="body2" color='text.secondary' textAlign='left' >
                                        <EllipsisText text={project.info} length={100} />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href={project.link} size='small' color="primary" target='_blank' > 
                                    اطلاعات بیشتر
                                </Button>
                            </CardActions>
                        </Card>
                    </Slide>
                </Grid>
            ))
        }
    </>
    )
}

export default ShowProjects;