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
		site {
			siteMetadata {
				siteUrl
				title
			}
		}
	}
`;

const useQueries = () => {
	const {
		allContentfulWidget: { nodes: widgets },
		site: { siteMetadata },
	} = useStaticQuery(query);

	return { siteMetadata, widgets };
};

export default useQueries;
