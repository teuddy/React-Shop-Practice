import React from 'react';
import { shallow } from 'enzyme';
import Carousel, {
  Carousel as CoreCarousel,
} from '../../Components/Carousel';
import CarouselButton from '../../Components/CarouselButton';
import CarouselSlide from '../../Components/CarouselSlide';
const slides = [
  {
    imgUrl: 'https://example.com/slide1.png',
    description: 'una descripcion 1',
    attribution: 'una atribution 1',
  },
  {
    imgUrl: 'https://example.com/slide2.png',
    description: 'una descripcion 2',
    attribution: 'una atribution 2',
  },
  {
    imgUrl: 'https://example.com/slide3.png',
    description: 'una descripcion 3',
    attribution: 'una atribution 3',
  },
  {
    imgUrl: 'https://example.com/slide4.png',
    description: 'una descripcion 4',
    attribution: 'una atribution 4',
  },
];

/*describe('Component with HOC', () => {
  //aqui solo se necesita verificar que el componente
  //funciona corrctamente al ser Wrappep por HasIndex
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousel slides={slides} />);
  });

  //it('sets slideIndex to 0 on the core component', () => {
    //expect(wrapper.find(CoreCarousel).prop('slideIndex')).toBe(0);
  //});
  //it('passes slides down to the core component', () => {
    //expect(wrapper.find(CoreCarousel).prop('slides')).toBe(slides);
  //});
});*/

describe('core component', () => {
  const slideIndexDecrement = jest.fn();
  const slideIndexIncrement = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CoreCarousel
        slides={slides}
        slideIndex={0}
        slideIndexDecrement={slideIndexDecrement}
        slideIndexIncrement={slideIndexIncrement}
      />,
    );
  });

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('renders a CarouselButton labeled "Prev"', () => {
    expect(wrapper.find(CarouselButton).at(0).prop('children')).toBe(
      'Prev',
    );
  });

  it('renders a CarouselButton labeled "Next"', () => {
    expect(wrapper.find(CarouselButton).at(1).prop('children')).toBe(
      'Next',
    );
  });

  it('renders the current slide as a CarouselSlide', () => {
    let slideProps;
    slideProps = wrapper.find(CarouselSlide).props();
    expect(slideProps).toEqual({
      ...CarouselSlide.defaultProps,
      ...slides[0],
    });
    wrapper.setProps({ slideIndex: 1 });
    slideProps = wrapper.find(CarouselSlide).props();
    expect(slideProps).toEqual({
      ...CarouselSlide.defaultProps,
      ...slides[1],
    });
  });

  it('decrements `slideIndex` when Prev is clicked', () => {
    wrapper.find('[data-action="prev"]').simulate('click');
    expect(slideIndexDecrement).toHaveBeenCalledWith(slides.length);
  });

  it('increments `slideIndex` when Next is clicked', () => {
    wrapper.find('[data-action="next"]').simulate('click');
    expect(slideIndexIncrement).toHaveBeenCalledWith(slides.length);
  });

  it('passes defaultImg and defaultImgHeight to the CarouselSlide', () => {
    const defaultImg = () => 'test';
    const defaultImgHeight = 1234;
    wrapper.setProps({ defaultImg, defaultImgHeight });
    expect(wrapper.find(CarouselSlide).prop('Img')).toBe(defaultImg);
    expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(
      defaultImgHeight,
    );
  });

  it('allows individual slides to override Img and imgHeight', () => {
    const Img = () => 'test';
    const imgHeight = 1234;
    wrapper.setProps({ slides: [{ ...slides[0], Img, imgHeight }] });
    expect(wrapper.find(CarouselSlide).prop('Img')).toBe(Img);
    expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(
      imgHeight,
    );
  });
});
