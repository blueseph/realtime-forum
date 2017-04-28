import React from 'react';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { TextField, IconButton } from 'material-ui/';

const TextFieldStyle = {
  marginBottom:'15px',
}

const Search = () => (
  <div>
    <TextField
      style={TextFieldStyle}
      id="search-bar"
      hintText="Search" />

      <IconButton>
        <ActionSearch />
      </IconButton>
  </div>
)

export default Search;
