import React from 'react';
import ReactDOM from 'react-dom';
import { Acumulador } from './components/Acumulador';
import { calcularAreaCuadrado, sumarElementos, dividirArregloPorCinco, calcularPromedio, promedioCalificaciones } from './Ejercicios';

const ladoCuadrado = 5;
const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
console.log(`Ejercicio 1: El área del cuadrado con lado ${ladoCuadrado} es ${areaCuadrado}.`);

const numeros = [1, 2, 3, 4, 5];
const suma = sumarElementos(numeros);
console.log(`Ejercicio 2: La suma de los elementos del arreglo es ${suma}.`);

const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const arregloDividido = dividirArregloPorCinco(arregloOriginal);
console.log('Ejercicio 3: Arreglo dividido por 5:', arregloDividido);

const alumnos = [
  { nombre: 'Viviana', edad: 19, calificacion: 10 },
  { nombre: 'Wendy', edad: 20, calificacion: 8 },
  { nombre: 'Gerson', edad: 18, calificacion: 9 },
];
const promedio = calcularPromedio(alumnos);
console.log(`Ejercicio 4: El promedio de calificaciones es ${promedio}.`);

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Ejercicios de TypeScript y React</h1>
      <p>Ejercicio 1: El área del cuadrado con lado {ladoCuadrado} es {areaCuadrado}.</p>
      <p>Ejercicio 2: La suma de los elementos del arreglo es {suma}.</p>
      <p>Ejercicio 3: Arreglo dividido por 5: {arregloDividido.join(', ')}.</p>
      <p>Ejercicio 4: El promedio de calificaciones es {promedio}.</p>
      <Acumulador/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
