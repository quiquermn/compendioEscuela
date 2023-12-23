import { Marked, Renderer } from '@ts-stack/markdown'
import katex from 'katex'

function makeID(length: number) {
	let result = ''
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charactersLength = characters.length
	let counter = 0
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
		counter += 1
	}
	return result
}

class CustomRenderer extends Renderer {
	headings: { text: string; level: number }[] = []

	// Overriding parent method.
	override heading(text: string, level: number) {
		const id = `${text}_${makeID(5)}`
		this.headings.push({ text, level })
		return `<h${level} id="${id}">${text}</h${level}>`
	}

	// Overriding parent method to process inline LaTeX.
	override text(text: string) {
		const inlineMathPattern = /\$(.*?)\$/g
		let result = text
		let match
		while ((match = inlineMathPattern.exec(text)) !== null) {
			const latex = match[1]
			try {
				const html = katex.renderToString(latex)
				result = result.replace(`$${latex}$`, html)
			} catch (error) {
				console.error('Failed to render LaTeX:', error)
			}
		}
		return result
	}

	// Overriding parent method to process block LaTeX.
	override paragraph(text: string) {
		const blockMathPattern = /\$\$(.*?)\$\$/gs
		let result = text
		let match
		while ((match = blockMathPattern.exec(text)) !== null) {
			const latex = match[1]
			try {
				const html = katex.renderToString(latex, { displayMode: true })
				result = result.replace(`$${latex}$`, `<div>${html}</div>`)
			} catch (error) {
				console.error('Failed to render LaTeX:', error)
			}
		}
		return result
	}
}

const customRenderer = new CustomRenderer()

Marked.setOptions({ renderer: customRenderer })

export default function mdToSvelte() {
    return Marked.parse('$x^2$')
}
