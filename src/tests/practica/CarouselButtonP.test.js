/*
Definicion de los diferentes test unitarios para el componente <CarouselButtonP/>

1 - "Recibe un prop titulado "className" junto al valor que le indicamos previamente"

2- "Recibe un prop titulado "style" junto a los valores de css que le indicamos previamente"

3 - "Recibe un prop titulado "children" junto con el valor que le indicamos.

*/

import React from 'react';
import { shallow } from 'enzyme';
import CarouselButtonP from '../../practica/CarouselButtonP';

describe('<CarouselButtonP/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselButtonP />);
  });

  it('resibe prop : {className: "valor"}', () => {
    const buttonClass = 'left-button-carousel';
    wrapper.setProps({ className: buttonClass });
    expect(wrapper.prop('className')).toBe(buttonClass);
  });

  it('resibe prop : {style: "valor"}', () => {
    const buttonCss = {
      color: 'red',
      width: '80px',
    };
    wrapper.setProps({ style: buttonCss });
    expect(wrapper.prop('style')).toBe(buttonCss);
  });
  it('recibe prop: {children: "valor"}', () => {
    const innerHtmlContent = 'Prev';
    wrapper.setProps({ children: innerHtmlContent });
    expect(wrapper.prop('children')).toBe(innerHtmlContent);
  });
});
