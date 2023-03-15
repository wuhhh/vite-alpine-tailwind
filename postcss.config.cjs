module.exports = {
  plugins: {
		'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
		'postcss-pxtorem': {
			propWhiteList: [
				"*",
				"!border", 
				"!border-width",
				"!border-top-width",
				"!border-right-width",
				"!border-bottom-width",
				"!border-left-width",
			],
      rootValue: 16,
      unitPrecision: 2,
		}
  },
}
