import '../styles/globals.css'
import React from 'react'

import { Layout } from '../components'; 

import { StateContext } from '../context/StateContext'; //Using StateContext 

import { Toaster } from 'react-hot-toast'; //Adding pop-up


function MyApp({ Component, pageProps }) {
  return ( 
    //Using <StateContext /> as a wrapper here makes it available across the entire application
    <StateContext> 
    <Layout> 
      <Toaster />
      <Component { ...pageProps} />
    </Layout>
    </StateContext>
  )
}

export default MyApp
