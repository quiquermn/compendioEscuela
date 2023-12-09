class Materia {
	nombre: string
	url: string

	constructor(nombre: string, url: string) {
		this.nombre = nombre
		this.url = url
	}
}
class Semestre {
	url: string
	nombre: string
	numero: number

	materias: Materia[]

	constructor(numero: number, url: string, nombre: string, materias: Materia[]) {
		this.url = url
		this.nombre = nombre
		this.numero = numero
		this.materias = materias
	}
}

const algebra = new Materia('Álgebra', 'algebra')
const compu1 = new Materia('Computación Básica I', 'compu1')
const filo1 = new Materia('Filosofía I', 'filo1')

const historia1 = new Materia('Historia de México I', 'historia1')
const ingles1 = new Materia('Inglés I', 'ingles1')

const semestre1: Semestre = new Semestre(1, '/semestres/1primero', 'Primero', [
	algebra,
	compu1,
	filo1,
	historia1,
	ingles1
])

const trigo = new Materia('Geometría y Trigonometría', 'trigo')
const compu2 = new Materia('Computación Básica II', 'compu2')
const biologia = new Materia('Biología Básica', 'biologia')
const filo2 = new Materia('Filosofía II', 'filo2')
const historia2 = new Materia('Historia de México II', 'historia2')
const ingles2 = new Materia('Inglés II', 'ingles2')

const semestre2: Semestre = new Semestre(2, '/semestres/2segundo', 'Segundo', [
	trigo,
	compu2,
	biologia,
	filo2,
	historia2,
	ingles2
])

const analitica = new Materia('Geometría Analítica', 'analitica')
const fisica1 = new Materia('Física I', 'fisica1')
const quimica1 = new Materia('Química I', 'quimica1')
const socioeco = new Materia('Entorno Socieconómico de México', 'socioeco')
const ingles3 = new Materia('Inglés III', 'ingles3')

const semestre3 = new Semestre(3, '/semestres/3tercero', 'Tercero', [
	analitica,
	fisica1,
	quimica1,
	socioeco,
	ingles3
])

const diferencial = new Materia('Cálculo Diferencial', 'diferencial')
const fisica2 = new Materia('Física II', 'fisica2')
const quimica2 = new Materia('Química II', 'quimica2')
const ingles4 = new Materia('Inglés IV', 'ingles4')

const semestre4 = new Semestre(4, '/semestres/4cuarto', 'Cuarto', [
	diferencial,
	fisica2,
	quimica2,
	ingles4
])

const integral = new Materia('Cálculo Integral', 'integral')
const fisica3 = new Materia('Física III', 'fisica3')
const quimica3 = new Materia('Química III', 'quimica3')
const ingles5 = new Materia('Inglés V', 'ingles5')

const semestre5 = new Semestre(5, '/semestres/5quinto', 'Quinto', [
	integral,
	fisica3,
	quimica3,
	ingles5
])

const probabilidad = new Materia('Probabilidad y Estadística', 'probabilidad')
const fisica4 = new Materia('Física IV', 'fisica4')
const quimica4 = new Materia('Química IV', 'quimica4')
const ingles6 = new Materia('Inglés VI', 'ingles6')

const semestre6 = new Semestre(6, '/semestres/6sexto', 'Sexto', [
	probabilidad,
	fisica4,
	quimica4,
	ingles6
])

export const semestres = [semestre1, semestre2, semestre3, semestre4, semestre5, semestre6]
