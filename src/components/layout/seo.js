import React from 'react';
import { Helmet } from 'react-helmet';
import useQueries from '../../functions/useQueries';
import { useLocation } from '@reach/router';

const Seo = ({ pageTitle }) => {
	const { siteMetadata } = useQueries();
	const { pathname } = useLocation();
	const { title, siteUrl } = siteMetadata;
	const seo = {
		title: pageTitle
			? `${pageTitle} | ${title}`
			: `${title} | Awarded Best Male Strippers ${new Date().getFullYear()}`,
		url: `${siteUrl}${pathname}`,
	};
	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={seo.title}>
			<meta property='og:url' content={seo.url} />
			{/* <meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<meta name='author' content={author} />
			<meta property='og:title' content={siteTitle} />
			<meta
				property='og:description'
				content={description || siteDescription}
			/>
			<meta property='og:image' content={seo.image} />
			<meta property='og:url' content={seo.url} />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content={seo.title} />
			<meta name='twitter:image:alt' content={`${siteTitle} Banner`} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content={twitterUsername} />
			<meta name='twitter:title' content={seo.title} />
			<meta name='twitter:description' content={seo.description} />
			<meta name='twitter:image' content={seo.image} /> */}
		</Helmet>
	);
};

export default Seo;
