import { useState } from "react";
import { fetchContentfulSpaceData } from "../../utils";
import { ListDataResponseProps, ListItem } from "../List";

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [data, setData] = useState<ListItem[]>([]);

  const search = async (query: string) => {
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

  return { isLoading, search, data, errorMsg, page, setPage };
};
