import { useState, useEffect } from "react";
import { fetchContentfulSpaceData } from "../../utils";
import { ListDataResponseProps, ListItem } from "./";

export const useList = (query: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [data, setData] = useState<ListItem[]>([]);

  const fetchListData = async (query: string) => {
    setIsLoading(true);
    setErrorMsg("");
    setData([]);
    try {
      const res = await fetchContentfulSpaceData(query);

      const { data }: { data: ListDataResponseProps } = await res.json();
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
    fetchListData(query);
  }, [query]);

  return { isLoading, fetchListData, data, errorMsg };
};
