import {useContext} from 'react';
import MainContext from '../../context';
import { Tabs , Tab } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import { grey } from "@mui/material/colors";
import { tabsData } from '../../constants/tabsData';


const SidebarTabs = () => {

    const {pageNumber , handlePageNumber , setDrawerOpen} = useContext(MainContext);
    const data = tabsData();
    const theme = useTheme()

    return(
        <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                indicatorColor={theme.palette.mode === 'dark' ? 'secondary':'primary'}
                textColor={theme.palette.mode === 'dark' ? 'secondary':'primary'}
                value={pageNumber}
                onChange={handlePageNumber}
            >
                {data.map((tab,index) => (
                     <Tab
                     key={index}
                     label={tab.label}
                     icon={tab.icon}
                     iconPosition="start"
                     {...tab}
                     sx={{
                         backgroundColor: theme.palette.mode === 'dark' ? grey[800] : grey[600],
                         color:"text.primary",
                         my:0.5,
                         mx:1,
                         borderRadius:2,
                         "&.MuiTab-root":{
                             minHeight:50
                         }
                     }}
                     onClick={() => setDrawerOpen(false)}
                 />
                ))}
               
                
            </Tabs>
    )
}

export default SidebarTabs;