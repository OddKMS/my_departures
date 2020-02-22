/**
 * Defines which npm dependencies to exclude from the build.
 */

module.exports = {
	webpack(config, env) {
		config.optimization.runtimeChunk = false;
		config.optimization.splitChunks = {
			cacheGroups: {
				default: false,
			},
		};
		return config;
	},
	jest(config) {
		config.transform = {
			'^.+\\.[t|j]sx?$': 'babel-jest',
			'.+\\\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
				'jest-transform-stub',
		};
		config.transformIgnorePatterns = [
			'node_modules/core-js/',
			'node_modules/(?!(@my_departures))/',
		];
		config.moduleNameMapper = {
			'^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
				'jest-transform-stub',
		};
		return config;
	},
};
