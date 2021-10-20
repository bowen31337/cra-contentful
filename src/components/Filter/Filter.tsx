import React from "react";
import { useFilter, FilterStyled } from ".";
import { List } from "../List";
import { uniqBy } from "../../utils";

const filterQuery = `
  {
    propertyCollection {
          items{
            category,
            id
          }
      }
  }`;

const Filter = () => {
  const [value, setValue] = React.useState<string>("");

  const { isLoading, errorMsg, data } = useFilter(filterQuery);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target?.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMsg !== "") {
    return <p>{errorMsg}</p>;
  }

  if (data.length === 0) {
    return <h1>No Data Found.</h1>;
  }

  const categories = uniqBy(data, (item) => item.category);
  return (
    <FilterStyled>
      <select onChange={handleChange} value={value}>
        <option value="">All categories</option>

        {categories.map(({ category, id }) => (
          <option key={id} value={category}>
            {category}
          </option>
        ))}
      </select>

      <List category={value} />
    </FilterStyled>
  );
};

export default Filter;
