import tw, { styled } from 'twin.macro';
import { DivWithGradientBorder } from '../../styles';

export const Title = styled.h1`
	font-family: 'High Tide', sans-serif;
	text-shadow: 0 0 0.375rem rgba(255, 255, 255, 0.5);
	${tw`text-white text-5xl sm:text-6xl md:text-8xl mb-6 sm:mb-8 text-center`}
`;

export const ImageContainer = styled(DivWithGradientBorder)`
	${tw`flex justify-center items-center rounded-full mt-6 mb-5 sm:mt-8 sm:mb-7 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 p-2 overflow-hidden`}
	&::before {
		${tw`rounded-full`}
	}
	& .gatsby-image-wrapper {
		${tw`w-full h-full rounded-full overflow-hidden`}
		& img {
			${tw`w-full h-full overflow-hidden rounded-full`}
		}
	}
`;

export const SectionContainer = tw.section`w-full flex flex-col items-center`;
