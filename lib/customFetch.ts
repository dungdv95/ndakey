export function customFetch(input: any, options: any) {
  return fetch(input, {
    ...options,
    headers: {
      ...options?.headers,
    },
  });
}
