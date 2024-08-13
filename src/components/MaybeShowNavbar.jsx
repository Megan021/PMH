import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    console.log('this is location', location);
    if (location.pathname === '/aboutUs') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]); // Add location.pathname to the dependency array

  return (
    <div>
      {showNavbar && children}
    </div>
  );
};

export default MaybeShowNavbar;
