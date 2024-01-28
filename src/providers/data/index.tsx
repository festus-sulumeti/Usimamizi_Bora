import { GraphQLClient } from "@refinedev/nestjs-query"

export const API_URL = "http://api.crm.refine.dev"

export const client = new GraphQLClient(API_URL, {
    fetch: (url: string, otions: RequestInit) => {
        try {
            return fetchWrapper(url, options);

        }  catch (error) {
            return Promise.reject(error)
        }
        
    }
})