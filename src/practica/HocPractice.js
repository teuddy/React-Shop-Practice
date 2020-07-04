import React from 'react';
import axios from 'axios';

const withFetching = (Component) => {
  const BaseUrl = 'http://localhost:1337/products/1';
  return class WithFetching extends React.Component {
    static displayName = `withFetching(${
      Component.displayName || Component.name
    })`;
    state = {
      isLoading: false,
      error: null,
      product: null,
    };

    componentDidMount() {
      this.setState({ isLoading: true });
      //aqui puedo poner la logica de basado donde este el user
      //buscarle el recurso que busca
      axios
        .get(BaseUrl)
        .then((result) =>
          this.setState({
            product: result.data,
            isLoading: false,
          }),
        )
        .catch((error) =>
          this.setState({
            error,
            isLoading: false,
          }),
        );
    }

    render() {
      //const loading = this.state.isLoading ? <h1>Esta cargando...</h1>

      return (
        <div>
          {this.state.isLoading ? (
            <h1>Cargando...</h1>
          ) : (
            <h1>ya cargo!</h1>
          )}
        </div>
      );
    }
  };
};

export default withFetching;
