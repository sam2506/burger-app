import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css'
import {withRouter} from 'react-router-dom';

const burger=(props) =>{
    let transformedIngredient=Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient key={igkey+i} type={igkey}/>;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngredient.length===0){
        transformedIngredient=<p>Please Start Adding Ingredients</p>
    }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default withRouter(burger);