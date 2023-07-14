import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import BlogClassicContainer from "../container/BlogGrid/BlogClassicContainer";
import CallToAction from "../container/CallToAction/CallToAction";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const BlogClassic = () => {
  return (
    <React.Fragment>
      <SEO title="Cloud Ingenuity || Blog" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title="Find our articles related to how we serve a wide range of industries"
        content="Home"
        contentTwo="Industry Solutions"
      />
      <BlogClassicContainer />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default BlogClassic;
