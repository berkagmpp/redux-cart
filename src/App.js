import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const sendCartData = async() => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'sending',
                message:  'Sending cart data!'
            }));

            const response = await fetch(
                'https://react-book-cart-cc9ce-default-rtdb.firebaseio.com/cart.json', 
                {
                    method: 'POST', 
                    body: JSON.stringify(cart)
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }

            // const responseData = await response.json();  // dose not care in this case

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'success',
                message: 'Sent cart data successfully!'
            }));
        };

        sendCartData().catch(error =>{
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error',
                message: 'Sending cart data failed'
            }));
        });

    }, [cart, dispatch]);

    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
