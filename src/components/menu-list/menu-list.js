import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';

import './menu-list.scss';

class MenuList extends Component {

    render() {

        const {menuItems} = this.props;

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem menuItem={menuItem} key={menuItem.id}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        manuItems: state.menu
    }
}

export default connect(mapStateToProps)(MenuList);