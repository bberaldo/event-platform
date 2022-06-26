import React from 'react';
import ReactDOM from 'react-dom/client'; //ReactDOM adaptação do react para web
import App from './App';

import './styles/global.css';

// getElementById('root') -> esta no index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		
		<App />
		
	</React.StrictMode>
);
