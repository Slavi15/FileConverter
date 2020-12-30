import '../styles/globals.scss';
import '../styles/Convert.module.scss';
import Layout from '../components/Layout.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`${dom.css()}`;

library.add(fab, faBars, faTimes, faArrowRight);

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <GlobalStyles />
      <Layout><Component {...pageProps} /></Layout>
    </>
  )
}

export default MyApp
