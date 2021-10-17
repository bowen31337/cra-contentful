import { useEffect, useState } from "react";
import { fetchContentfulSpaceData } from "../../utils";
import { PageItem, HomeDataResponseProps } from "./";

export const useHome = (query: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [data, setData] = useState<PageItem>({});

  const fetchHomeData = async (query: string) => {
    setIsLoading(true);
    setErrorMsg("");
    setData({});
    try {
      const res = await fetchContentfulSpaceData(query);

      const { data }: { data: HomeDataResponseProps } = await res.json();
      const {
        javascriptTutorialCollection: { items },
      } = data;
      if (items?.length > 0) {
        setData(items[0]);
      } else {
        throw new Error("No data found");
      }
    } catch (e: unknown) {
      setErrorMsg((e as Error)?.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchHomeData(query);
  }, [query]);

  return { isLoading, fetchHomeData, data, errorMsg };
};
