import React from "react";
import { MuiThemeProvider,Tab, CssBaseline, Menu, Tabs, Link } from "@material-ui/core";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../themes/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Switch, withRouter } from 'react-router-dom';

import SearchBar from 'material-ui-search-bar'

            //value={this.state.value}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import "../Styles/styles.css"

const Header: React.FC = () => {  
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : darkTheme;

//<a href={../components/projectArtemis.tsx}></a>
  return (
    <MuiThemeProvider theme={theme}>

<div id="searchBar">
        <SearchBar
          
        /></div>  
    <span id="header">
        <Tab label="Home" />  
        <Tab label="Download" />
        <Tab label="Demo" />
        <Tab label="Contribute" />
        <Tab label="Media" value={<a href='https://medium.com/artemis-labs-open-source'></a>}/>
    </span>
    </MuiThemeProvider>
  );
};


export default Header;