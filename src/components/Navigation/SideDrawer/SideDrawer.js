import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from'../../../hoc/Aux/aux';

const sideDrawer = (props)=> {
    let x='SideDrawer'+' Close';
    if(props.open){
        x='SideDrawer'+' Open';
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={x}>
                <Logo/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
        
    );
};
export default sideDrawer;