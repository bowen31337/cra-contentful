export const fetchContentfulSpaceData = (query: string) =>
  fetch(
    `${process.env.REACT_APP_CONTENTFUL_API_URL}content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_API_SPACE_ID}`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );
