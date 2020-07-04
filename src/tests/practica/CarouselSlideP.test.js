/*
1 - El componente es representado por un elemento figure

2 - <figure/> tiene un property style, con los valores ""

3 - <figure> tiene un solo hijo, 
    (3.5) El cual es un elemento de tipo img

4 - El elemento <img> tiene una propiedad src con el valor
    que le pasamos
*/

import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlideP from '../../practica/CarouselSlideP';

describe('<CarouselSlideP/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarouselSlideP />);
  });

  it('no cambia', () => {
    wrapper.setProps({
      imgUrl:
        'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('Es un figure', () => {
    expect(wrapper.type()).toEqual('figure');
  });
  it('Figure tiene un prop: {style: "valor"}', () => {
    const figureCss = {
      width: '95%',
      height: '300px',
    };
    expect(wrapper.prop('style')).toEqual(figureCss);
  });
  it('el elemento figure tiene un solo hijo el cual es un img', () => {
    expect(wrapper.find('figure').children()).toHaveLength(1);
    expect(wrapper.find('figure').childAt(0).type()).toBe('img');
  });
  it('El elemento img tiene estos estilos css', () => {
    const imgCss = {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    };
    expect(wrapper.find({ style: imgCss }).type()).toBe('img');
  });
  it('elemento img tiene un prop: {src: "valor"', () => {
    const srcAttributeContent =
      'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg';
    wrapper.setProps({ imgUrl: srcAttributeContent });
    expect(wrapper.find('img').prop('src')).toBe(srcAttributeContent);
  });
});
