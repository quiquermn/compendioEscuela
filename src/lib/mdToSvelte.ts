import { marked, Renderer } from 'marked'
import katex from 'katex'
import markedLinkifyIt from 'marked-linkify-it'

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
	currentListType = ''

	// Overriding parent method.
	override heading(text: string, level: number) {
		const id = `${text}_${makeID(5)}`
		this.headings.push({ text, level })
		return `<h${level} id="${id}" class="h${level}">${text}</h${level}>`
	}

	override blockquote(quote: string) {
		return `<blockquote class="blockquote">${quote}</blockquote>`
	}
	override codespan(text: string): string {
		return `<code class="code">${text}</code>`
	}
	override link(href: string, title: string | null | undefined, text: string): string {
		return `<a class="anchor" href="${href}" ${title && 'title="' + title + '"'}>${text}</a>`
	}

	override list(body: string, ordered: boolean, start: number | ''): string {
		const tag = ordered ? 'ol' : 'ul'
		const listClass = ordered ? 'list-decimal list-inside' : 'list-disc list-inside'

		return `<${tag} start="${start}" class="${listClass}"> ${body} </${tag}>`
	}

	override table(header: string, body: string): string {
		return `<div class="table-container"><table class="table table-hover"><thead>${header}</thead><tbody>${body}</tbody></table></div>`
	}

	// Overriding parent method to process inline LaTeX.
	override text(text: string) {
		const inlineMathPattern = /(?<!\$)\$(.*?)(?<!\$)\$/g
		// ignore escape characters in text
		let result = text
		let match

		while ((match = inlineMathPattern.exec(text)) !== null) {
			const latex = match[1]
			try {
				const html = katex.renderToString(latex, { throwOnError: false })
				result = result.replace(`$${latex}$`, html)
			} catch (error) {
				console.error('Failed to render LaTeX:', error)
			}
		}

		return result
	}

	// Overriding parent method to process block LaTeX.
	override paragraph(text: string) {
		const blockMathPattern = /\$\$([\s\S]*?)\$\$/gs
		let result = text
		let match
		while ((match = blockMathPattern.exec(text)) !== null) {
			const latex = match[1]
			try {
				const html = katex.renderToString(latex, { displayMode: true, throwOnError: false })
				result = result.replace(`$$${latex}$$`, `<div>${html}</div>`)
			} catch (error) {
				console.error('Failed to render LaTeX:', error)
			}
		}
		// wrap in paragraph tag
		result = `<p class="paragraph">${result}</p>`

		return result
	}
}
const customRenderer = new CustomRenderer()

marked.setOptions({ renderer: customRenderer })
marked.use(markedLinkifyIt())

export function mdToSvelte(md: string) {
	const tokens = marked.lexer(md)
	const html = marked.parser(tokens)
	console.log(html)
	return html
}
