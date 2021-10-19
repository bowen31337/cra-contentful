import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useFilter, FilterStyled } from ".";
import { List } from "../List";
import { uniqBy } from "../../utils";

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const filterQuery = `
  {
      dataset2Collection{
          items{
          type
          }
      }
  }`;

const Filter = () => {
  const [value, setValue] = React.useState(0);

  const { isLoading, errorMsg, data } = useFilter(filterQuery);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
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

  const categories = uniqBy(data, (item) => item.type);

  return (
    <FilterStyled>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable filter tabs"
          centered
        >
          {categories.map(({ type, id }) => (
            <Tab label={type} key={id} />
          ))}
        </Tabs>

        {categories.map(({ type, id }, index) => (
          <TabPanel value={value} index={index} key={id}>
            <List type={type} />
          </TabPanel>
        ))}
      </Box>
    </FilterStyled>
  );
};

export default Filter;
