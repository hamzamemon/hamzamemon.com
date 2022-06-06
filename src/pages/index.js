import React from 'react';

import { Layout, FrontCover, Work, Projects, BackCover } from '@components';
import Slider from 'react-slick';

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
      <main>
        <Slider {...settings}>
          <FrontCover />
          <Work />
          <Projects />
          <BackCover />
        </Slider>
      </main>
    </Layout>
  );
};

export default IndexPage;
