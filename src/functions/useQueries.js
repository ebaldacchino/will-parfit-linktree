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
	}
`;

const useQueries = () => {
	const {
		allContentfulWidget: { nodes: widgets },
	} = useStaticQuery(query);

	return { widgets };
};

export default useQueries;
