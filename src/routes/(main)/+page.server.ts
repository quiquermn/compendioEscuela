import { mdToSvelte } from '$lib/mdToSvelte'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	const md = String.raw`# Entra al editor por favor

[editor](/editor)

## Introducción
Hola ¿qué tal?. Hace un tiempo, junto a un amigo, decidímos crear este sitio, para compartir algunos recursos y materiales para facilitar su consulta y uso.

En estos espacios podrás encontrar apuntes, resúmenes, exámenes y otros materiales que hemos recopilado durante nuestra estancia en la escuela, además de materiales donados por compañeros y excompañeros. Estos recursos nos han ayudado a comprender mejor algunos temas, y esperamos que también puedan ser útiles para ustedes.

Apreciaríamos mucho cualquier aporte de material o sugerencia.

## ¿Cómo navegar dentro de la página?
El compendio está hecho para que se pueda navegar en cualquier dispositivo, ya sea móvil, computadora o laptop. Ésta navegación en ambos tipos de dispositivos es bastante sencilla de reconocer y utilizar. A continuación se mostrará el manejo de la página para ambos dispositivos.

En teléfonos celulares se encuentra un menú desplegable en la parte superior derecha que, al hacer clic, se mostrarán los seis semestres y al hacer clic en cada semestre saldrán sus respectivas unidades de aprendizaje. Por otro lado, en las computadoras y laptops la forma de navegación es más sencilla de ver, ya que los semestres se encuentran en la parte superior de la página y al pasar el cursor sobre ellos, se mostrarán cada una de las unidades con su respectivo semestre.

No olvides contactar a alguno de los creadores del sitio si encuentras algún tipo de error al navegar dentro del compendio.

## En desarrollo
Podrás consultar de este contenido más tarde...

## En desarrollo
Podrás consultar de este contenido más tarde...

## En desarrollo
Podrás consultar de este contenido más tarde...

## En desarrollo
Podrás consultar de este contenido más tarde...

## Dato curioso
Pasa tu cursor y da clic a los gatos que veas. 😺
`

	const html = await mdToSvelte(md)
	return {
		html
	}
}) satisfies PageServerLoad
