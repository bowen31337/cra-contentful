import React, { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconStyled, InputBaseStyled, SearchFormStyled } from ".";
import SearchList from "./SearchBar.results";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string | undefined>(undefined);

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current && setQuery(inputRef.current?.value);
  };

  console.log(query);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <SearchFormStyled onSubmit={submitHandler}>
              <SearchIconStyled type="submit">
                <SearchIcon />
              </SearchIconStyled>
              <InputBaseStyled>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  inputRef={inputRef}
                />
              </InputBaseStyled>
            </SearchFormStyled>
          </Toolbar>
        </AppBar>
      </Box>
      {query && <SearchList query={query} />}
    </>
  );
};
export default SearchBar;
