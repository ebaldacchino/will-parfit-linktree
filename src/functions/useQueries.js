import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	{
		allContentfulWidget(sort: { order: ASC, fields: order }) {
			nodes {
				id
				titleLine1
				titleLine2
				url
				widgetImage {
					gatsbyImageData(placeholder: BLURRED)
					title
				}
			}
		}
		imageSharp(id: { eq: "431c325c-9efa-501e-862a-70f88210338d" }) {
			gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
		}
	}
`;

const useQueries = () => {
	const {
		allContentfulWidget: { nodes: widgets },
		imageSharp: { gatsbyImageData: logo },
	} = useStaticQuery(query);

	return { logo, widgets };
};

export default useQueries;
