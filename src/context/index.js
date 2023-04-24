import {createContext} from 'react';

export default createContext({
    pageNumber: 0,
    handlePageNumber: () => {},
    handleChangeTheme: () => {},
    drawerOpen : false,
    setDrawerOpen: () => {}
})