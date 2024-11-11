import { ORDER_BURGER } from "./BurgerTypes";

export function orderBurger(number=1){
    return{
        type:ORDER_BURGER,
        payload:number
    }
}