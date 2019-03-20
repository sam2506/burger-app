import React,{Component} from 'react';
import Aux from '../../../hoc/Aux/aux';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
    componentWillUpdate(){
        console.log("[OrderSummary] WillUpdate");
    }
    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igkey=>{
            return (
            <li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
            </li> );
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}
export default OrderSummary;