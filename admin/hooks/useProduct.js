import {useFetch} from "nuxt/app";

export default async function useProduct() {
    const {data} = await useFetch('http://localhost:3000/api/products')

    return {
        data,
    }
}