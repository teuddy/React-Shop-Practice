import React from 'react';
import ReactDom from 'react-dom';
//import App from './app';
//import slides from './slides';
//import CarouselSlideP from './practica/CarouselSlideP';
/*import CarouselP from './practica/CarouselP';
import CarouselImported from './practica/CarouselImported';*/
const container = document.createElement('div');
document.body.appendChild(container);
import 'react-responsive-carousel/lib/styles/carousel.min.css';
/*container.style.width = '100%';
container.style.backgroundColor = 'whitesmoke';
container.style.height = '100%';*/
/*container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';*/

ReactDom.render(<h1>hey</h1>, container);
