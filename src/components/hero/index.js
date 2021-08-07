import React from 'react';
import { ImageContainer, SectionContainer, Title } from './styles';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
	return (
		<SectionContainer>
			<ImageContainer>
				<StaticImage
					src='../../images/hero-img.png'
					alt='Will Parfitt'
					placeholder='blurred'
					layout='fullWidth'
				/>
			</ImageContainer>
			<Title>Will Parfitt</Title>
		</SectionContainer>
	);
};

export default Hero;
