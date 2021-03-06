const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true,
                loading: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;

            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0) {
                const itemInState = state.items.find(item => item.id === id)
                const newItem = {
                    ...itemInState,
                    pcs: ++itemInState.pcs
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }

            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                url: item.url,
                price: item.price,
                id: item.id,
                pcs: 1
            }

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }
            
        case 'ITEM_REMOVE_FROM_LIST':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['pcs'];
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - price
            }
            
        case 'ITEM_REMOVE_FROM_CART':
            const indx = action.payload;
            const itemId = state.items.findIndex(item => item.id === indx);
            const prc = state.items[itemId]['price'];
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemId),
                    ...state.items.slice(itemId)
                ],
                totalPrice: state.totalPrice - prc
            }
        default:
            return state;
    }
}

export default reducer;