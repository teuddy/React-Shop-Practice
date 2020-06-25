import React from 'react';
import PropTypes from 'prop-types';

//HOC function, recive un componente y unos props
//y devuelve un wrapper (componente) alrededor de el
//componente original y le anade funcionaldiad
const capitalize = (word) =>
  `${word[0].toUpperCase()}${word.slice(1)}`; // (1)

export default (Component, indexPropName) => {
  const defaultIndexPropName = `default${capitalize(indexPropName)}`;

  return class ComponentWithIndex extends React.PureComponent {
    static displayName = `HasIndex(${
      Component.displayName || Component.name
    })`;

    static propTypes = {
      [indexPropName]: PropTypes.number, // (2)
      [defaultIndexPropName]: PropTypes.number,
      onIndexChange: PropTypes.func,
    };

    static defaultProps = {
      [defaultIndexPropName]: 0,
    };

    static getDerivedStateFromProps(props, state) {
      // (3)
      if (
        props[indexPropName] != null &&
        props[indexPropName] !== state.index
      ) {
        return { index: props[indexPropName] };
      }
      return null;
    }

    constructor(props) {
      // (4)
      super(props);

      this.state = {
        index: props[defaultIndexPropName],
      };
    }

    handleDecrement = (upperBound) => {
      const { onIndexChange } = this.props;
      this.setState(({ index }) => {
        const newIndex = upperBound
          ? (index + upperBound - 1) % upperBound
          : index - 1;
        if (onIndexChange) {
          onIndexChange({ target: { value: newIndex } });
        }
        return {
          index: newIndex,
        };
      });
    };

    handleIncrement = (upperBound) => {
      const { onIndexChange } = this.props;
      this.setState(({ index }) => {
        const newIndex = upperBound
          ? (index + 1) % upperBound
          : index + 1;
        if (onIndexChange) {
          onIndexChange({ target: { value: newIndex } });
        }
        return {
          index: newIndex,
        };
      });
    };

    render() {
      const {
        [defaultIndexPropName]: _defaultIndexProp,
        ...rest
      } = this.props;
      const indexProps = {
        [indexPropName]: this.state.index,
        [`${indexPropName}Decrement`]: this.handleDecrement,
        [`${indexPropName}Increment`]: this.handleIncrement,
      };
      return <Component {...rest} {...indexProps} />;
    }
  };
};
//Resumen Cap 5
//Para pasarle la logica de slideIndez a Carousel, necesitamos que el prop
//indexPropName le pase 3 cosas a el wrapped componente.:
//1) increment function
//2) decrement function
//3) y el mismo index
