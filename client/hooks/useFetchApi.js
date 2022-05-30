/**
 * It takes a URL and options, and returns a response object
 * @param url - The URL to fetch.
 * @param [options] - The options object that will be passed to the fetch function.
 * @returns The return value of the useFetch hook.
 */
import {useFetch, useRuntimeConfig} from "nuxt/app";

export default function useFetchApi(url, options = {}) {
    const config = useRuntimeConfig();

    return useFetch(url, {
        ...options,
        baseURL: config.public.apiBase,
    })
}