// defined in webpack
/* global ASSET_NAMES */

import { makeSprite, t } from '@replay/core';
import { Level } from './level';
import { Menu } from './menu';

export const options = {
	assets: ASSET_NAMES,
	dimensions: 'scale-up',
	assets: {
		imageFileNames: ['bird.png'],
	},
};

export const Game = makeSprite({
	init() {
		return { view: 'menu', attempt: 0 };
	},

	render({ state, updateState }) {
		const inMenuScreen = state.view === 'menu';

		return [
			Level({
				id: `level-${state.attempt}`,
				paused: inMenuScreen,
				gameOver: () => {
					updateState((prevState) => {
						return {
							...prevState,
							view: 'menu',
						};
					});
				},
			}),
			inMenuScreen
				? Menu({
						id: 'menu',
						start: () => {
							updateState((prevState) => {
								return {
									...prevState,
									view: 'level',
									attempt: prevState.attempt + 1,
								};
							});
						},
				  })
				: null,
		];
	},
});

export const gameProps = {
	id: 'Game',
	size: {
		width: 400,
		height: 600,
		maxHeightMargin: 150,
	},
	defaultFont: {
		name: 'Helvetica',
		size: 24,
	},
};
