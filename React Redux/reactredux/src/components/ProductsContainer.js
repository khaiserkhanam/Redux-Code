import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { fetchProducts } from './redux';
import { useDispatch, useSelector } from 'react-redux';

function ProductsContainer() {
    const productsData=useSelector(state=>state.product);
    const dispatch=useDispatch();
    useEffect(()=>{
        // fetchProducts()
        dispatch(fetchProducts())
    },[])

    
  return (
    <div>
     {productsData.loading && <p>Loading....</p>}
     {productsData.error && <p>{productsData.error}</p>}
     {productsData.products && <p>{productsData.products.map(title=><p>{title}</p>)}</p>}
    </div>
  )
}
// const mapStateToProps=state=>{
//     return {
//         productsData:state.product
//     }
// }
// const mapDispatchToProps=dispatch=>{
//     return{
//         fetchProducts:()=>dispatch(fetchProducts())
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)
export default ProductsContainer;
