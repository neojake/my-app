import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
                    <Menu.Item as={Link} to='/cart'>
                        Cart
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;