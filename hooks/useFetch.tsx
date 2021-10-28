import { useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startFetch = (init?: RequestInit) => {
    const f = async () => {
      try {
        const _res = await fetch(url, init);
        const _data = await _res.json();
        setData(_data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    setIsLoading(true);
    f();
  };

  return {
    data,
    isLoading,
    startFetch,
  };
};
