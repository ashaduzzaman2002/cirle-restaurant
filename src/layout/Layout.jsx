import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Layout = ({children}) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "Item",
      path: "/item",
    },

    {
      title: "Restaurants",
      path: "/restaurants",
    },
  ];


  return (
    <div >
        <Navbar type={'user'} navLinks={navLinks} />
        {children}
        <Footer />
    </div>
  )
}

export default Layout