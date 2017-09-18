import React, {Component} from 'react';
import {Input, Menu} from 'semantic-ui-react';
import Home from './Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Header extends Component {

    render() {

        return (
            <div>
                <Menu secondary>
                    <Menu.Item as={Link} to='/'>
                        Home
                    </Menu.Item>
                    <Menu.Item as={Link} to='/about'>
                        About
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;