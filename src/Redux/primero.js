import React from 'react';
import PropTypes from 'prop-types';

//crear una view function(resive los datos para hacer la interfaz y dispatch actions)
//crear los action types
//crear el reducer encargado de devovler el neuvo estado

const Counter = ({ counter, onDecrement, onIncrement }) => {
  return (
    <div>
      <div>{counter}</div>
      <button onClick={onDecrement} type="button">
        -
      </button>
      <button onClick={onIncrement} type="button">
        +
      </button>
    </div>
  );
};
Counter.propTypes = {
  counter: PropTypes.number,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
};

export default Counter;
