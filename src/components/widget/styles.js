import { GatsbyImage } from 'gatsby-plugin-image';
import tw, { css, styled } from 'twin.macro';
import { DivWithGradientBorder } from '../../styles';

export const WidgetContainerBorder = styled(DivWithGradientBorder)`
	max-width: 95%;
	padding: 2px;
	${tw`mx-auto rounded-lg mb-2 w-64 sm:w-1/2 md:w-3/5 lg:w-1/2 2xl:w-1/3 overflow-hidden`}
	&::before {
		border-radius: calc(0.5rem - 2px);
	}
`;

export const WidgetContainer = styled.a`
	&:hover {
		background-color: rgba(0, 0, 0, 0.28);
	}
	${tw`p-1 text-white flex transition-colors duration-200 ease-in-out rounded-lg`}
`;

export const ImageContainer = styled(DivWithGradientBorder)`
	min-width: 4rem;
	padding: 2px;
	&::before {
		border-radius: calc(0.375rem - 2px);
	}
	${tw`h-16 w-16 sm:h-24 sm:w-24 rounded-md overflow-hidden`}
`;

export const Image = styled(GatsbyImage)`
	border-radius: calc(0.375rem - 2px);
	${tw`h-full w-full overflow-hidden`}
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
