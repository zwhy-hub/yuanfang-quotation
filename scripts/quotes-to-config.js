import fs from 'fs'
import path from 'path'

const QUOTES_FILE = path.resolve('quotes.md')
const OUTPUT_FILE = path.resolve('src/config.ts')

const normalizeTime = (raw) => {
	if (!raw) return ''

	return raw
}

const content = fs.readFileSync(QUOTES_FILE, 'utf-8')

const config = content
	.split('\n')
	.filter((line) => !line.startsWith('#'))
	.map((line) => line.trim())
	.filter(Boolean)
	.map((line) => {
		const clean = line.replace(/^-\s*/, '')

		const match = clean.match(/^(.*?)(?:\s*@(.+))?$/)

		return {
			body: match?.[1] ?? '',
			time: normalizeTime(match?.[2]),
		}
	})

const output = `// ⚠️ AUTO-GENERATED FILE
// Do NOT edit manually.
// Edit quotes.md instead.

export const config = ${JSON.stringify(config, null, 2)}
`

fs.writeFileSync(OUTPUT_FILE, output)
