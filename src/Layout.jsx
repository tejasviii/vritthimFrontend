import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './themeContext';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return <div>{children}</div>;
};

export default Layout;
