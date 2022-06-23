import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client'; //ReactDOM adaptação do react para web
import App from './App';
import { client } from './lib/apollo';

import './styles/global.css';

// getElementById('root') -> esta no index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
