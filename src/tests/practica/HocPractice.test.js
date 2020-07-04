9;

/**<withFetching/> | HOC COMPONENT.
 *
 *
 * ESTADO
 *
 * 1 - el estado inicial deberia ser de tener estas campos y estos valores:
 *
 *             product = null;
 *             isLoading = false;
 *             error  = false;
 *
 *
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import withFetching from '../../practica/HocPractice';

describe('<withFetching/>', () => {
  const Component = () => null;
  Component.displayName = 'MockComponent';
  const MockComponentWithFetching = withFetching(Component);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MockComponentWithFetching />);
  });

  //Me falta el testeo de el estado inicial, *investigar sobre ello*

  //si "Isloading" es falso, pues chequear que
  it('', () => {
    const secondWrapper = shallow(<MockComponentWithFetching />, {
      disableLifecycleMethods: true,
    });
    secondWrapper.instance();
    expect(secondWrapper.state('isLoading')).toBe(false);
    expect(secondWrapper.state('error')).toBe(null);
    expect(secondWrapper.state('product')).toBe(null);
    secondWrapper.componentDidMount();
    expect(secondWrapper.state('isLoading')).toBe(true);
  });
});
