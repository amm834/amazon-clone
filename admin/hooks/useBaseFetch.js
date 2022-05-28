/**
 * It's a wrapper around the `$fetch` function that allows you to pass in a URL and options object
 * @param url {string} - The url to fetch
 * @param [options] - {
 * @example <caption> Example of useBaseFetch() in Nuxt app </caption>
 * // returns response
 * const response = await $fetch('/api/products', {
 *       method: 'POST',
 *       body: data,
 *     })
 * @returns {Function} A function that takes two arguments, url and options.
 */
import {useRuntimeConfig} from "nuxt/app";

export default function useBaseFetch(url, options = {}) {
    const config = useRuntimeConfig()

    return $fetch(`${config.public.apiBase}${url}`, options)
}