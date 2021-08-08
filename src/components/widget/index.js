import React from 'react';
import {
	Image,
	Title,
	TitleContainer,
	WidgetContainerBorder,
	WidgetContainer,
	ImageContainer,
} from './styles';
const Widget = (props) => {
	const {
		titleLine1: line1,
		titleLine2: line2,
		url,
		widgetImage: { gatsbyImageData, title },
	} = props;
	return (
		<WidgetContainerBorder>
			<WidgetContainer href={url} rel='noopener' target='_blank'>
				<ImageContainer>
					<Image image={gatsbyImageData} alt={title} />
				</ImageContainer>
				<TitleContainer>
					<Title>{line1}</Title>
					{line2 && <Title gold>{line2}</Title>}
				</TitleContainer>
			</WidgetContainer>
		</WidgetContainerBorder>
	);
};

export default Widget;
