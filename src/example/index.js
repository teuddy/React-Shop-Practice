import React from 'react';
import ReactDom from 'react-dom';
import Carousel from '../Components/Carousel';
import slides from './slides';
const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<Carousel slides={slides} />, container);
