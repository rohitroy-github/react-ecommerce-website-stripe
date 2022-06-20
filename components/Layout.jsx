import React from 'react'; 
import Head from 'next/head'; //Similar to the <head> tag in HTML but you have to import it into Next.js

import Navbar from './Navbar'; 
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
      <div className="layout"> 
      <Head> 
      <title>Smart Galaxy Store</title>
      </Head>
      <header> 
        <Navbar />
      </header>
      <main className='main-container'> 
        {children}
      </main>
      <footer> 
        <Footer />
      </footer>
      </div>
  )
}

export default Layout;