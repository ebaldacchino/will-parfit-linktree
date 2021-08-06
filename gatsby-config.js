require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const { CONTENTFUL_SPACE_ID: spaceId, CONTENTFUL_ACCESS_TOKEN: accessToken } =
	process.env;

console.log(spaceId, accessToken)

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: "Will Parfitt's LinkTree",
	},
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-fontawesome-css`,
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images/`,
			}, 
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`josefin sans`],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId,
				accessToken,
			},
		},
	],
};
