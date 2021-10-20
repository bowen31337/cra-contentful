import React from "react";
import { Container, Row, Col} from '../../utils/layout.styled'
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
    <Container>
				<Row>
					<Col>
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
        </Col>
        </Row>
    </Container>
    
  );
};

export default Filter;
