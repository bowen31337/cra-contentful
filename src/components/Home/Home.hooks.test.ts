import { renderHook } from "@testing-library/react-hooks";

import { useHome } from "./";

describe("Home Hooks", () => {
  describe("Fetch Home data", () => {
    describe("success", () => {
      beforeEach(() => {
        global.fetch = jest
          .fn()
          .mockResolvedValueOnce({ json: () => Promise.resolve(mockData) });
      });
      it("should get Home data", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useHome("queryString")
        );

        expect(result.current.isLoading).toBe(true);
        expect(result.current.errorMsg).toBe("");

        await waitForNextUpdate();

        expect(result.current.isLoading).toBe(false);
        expect(result.current.data).toEqual({ title: "JavaScript Fundamentals" });
      });
    });

    describe("failure", () => {
      it("should get error msg on non-20x response", async () => {
        global.fetch = jest
          .fn()
          .mockRejectedValueOnce(new Error("Server Error"));
        const { result, waitForNextUpdate } = renderHook(() =>
          useHome("queryString")
        );

        expect(result.current.isLoading).toBe(true);
        expect(result.current.errorMsg).toBe("");

        await waitForNextUpdate();

        expect(result.current.isLoading).toBe(false);
        expect(result.current.errorMsg).toBe("Server Error");
      });

      it("should get error msg with no result on 20x response", async () => {
        global.fetch = jest
          .fn()
          .mockResolvedValueOnce({
            json: () => Promise.resolve(mockEmptyData),
          });
        const { result, waitForNextUpdate } = renderHook(() =>
          useHome("queryString")
        );

        expect(result.current.isLoading).toBe(true);
        expect(result.current.errorMsg).toBe("");

        await waitForNextUpdate();

        expect(result.current.isLoading).toBe(false);
        expect(result.current.errorMsg).toBe("No data found");
      });
    });
  });
});

const mockData = {
  data: {
    javascriptTutorialCollection: {
      items: [
        {
          title: "JavaScript Fundamentals",
        },
      ],
    },
  },
};

const mockEmptyData = {
  data: {
    javascriptTutorialCollection: {
      items: [],
    },
  },
};
