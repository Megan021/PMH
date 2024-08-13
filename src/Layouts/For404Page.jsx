// import React from 'react'

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const For404Error = ({children}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    useEffect(()=> {
        console.log("This is location:", location);
        const hiddenNavbarPaths = "*";
        if(hiddenNavbarPaths.includes(location.pathname)) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, [location]);

  return (
    <div>{showNavbar && children}</div>
  )
}

export default For404Error;