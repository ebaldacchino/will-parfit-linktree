import React from 'react';
import { Image, ImageContainer, SectionContainer, Title } from './styles'; 
import { getImage } from 'gatsby-plugin-image';
 
const Hero = ({ logo }) => {
	const image = getImage(logo);
	return (
		<SectionContainer>
			<ImageContainer>
				<Image image={image} alt="Will Parfitt" />
			</ImageContainer>
			<Title>Will Parfitt</Title>
		</SectionContainer>
	);
};

export default Hero;
