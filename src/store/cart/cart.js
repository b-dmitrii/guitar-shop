const initialState = {
  guitars: [],
  cartItems: [],
  isModalOpen: false,
  isAlternateModalOpen: false,
  itemId: ``,
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (guitar, item = {}, quantity) => {
  const {
    id = guitar.id,
    name = guitar.name,
    type = guitar.type.value,
    count = 0,
    price = guitar.price,
    total = 0,
    countString = guitar.countString,
    setNumber = guitar.setNumber,
    image = guitar.type.image,
  } = item;

  return {
    id,
    name,
    type,
    price,
    countString,
    setNumber,
    image,
    count: count + quantity,
    total: total + quantity * guitar.price,
  };
};

const updateOrder = (state, guitarId, quantity) => {
  const {guitars, cartItems} = state;

  const guitar = guitars.find(({id}) => id === guitarId);
  const itemIndex = cartItems.findIndex(({id}) => id === guitarId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(guitar, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    isModalOpen: false,
    isAlternateModalOpen: true,
  };
};

export const ActionType = {
  SET_GUITARS: `guitars/SET_GUITARS`,
  GUITAR_ADDED_TO_CART: `cart/GUITAR_ADDED_TO_CART`,
  GUITAR_REMOVE_TO_CART: `cart/GUITAR_REMOVE_TO_CART`,
  ALL_GUITARS_REMOVED_FROM_CART: `cart/ALL_GUITARS_REMOVED_FROM_CART`,
  IS_MODAL_OPEN: `modal/IS_MODAL_OPEN`,
  IS_MODAL_CLOSE: `modal/IS_MODAL_CLOSE`,
  IS_ALTERNATE_MODAL_CLOSE: `modal/IS_ALTERNATE_MODAL_CLOSE`,
  IS_ALTERNATE_MODAL_OPEN: `modal/IS_ALTERNATE_MODAL_OPEN`,
};

export const ActionCreator = {
  setGuitars: (guitar) => ({
    type: ActionType.SET_GUITARS,
    payload: guitar,
  }),

  guitarAddedToCart: (id) => ({
    type: ActionType.GUITAR_ADDED_TO_CART,
    payload: id,
  }),

  guitarRemoveToCard: (id) => ({
    type: ActionType.GUITAR_REMOVE_TO_CART,
    payload: id,
  }),

  allGuitarsRemoveToCard: (id) => ({
    type: ActionType.ALL_GUITARS_REMOVED_FROM_CART,
    payload: id,
  }),

  isModalOpen: (id) => ({
    type: ActionType.IS_MODAL_OPEN,
    payload: id,
  }),

  isModalClose: () => ({
    type: ActionType.IS_MODAL_CLOSE,
  }),

  isAlternateModalClose: () => ({
    type: ActionType.IS_ALTERNATE_MODAL_CLOSE,
  }),

  isAlternateModalOpen: () => ({
    type: ActionType.IS_ALTERNATE_MODAL_OPEN,
  }),
};

export const Operation = {
  loadGuitars: (data) => (dispatch) => {
    dispatch(ActionCreator.setGuitars(data));
  },

  guitarAddedToCart: (id) => (dispatch) => {
    dispatch(ActionCreator.guitarAddedToCart(id));
  },

  guitarRemoveToCard: (id) => (dispatch) => {
    dispatch(ActionCreator.guitarRemoveToCard(id));
  },

  allGuitarsRemoveToCard: (id) => (dispatch) => {
    dispatch(ActionCreator.allGuitarsRemoveToCard(id));
  },

  isModalOpen: (id) => (dispatch) => {
    dispatch(ActionCreator.isModalOpen(id));
  },

  isModalClose: () => (dispatch) => {
    dispatch(ActionCreator.isModalClose());
  },

  isAlternateModalOpen: () => (dispatch) => {
    dispatch(ActionCreator.isAlternateModalOpen());
  },

  isAlternateModalClose: () => (dispatch) => {
    dispatch(ActionCreator.isAlternateModalClose());
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GUITARS:
      return {
        ...state,
        guitars: action.payload,
      };

    case ActionType.GUITAR_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case ActionType.GUITAR_REMOVE_TO_CART:
      return updateOrder(state, action.payload, -1);

    case ActionType.ALL_GUITARS_REMOVED_FROM_CART:
      const item = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case ActionType.IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        itemId: action.payload,
      };
    case ActionType.IS_MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
      };

    case ActionType.IS_ALTERNATE_MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
        isAlternateModalOpen: false,
      };

    default:
      return state;
  }
};
