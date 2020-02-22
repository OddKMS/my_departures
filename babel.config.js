// Tries to fix https://github.com/formatjs/react-intl/issues/1511
// https://github.com/kentcdodds/babel-plugin-macros/issues/131
// 17/01/20: does not fix the issue
module.exports = {
	presets: ['@babel/preset-env'],
	plugins: ['@babel/plugin-proposal-optional-chaining'],
	env: {
		test: {
			plugins: [
				'@babel/plugin-transform-runtime',
				'@babel/plugin-proposal-class-properties',
			],
			presets: [
				[
					'@babel/env',
					{
						useBuiltIns: 'usage',
						corejs: 3,
					},
				],
			],
		},
	},
};
