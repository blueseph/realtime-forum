import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/'

import Search from '../search/search.component';

const LogoStyle = {
  marginLeft: '25px',
}

const Header = () => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <ToolbarTitle
        style={LogoStyle}
        text="Realtime Forum" />
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarSeparator />
      Topics
      <ToolbarSeparator />
      Users
      <ToolbarSeparator />
    </ToolbarGroup>
    <ToolbarGroup>
      <Search />
    </ToolbarGroup>
  </Toolbar>
);

export default Header;
