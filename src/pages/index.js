import React from 'react';

import Layout from '../components/Layout';
import Work from '../components/Work';
import Projects from '../components/Projects';
import FrontCover from '../components/FrontCover';
import Slider from 'react-slick';
import BackCover from '../components/BackCover';

const IndexPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout>
      <Slider {...settings}>
        <FrontCover />
        <Work />
        <Projects />
        <BackCover />
      </Slider>
    </Layout>
  );
};

export default IndexPage;
