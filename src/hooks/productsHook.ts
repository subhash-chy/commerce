import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function useProduct(url: string) {
  const { data, error } = useSWR(`${url}`, fetcher, {
    revalidateOnReconnect: true,
    suspense: true,
  });

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useProduct;
