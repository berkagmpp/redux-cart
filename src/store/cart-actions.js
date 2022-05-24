import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-book-cart-cc9ce-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Fetching cart data failed');
            }

            const responseData = await response.json();
            
            return responseData;
        };
        
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));    // pass cartData as a payload to replaceCart() of cartActions

        } catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error',
                message: 'Fetching cart data failed'
            }));
        }
    };
};

export const sendCartData = cart => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-book-cart-cc9ce-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'success',
                message: 'Sent cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error',
                message: 'Sending cart data failed'
            }));
        }
    };
};