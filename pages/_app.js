import '../styles/globals.scss';
import '../styles/Home.module.scss';
import '../styles/Convert.module.scss'
import Layout from '../components/Layout.js';
import { library, config, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import { createGlobalStyle } from "styled-components";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`${dom.css()}`;

library.add(fab, faBars, faTimes, faArrowRight, faFile);

function MyApp({ Component, pageProps }) {
  useEffect(() => {    
    let script = document.createElement('script');
    script.src = 'https://unpkg.com/convertapi-js/lib/convertapi.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  })
  return (
    <> 
      <GlobalStyles />
      <Layout><Component {...pageProps} /></Layout>
    </>
  )
}

export default MyApp;
