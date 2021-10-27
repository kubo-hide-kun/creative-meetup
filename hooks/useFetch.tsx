import { useState } from "react";

export const useFetch = (url: string) => {
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startFetch = (init?: RequestInit) => {
    const f = async () => {
      try {
        console.log(url, init);
        const response = await fetch(url, init);
        const data = await response.json();
        setResult(data);
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
    result,
    isLoading,
    startFetch,
  };
};
