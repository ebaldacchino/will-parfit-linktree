import tw, { styled } from 'twin.macro';

export const Title = styled.h1`
	font-family: 'High Tide', sans-serif;
	text-shadow: 0 0 0.375rem rgba(255, 255, 255, 0.5);
	${tw`text-white text-5xl sm:text-6xl md:text-8xl mt-1 mb-2.5 text-center`}
`;

export const ImageContainer = styled.div`
	border-color: #653086;
	border-top-color: #b977c2;
	${tw`flex justify-center items-center rounded-full mt-6 mb-4 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 border-2 p-1.5`}
	& .gatsby-image-wrapper {
		${tw`w-full h-full overflow-hidden rounded-full`}
	}
`;

export const SectionContainer = tw.section`w-full flex flex-col items-center`;
