/*



<div>
    <CarouselButtonP onClick="" style = {}> Prev <CarouseButtonP/>

    <CarouselSlide imgUrl="/34324.png"/>  

    <CarouselButtonP onClick="" style= {}> Next <CarouselButtonP/>
<div/>

*/

import React from 'react';
import PropTypes from 'prop-types';
import CarouselButtonP from './CarouselButtonP';
import CarouselSlideP from './CarouselSlideP';

class CarouselP extends React.Component {
  static propTypes = {
    carouselImages: PropTypes.array,
  };
  state = {
    index: 0,
  };
  prevStyle = {
    width: '100px',
  };
  nextStyle = {
    width: '100px',
  };
  prevIndex() {
    //array que desciende state en -1
    //objetivos: descender numero, en el caso de que
    //se esta en el primer indice es decir 0 y
    //se llama el metodo deneuvo pues hacer index
    //igual al ultimo index del array
    const { carouselImages } = this.props;
    this.setState(({ index }) => ({
      index:
        (index + carouselImages.length - 1) % carouselImages.length,
    }));
  }
  nextIndex() {
    const { carouselImages } = this.props;
    this.setState(({ index }) => ({
      index: (index + 1) % carouselImages.length,
    }));
  }
  render() {
    const { carouselImages } = this.props;

    return (
      <div>
        <CarouselButtonP
          style={this.prevStyle}
          onClick={() => this.prevIndex()}
        >
          prev
        </CarouselButtonP>
        <CarouselSlideP {...carouselImages[this.state.index]} />
        <CarouselButtonP
          style={this.nextStyle}
          onClick={() => this.nextIndex()}
        >
          next
        </CarouselButtonP>
      </div>
    );
  }
}

export default CarouselP;

/**
 * 
 diferentes maneras de pasar props

 EJEMPLO 1 

 const obj = {
   nombre: 'teuddy,
   apellido: 'cedano
 }

 <Componente greeting={obj} />


 const Componente = ({greeting})=>{
   return <h1> {greeting.nombre} <h1/>


   EJEMPLO2 (SPEAD OPERATOR)
   const obj = {
    nombre: 'teuddy,
    apellido: 'cedano
    }

    <Componente {...obj} />

    const Componente = ({nombre})=>{
      return <h1> {nombre} <h1/>
    }
 }

 ENTONCES EN RESUMEN SPREAD LO QUE HACE ES PASAR CADA PROPIEDA DEL OBJETO
 AL COMPONENTE EJEMPLO:
const obj = {
    nombre: 'teuddy,
    apellido: 'cedano
    }

    <Componente nombre={nombre} apellido={apellido} />
 */
