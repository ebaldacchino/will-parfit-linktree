import { GatsbyImage } from 'gatsby-plugin-image';
import tw, { css, styled } from 'twin.macro';

export const WidgetContainer = styled.a`
	border-color: #653086;
	border-top-color: #b977c2;
	max-width: 95%;
	&:hover {
		background-color: rgba(0, 0, 0, 0.28);
	}
	${tw`mb-2 p-0.5 mx-auto text-white rounded-lg border-2 flex w-64 sm:w-1/2 md:w-3/5 lg:w-1/2 2xl:w-1/3 transition-colors duration-200 ease-in-out`}
`;

export const Image = styled(GatsbyImage)`
	border-color: #653086;
	border-top-color: #b977c2;
	min-width: 4rem;
	${tw`h-16 w-16 sm:h-24 sm:w-24 rounded-lg border-2`}
`;

export const Title = styled.span`
	font-family: 'Josefin Sans', sans-serif;
	${tw`uppercase text-xs sm:text-sm`}
	${(props) =>
		props.gold &&
		css`
			color: #e2bb79;
		`}
`;
export const TitleContainer = styled.div`
	${tw`flex flex-col justify-center ml-5 pt-1.5`}
`;
