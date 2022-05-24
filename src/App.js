import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notificatioin';
import { sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        dispatch(sendCartData(cart));   // side effect logic inside the action creator from cart-slice for leaner App component

        // const sendCartData = async() => {   // side effect logic inside the App component
        //     dispatch(uiActions.showNotification({
        //         status: 'pending',
        //         title: 'sending',
        //         message:  'Sending cart data!'
        //     }));

        //     const response = await fetch(
        //         'https://react-book-cart-cc9ce-default-rtdb.firebaseio.com/cart.json', 
        //         {
        //             method: 'POST', 
        //             body: JSON.stringify(cart)
        //         }
        //     );

        //     if (!response.ok) {
        //         throw new Error('Sending cart data failed');
        //     }

        //     // const responseData = await response.json();  // dose not care in this case

        //     dispatch(uiActions.showNotification({
        //         status: 'success',
        //         title: 'success',
        //         message: 'Sent cart data successfully!'
        //     }));
        // };

        // if (isInitial) {
        //     isInitial = false;
        //     return;
        // }

        // sendCartData().catch(error =>{
        //     dispatch(uiActions.showNotification({
        //         status: 'error',
        //         title: 'error',
        //         message: 'Sending cart data failed'
        //     }));
        // });
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && <Notification status={notification.status} 
                                           title={notification.title} 
                                           message={notification.message} />}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
