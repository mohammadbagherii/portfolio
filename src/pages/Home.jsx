import { useEffect , useRef , useCallback , useState} from 'react';

import { Box , Typography} from '@mui/material';
import bg02 from '../assets/bg02.jpeg';
import Particles from 'react-particles';
import { Helmet } from 'react-helmet-async';
import {loadFull} from "tsparticles";
import TextTransition ,{presets} from 'react-text-transition';
// import {hexagon , links} from '../constants/particles'

import Typed from "typed.js";

const Home = ({helmetTitle}) => {
  const [index , setIndex] = useState(0)
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    " توسعه دهنده ی فرانت اند هستم",
    " فریلنسر هستم"
  ]

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings:["محمد باقری"],
      typeSpeed:110,
      backSpeed:80,
      backDelay:50,
      showCursor:false
    })

    const stringsTransition = setInterval(()=>{
      setIndex(index => index +1);
    },3000)

    return() => {
      typedName.destroy();
      clearInterval(stringsTransition);
    }
  }, [])

  const particlesInit = useCallback(async (engin) => {
    await loadFull(engin);
  },[])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  },[])
  return(
        <Box
            sx={{
              backgroundImage: `url(${bg02})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              height:"100vh",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Helmet>
              <title>{helmetTitle}</title>
            </Helmet>
          {/* <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={hexagon} /> */}
          <Box component="div" sx={{display:"flex"}} >
            <Typography variant='h4' color="gray" >{"{{"}</Typography>
            <Typography ref={nameEl} variant="h4" color="secondary.main" ></Typography>
            <Typography variant='h4' color="gray" >{"}}"}</Typography>
          </Box>
          <Box component="div" sx={{display:"flex"}}>
          <Typography variant='h5' color="whitesmoke" sx={{mt:4 , mr:1}}>
               من یک
          </Typography>
          <TextTransition springConfig={presets.wobbly}>
           <Typography 
                variant="h5" 
                color="whitesmoke"
                sx={{
                    mt:4,
                    textDecoration:"underline",
                    textDecorationColor:"gray"
                }} 
            >
              {strings[index % strings.length]}
            </Typography>
          </TextTransition>
          </Box>
          </Box>
    )
}

export default Home;