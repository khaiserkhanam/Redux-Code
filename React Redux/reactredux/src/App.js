import './App.css';
import {Provider} from 'react-redux';
// import PizzaBox from './components/PizzaBox';
// import store from './components/redux/store';
// import BurgerBox from './components/BurgerBox';
// import CustomerChoice from './components/CustomerChoice';
// import HookContainer from './components/HooksContainer';
import ProductsContainer from './components/ProductsContainer';

function App() {
  return (
  <Provider store={store}>
  {/* <PizzaBox/> */}
  {/* <BurgerBox/> */}
  {/* <HookContainer/> */}
   {/* <CustomerChoice/> */}
   <ProductsContainer/>
   </Provider>
  );
}

export default App;
