import { styled } from 'twin.macro';

export const DivWithGradientBorder = styled.div`
	--border-width: 2px;
	--border-radius: 0.75rem;

	background: linear-gradient(to top, #653086 85%, #b977c2);

    background: pink;

	position: relative;

	border-style: none;
	border-radius: var(--border-radius);

	z-index: 1;

	&::before {
		content: '';

		top: var(--border-width);
		left: var(--border-width);

		position: absolute;

		display: block;

		width: calc(100% - var(--border-width) * 2);
		height: calc(100% - var(--border-width) * 2);
		background: #10101c;

		border-radius: calc(var(--border-radius) - var(--border-width));
		z-index: -1;
	}
`;
