import { marked, Renderer } from 'marked'
import katex from 'katex'
//import 'katex/contrib/mhchem'
import markedLinkifyIt from 'marked-linkify-it'
import { parseHTML } from 'linkedom'
import type { Headings } from './drawers'

function makeID(text: string) {
	const result = text.replace(/ /g, '-').toLowerCase()
	return result
}

function decodeHtmlEntities(encodedString: string): string {
	return decodeURIComponent(
		encodedString.replace(/&#(\d+);/g, function (match, dec) {
			return String.fromCharCode(dec)
		})
	)
}

class CustomRenderer extends Renderer {
	// Overriding parent method.
	override heading(text: string, level: number) {
		const id = makeID(text)
		return `<h${level} id="${id}">${text}</h${level}>`
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
		const listClass = ordered ? 'list' : 'list-disc list-inside'

		return `<${tag} start="${start}" class="${listClass}"> ${body} </${tag}>`
	}

	override listitem(text: string, task: boolean, checked: boolean): string {
		const check = `<input disabled type="checkbox" ${
			checked && 'checked'
		} class="mr-2 checkbox cursor-default">`

		return `<li${task ? ' class="list-none flex items-center"' : ''}>
		${task ? check : ''}<span>${text}</span></li>`
	}

	override checkbox(): string {
		return ''
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
			const decoded = decodeHtmlEntities(latex)
			try {
				const html = katex.renderToString(decoded, { throwOnError: false })
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
			const decoded = decodeHtmlEntities(latex)

			try {
				const html = katex.renderToString(decoded, { displayMode: true, throwOnError: false })
				result = result.replace(`$$${latex}$$`, `<div>${html}</div>`)
			} catch (error) {
				console.error('Failed to render LaTeX:', error)
			}
		}
		// wrap in paragraph tag
		result = `<p>${result}</p>`

		return result
	}
}
const customRenderer = new CustomRenderer()

marked.setOptions({ renderer: customRenderer })
marked.use(markedLinkifyIt())

export async function mdToSvelte(md: string) {
	const tokens = marked.lexer(md)
	const headings: Headings[] = []

	tokens.map((token) => {
		if (token.type === 'heading') {
			headings.push({
				depth: token.depth,
				text: token.text,
				id: makeID(token.text)
			})
		}
	})
	const html = marked.parser(tokens)

	const { document } = parseHTML(html)

	const orderedLists = document.querySelectorAll('ol')

	orderedLists.forEach((list) => {
		const items = list.querySelectorAll('li')
		const start = list.getAttribute('start')

		items.forEach((item, index) => {
			const text = item.innerText.trim()
			item.innerHTML = ''

			const number = document.createElement('span')
			number.setAttribute('class', 'font-bold badge variant-filled')
			number.textContent = `${Number(start) + index}`
			item.appendChild(number)

			const span = document.createElement('span')
			span.textContent = text
			span.setAttribute('class', 'flex-auto')
			item.appendChild(span)
		})
	})

	return { html: document.toString(), headings }
}
