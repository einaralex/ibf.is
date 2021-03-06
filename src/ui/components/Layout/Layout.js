import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "./global.scss";
import styles from "./Layout.module.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <ParallaxProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <div className={styles.root}>{children}</div>
    <Footer />
  </ParallaxProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
