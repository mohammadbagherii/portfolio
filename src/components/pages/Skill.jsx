import { Divider , Chip , Box , Typography , LinearProgress, Badge } from '@mui/material';
const Skill = ({icon , color ,  value,name }) => {
    return(
        <>
            <Divider textAlign='left' sx={{
                "&::before, &::after":{
                    borderColor: `${color}.main`,
                },
                mt:3
            }}
            >
                <Chip 
                    icon={
                        <Box 
                            component="img" 
                            src={icon} 
                            sx={{height:30}}
                        />
                    } 
                    label={name} 
                    color={color} 
                    sx={{color : "#000" , p:3 ,direction:"rtl"}} 
                />
            </Divider>
            <Box sx={{display:"flex" , alignItems:"center"}} >
                <Box sx={{width:"100%" , mr:1}}>
                    <LinearProgress
                        variant='determinate'
                        value={value}
                        color={color}
                        sx={{
                            height:10,
                            borderRadius:2
                        }}
                    />
                </Box>
                <Box sx={{minWidth:30 ,mx:2 }}>
                    <Typography variant='body2' color='purple' >
                      <Badge
                        variant='standard'
                        badgeContent={`${Math.round(value)}%`}
                        color={color}
                      />
                    </Typography>
                </Box>
            </Box>
        </>
    )
} 

export default Skill;