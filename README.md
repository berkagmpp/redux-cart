# redux-cart

<a href="#"><img width="10%" src="https://img.shields.io/badge/React-005FED?style=flat-square&logo=React&logoColor=white"/></a>

### What I Applied
- implement the side-effects logic and async tasks inside the action creators (App.js from cart-action.js)
- sending a HTTP request to back-end rest API using Firebase console(by Google, test mode realtime database, PUT)
- Fetch from the API from a backend app
- createSlice() from @reduxjs/toolkit (cart-slice.js, ui-slice.js)
- configureStore from @reduxjs/toolkit (store/index.js)
- useSelector() from react-redux (App.js, CartButton.js, Cart.js)
- useDispatch() from react-redux (App.js, ProductItem.js, CartItem.js, CartButton.js)
- useEffect() from react for dispatch (App.js)
- Reusable wrapper component(UI) (Card.js, Layout.js, Notification.js)
- Fragment from react (App.js, Layout.js)
- css-module

### Key Function
- When the user presses the 'Add to Cart' button, a top cart data status bar reacts immediately according to sending an HTTP request and response to the backend server, and the total number of items of the 'My Cart' button, which is located in the top-right is changed.
- When the user presses the 'My Cart' button, the shopping cart appears or disappears.
- When the user clicks each item's the increase(+) or decrease(-) functional button, changed data is directly sent to the backend, and the status bar reacts.
- If the user presses the decrease(-) button in the last one quantity, the item disappears.


### Preview
<a href="#"><img src="https://user-images.githubusercontent.com/84049077/170144848-627a90e1-7bcc-466a-ba33-cb3ec8fb89b5.gif"/></a>
