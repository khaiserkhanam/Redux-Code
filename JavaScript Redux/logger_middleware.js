const redux=require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const reduxLogger=require('redux-logger');
const logger=reduxLogger.createLogger();
const applyMiddleware=redux.applyMiddleware;
const ORDER_PIZZA='ORDER_PIZZA';
const ORDER_BURGER='ORDER_BURGER';


function orderPizza(){
    return {
        type:ORDER_PIZZA,
    }    
}
function orderBurger(){
    return {
        type: ORDER_BURGER
    }
}
const initialStateForPizza={
    pizzaBase:100
}
const initialStateForBurger={
    burgerBuns:200
}
const reducerPizza=(state=initialStateForPizza,action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state,
                pizzaBase:state.pizzaBase-1
            }
        default:
            return state;
    }
}

const reducerBurger=(state=initialStateForBurger,action)=>{
    switch(action.type){
        case ORDER_BURGER:
            return{
                ...state,
                burgerBuns:state.burgerBuns-1
            }
        default:
            return state;
    }
}
const rootReducer=combineReducers({
    pizza:reducerPizza,
    burger:reducerBurger
});
const store=createStore(rootReducer,applyMiddleware(logger));
// console.log('Initial State',store.getState());
const unsubscribe=store.subscribe(()=>{})
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
unsubscribe();

