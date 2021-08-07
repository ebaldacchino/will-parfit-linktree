import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Widget from '../components/widget';
import useQueries from '../functions/useQueries';
const Index = () => {
	const { logo, widgets } = useQueries();
	return (
		<Layout title='Will Parfitt'>
			<Hero logo={logo} />
			{widgets.map((widget) => {
				return <Widget key={widget.id} {...widget} />;
			})}
		</Layout>
	);
};

export default Index;
