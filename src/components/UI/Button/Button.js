import React from 'react';
import './Button.css';
const button=(props)=>{
    let x='Button '+props.btnType;
    return(
    <button
    /*className="[Button,[props.btnType]].join(' ')"*/
    className={x}
    onClick={props.clicked}
    >{props.children}</button>
    );
};
export default button;