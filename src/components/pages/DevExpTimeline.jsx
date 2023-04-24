import { Timeline ,TimelineItem , TimelineSeparator , TimelineDot , TimelineContent } from '@mui/lab';
import {HomeRepairServiceRounded } from '@mui/icons-material';

import { devExperiences} from "../../constants/details"
import { Typography,Slide } from '@mui/material';
const DevExpTimeline = ({loading}) => {
    return(
        <Timeline position='right' >
        {devExperiences.map((item , index)=>(
            <Slide direction="up" key={index} in={loading} style={{
                transitionDelay:loading? `${index + 3}99ms` : "0ms"
            }} >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='warning' variant='outlined' >
                        <HomeRepairServiceRounded color='warning'/>
                    </TimelineDot>
                
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='body2' color="black"  sx={{mt:2}} >
                        {item.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            </Slide>
        ))}
        </Timeline>
    )
}

export default DevExpTimeline;