import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	// são variáveis ambientes para mais segurança, por isso, não constam no git pois foram colocadas no gitignore. porém elas constam em um arquivo .env.local e as variaveis devem começar com VITE_blablabla - quando o projeto for com o vite e devem ser importadas dessa maneira também
	uri: import.meta.env.VITE_API_URI,
	headers: {
		'Authorization': `Bearer ${import.meta.env.VITE_API_ACCES_TOKEN}`
	},
	cache: new InMemoryCache(),
});
