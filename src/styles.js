import tw, { styled } from 'twin.macro';

export const DivWithGradientBorder = styled.div`
	--border-width: 2px;

	background: linear-gradient(to top, #653086 80%, #b977c2);

	${tw`relative border-0 overflow-hidden transition duration-200 ease-in-out`}
	z-index: 1;

	&::before {
		content: '';

		${tw`absolute block`}
		top: var(--border-width);
		left: var(--border-width);
		right: var(--border-width);
		bottom: var(--border-width);

		/* width: calc(100% - var(--border-width) * 2);
		height: calc(100% - var(--border-width) * 2); */
		background: #10101c;
		z-index: -1;
	}
`;
