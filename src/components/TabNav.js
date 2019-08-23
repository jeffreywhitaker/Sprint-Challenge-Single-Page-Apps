import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const panes = [
    { 
        menuItem: 'Home', 
        render: () => <></> 
    },
    { 
        menuItem: 'Characters', 
        render: () => <></>  
    },
    { 
        menuItem: 'Location', 
        render: () => <></>  
    },
    { 
        menuItem: 'Episodes', 
        render: () => <></>  
    },
  ]

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
        <Menu>
            <Menu.Item as={NavLink} to="/" exact>
                Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/character">
                Character
            </Menu.Item>
            <Menu.Item as={NavLink} to="/location">
                Location
            </Menu.Item>
            <Menu.Item as={NavLink} to="/episode">
                Episode
            </Menu.Item>
        </Menu>
    )
};

