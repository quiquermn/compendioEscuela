interface Materia {
	nombre: string
	url: string
}
interface Semestre {
	url: string
	nombre: string
	numero: number
	materias: Materia[]
}

const semestre1: Semestre = {
	url: '/semestres/1primero',
	nombre: 'Primero',
	numero: 1,
	materias: [
		{ nombre: 'Álgebra', url: 'algebra' },
		{ nombre: 'Computación Básica I', url: 'compu1' },
		{ nombre: 'Filosofía I', url: 'filo1' },
		{ nombre: 'Historia de México I', url: 'historia1' },
		{ nombre: 'Inglés I', url: 'ingles1' }
	]
}

const semestre2: Semestre = {
	url: '/semestres/2segundo',
	nombre: 'Segundo',
	numero: 2,
	materias: [
		{ nombre: 'Geometría y Trigonometría', url: 'trigo' },
		{ nombre: 'Computación Básica II', url: 'compu2' },
		{ nombre: 'Biología Básica', url: 'biologia' },
		{ nombre: 'Filosofía II', url: 'filo2' },
		{ nombre: 'Historia de México II', url: 'historia2' },
		{ nombre: 'Inglés II', url: 'ingles2' }
	]
}

const semestre3: Semestre = {
	url: '/semestres/3tercero',
	nombre: 'Tercero',
	numero: 3,
	materias: [
		{ nombre: 'Geometría Analítica', url: 'analitica' },
		{ nombre: 'Física I', url: 'fisica1' },
		{ nombre: 'Química I', url: 'quimica1' },
		{ nombre: 'Entorno Socieconómico de México', url: 'socioeco' },
		{ nombre: 'Inglés III', url: 'ingles3' }
	]
}

const semestre4: Semestre = {
	url: '/semestres/4cuarto',
	nombre: 'Cuarto',
	numero: 4,
	materias: [
		{ nombre: 'Cálculo Diferencial', url: 'diferencial' },
		{ nombre: 'Física II', url: 'fisica2' },
		{ nombre: 'Química II', url: 'quimica2' },
		{ nombre: 'Inglés IV', url: 'ingles4' }
	]
}

const semestre5: Semestre = {
	url: '/semestres/5quinto',
	nombre: 'Quinto',
	numero: 5,
	materias: [
		{ nombre: 'Cálculo Integral', url: 'integral' },
		{ nombre: 'Física III', url: 'fisica3' },
		{ nombre: 'Química III', url: 'quimica3' },
		{ nombre: 'Inglés V', url: 'ingles5' }
	]
}

const semestre6: Semestre = {
	url: '/semestres/6sexto',
	nombre: 'Sexto',
	numero: 6,
	materias: [
		{ nombre: 'Probabilidad y Estadística', url: 'probabilidad' },
		{ nombre: 'Física IV', url: 'fisica4' },
		{ nombre: 'Química IV', url: 'quimica4' },
		{ nombre: 'Inglés VI', url: 'ingles6' }
	]
}

export const semestres = [semestre1, semestre2, semestre3, semestre4, semestre5, semestre6]
