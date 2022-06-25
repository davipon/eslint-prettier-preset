export default definePreset({
	name: 'eslint-prettier-preset',
	options: {
		// ...
	},
	handler: async() => {
		await extractTemplates()
		// ...
	},
})
