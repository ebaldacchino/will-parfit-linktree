import React from 'react';
import { Image, Title, TitleContainer, WidgetContainer } from './styles';
const Widget = (props) => { 
	const { titleLine1: line1, titleLine2: line2, url, widgetImage: {gatsbyImageData, title} } = props;
	return (
		<WidgetContainer href={url} rel='noopener' target='_blank'>
			<Image image={gatsbyImageData} alt={title} />
			<TitleContainer>
				<Title>{line1}</Title>
				{line2 && <Title gold>{line2}</Title>}
			</TitleContainer>
		</WidgetContainer>
	);
};

export default Widget;
