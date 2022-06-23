import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qao4hx3fkg01xn7w0n83gk/master',
	cache: new InMemoryCache(),
});
