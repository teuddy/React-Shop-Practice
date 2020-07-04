/*

    <figure class="" style="">
        <img src="/images/234343..png">        
    <figure/>


<div/>

*/

/*
CSS
    .figure
    width: 100%;
    height: 300px;
    display:flex

    
*/

import React from 'react';
import PropTypes from 'prop-types';

const figureCss = {
  width: '95%',
  height: '300px',
};
const imgCss = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
};

const CarouselSlideP = ({ imgUrl }) => (
  <figure style={figureCss}>
    <img src={imgUrl} style={imgCss} />
  </figure>
);

CarouselSlideP.propTypes = {
  imgUrl: PropTypes.string,
};

export default CarouselSlideP;
