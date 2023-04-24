import { useEffect, useState } from "react";
import PagesContainer from "./PagesContainer";
import {Sidebar} from "../components/sidebar";
import {Page} from "../components/pages";
import MainLayout from "../layouts/MainLayout";
import {  useMediaQuery } from '@mui/material';
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import DrawerActionButton from './../components/drawer/DrawerActionButton';
import {Home , About ,Resume , Projects , Comments , Contact} from '../pages';
import {useTheme} from "@mui/material/styles"; 

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen , setDrawerOpen] = useState(false);
  const [mode , setMode] =useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme:derk)')
  
    useEffect(()=>{
        setMode(prefersDarkMode ? "dark" : "light");
    },[])

  useEffect(()=>{
    setDrawerOpen(false);
  },[isMdUp])
  
  const handlePageNumber =(event , newPage) => {
      setPageNumber(newPage);
  }

  const handleThemeChange = () =>{
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }

  return (
    <MainContext.Provider
    value={{ pageNumber, handlePageNumber,handleThemeChange, drawerOpen, setDrawerOpen }}
>
    <MainLayout mode={mode} >
        <SidebarContainer>
            <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
                <Page pageNumber={pageNumber} index={0}>
                    <Home helmetTitle="وب سایت شخصی محمد باقری" />
                </Page>
                <Page pageNumber={pageNumber} index={1}>
                    <About helmetTitle="وب سایت شخصی |درباره من" />
                </Page>
                <Page pageNumber={pageNumber} index={2}>
                    <Resume helmetTitle="وب سایت شخصی|رزومه من" />
                </Page>
                <Page pageNumber={pageNumber} index={3}>
                    <Projects helmetTitle="وب سایت شخصی|نمونه کارها" />
                </Page>
                <Page pageNumber={pageNumber} index={4}>
                    <Comments helmetTitle="وب سایت شخصی|نظرات" />
                </Page>
                <Page pageNumber={pageNumber} index={5}>
                    <Contact helmetTitle="وب سایت شخصی|ارتباط با من" />
                </Page>
        </PagesContainer>
    </MainLayout>
</MainContext.Provider>
  );
}

export default AppContainer;
