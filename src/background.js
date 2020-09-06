import { makeSprite, t } from '@replay/core';

export const Background = makeSprite({
	render({ device }) {
		const { size } = device;

		return [
			t.rectangle({
				color: '#add8e6',
				width: size.width + size.widthMargin * 2,
				height: size.height + size.heightMargin * 2,
			}),
		];
	},
});
