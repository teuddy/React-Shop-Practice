/**
 * <CAROUSELP/>
 *
 * Estado
 * 1 - Tiene un estado con un key = "index"
 *      1.1 - tiene ese estado un valor inicial de cero?
 *      1.2 - tiene dos funciones que cambian su estado:
 *               "prevIndex" - "disminuye en uno el valor del estado"
 *                "nextIndex" - "aumenta en uno el valor del estado"?
 * Props
 *
 * 1 - <CarouselButtonP>(individual)
 *      1.1 - reciben un prop con el key = "onCick"?
 *              1.1.2 - y clickear esos onClicks, llaman
 *                        una sola vez a el metodo correspondiente
 *      1.2 - reciben un prop con el key = "style"?
 *      1.3 - reciben un prop children de tipo text
 *
 * 2 -  <CarouselSlideP/>
 *      1.1 - recibe un prop con el key "imgUrl
 *              1.2 - es ese prop slides un objeto igual al array
 *                        con el indice del estado
 *              1.3 - y si aumenta o disminuye el estado,
 *                   sigue siendo el mismo objeto?
 *
 *
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import CarouselP from '../../practica/CarouselP';
import CarouselSlideP from '../../practica/CarouselSlideP';

const carouselImages = [
  {
    imgUrl: 'https://www.gstatic.com/webp/gallery/2.sm.jpg',
  },
  {
    imgUrl: 'https://www.gstatic.com/webp/gallery/5.sm.jpg',
  },
  {
    imgUrl: 'https://www.gstatic.com/webp/gallery/1.sm.jpg',
  },
];

describe('<CarouselP/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselP carouselImages={carouselImages} />);
  });

  //Testeos unitarios correspondiente al estado.
  it('tiene un estado con un key llamado "index"', () => {
    expect(wrapper.state()).toHaveProperty('index');
  });
  it('el estado index tiene un valor inicial igual a cero', () => {
    expect(wrapper.state('index')).toEqual(0);
  });
  it('el metodo "prevIndex cambia el estado en -1', () => {
    const instance = wrapper.instance();
    wrapper.setState({ index: 1 });
    instance.prevIndex();
    expect(wrapper.state('index')).toEqual(0);
  });
  it('el metodo "nextIndex cambia el estado en +1', () => {
    const instance = wrapper.instance();
    instance.nextIndex();
    expect(wrapper.state('index')).toEqual(1);
  });
  //fin de los testeos a el estado y su comprotamiento.

  //Comienzo del testeo del primer componente CarouselButtonP
  it('el primer carouselButton recibe un prop con el key onClick', () => {
    expect(wrapper.childAt(0).props()).toHaveProperty('onClick');
  });
  it('el primer carouselButton cuando se da el evento onClick llama una sola vez a prevIndex', () => {
    let spy = jest.spyOn(CarouselP.prototype, 'prevIndex');
    const firstCarouselButton = wrapper.find('div').childAt(0);
    firstCarouselButton.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  it('el primer carouselButton recibe el prop style con los siguientes estilos', () => {
    const firstButtonCss = {
      width: '100px',
    };
    expect(
      wrapper.find('div').childAt(0).prop('style'),
    ).toStrictEqual(firstButtonCss);
  });
  it('el primer carouselButton recibe un child', () => {
    expect(
      wrapper.find('div').childAt(0).prop('children'),
    ).toBeTruthy();
  });
  it('el texto interno de el primer carouselButton es "prev"', () => {
    expect(wrapper.find('div').childAt(0).prop('children')).toEqual(
      'prev',
    );
  });
  //fin de los testeos de el primer componente CarouselButtonP

  //comienzo de los testeosa el ultimo componente CarouselButtonP
  it('el segundo carouselButton recibe un prop con el key onClick', () => {
    expect(wrapper.childAt(2).props()).toHaveProperty('onClick');
  });
  it('el segundo carouselButton cuando se da el evento onClick llama una sola vez a nextIndex', () => {
    let spy = jest.spyOn(CarouselP.prototype, 'nextIndex');
    const secondtCarouselButton = wrapper.find('div').childAt(2);
    secondtCarouselButton.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  it('el segundo carouselButton recibe el prop style con los siguientes estilos', () => {
    const secondButtonCss = {
      width: '100px',
    };
    expect(
      wrapper.find('div').childAt(2).prop('style'),
    ).toStrictEqual(secondButtonCss);
  });
  it('el segundo carouselButton recibe un child', () => {
    expect(
      wrapper.find('div').childAt(2).prop('children'),
    ).toBeTruthy();
  });
  it('el texto interno de el segundo carouselButton es "next"', () => {
    expect(wrapper.find('div').childAt(2).prop('children')).toEqual(
      'next',
    );
  });
  //fin de lso testeos a el segundo carouselButton

  //empiezan los testeos a el carouselSlideP
  it('el carouselSlide recive un prop imgUrl: enlance.png', () => {
    const carouselSlide = wrapper.find(CarouselSlideP);
    expect(carouselSlide.props()).toHaveProperty('imgUrl');
  });
});
