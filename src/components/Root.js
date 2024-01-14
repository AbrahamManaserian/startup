import { Grid, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import SideBar from './Sidebar';
import TopBar from './TopBar';
import { createContext, useState } from 'react';
import useGetUser from '../useGetUser';

export const AppContext = createContext();
export default function Root() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || '1');
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || 'dark');
  const [basket, setBasket] = useState(localStorage.getItem('basket') || 0);
  let user = useGetUser();
  // console.log(user);
  return (
    <AppContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
        //   darkMode: darkMode,
        setDarkMode: setDarkMode,
        setBasket: setBasket,
        user: user,
        basket: basket,
      }}
    >
      <Grid item xs container>
        <SideBar />
        <Grid item xs height="100vh" sx={{ overflow: 'scroll' }}>
          <TopBar />
          <Outlet />
        </Grid>
      </Grid>
    </AppContext.Provider>
  );
}
