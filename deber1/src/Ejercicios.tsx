
export function calcularAreaCuadrado(lado: number): number {
    return lado * lado;
}

export function sumarElementos(arreglo: number[]): number {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

export function dividirArregloPorCinco(arreglo: number[]): number[] {
    return arreglo.map((valor) => valor / 5);
}

interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

export function calcularPromedio(alumnos: Alumno[]): number {
    const sumaCalificaciones = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
    return sumaCalificaciones / alumnos.length;
}

const alumnos: Alumno[] = [
    { nombre: 'Viviana', edad: 19, calificacion: 10 },
    { nombre: 'Wendy', edad: 20, calificacion: 8 },
    { nombre: 'Gerson', edad: 18, calificacion: 9 },
];

export const promedioCalificaciones = calcularPromedio(alumnos);
