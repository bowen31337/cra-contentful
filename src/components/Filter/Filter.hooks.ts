import { useState, useEffect } from "react";
import { fetchContentfulSpaceData } from "../../utils";
import { FilterResponseProps, FilterType } from "./";

export const useFilter = (query: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [data, setData] = useState<FilterType[]>([]);

  const fetchFilterData = async (query: string) => {
    setIsLoading(true);
    setErrorMsg("");
    setData([]);
    try {
      const res = await fetchContentfulSpaceData(query);

      const { data }: { data: FilterResponseProps } = await res.json();
      const {
        dataset2Collection: { items },
      } = data;
      setData(items);
    } catch (e: unknown) {
      setErrorMsg((e as Error)?.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchFilterData(query);
  }, [query]);

  return { isLoading, fetchFilterData, data, errorMsg };
};
