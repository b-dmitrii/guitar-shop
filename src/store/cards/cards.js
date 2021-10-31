const initialState = {
  guitars: [],
  cartItems: [],
  firstPrice: "",
  lastPrice: "",
  inputTypeValue: "",
  inputStringValue: "",
  isCheckedButtonShow: false,
  isInputChecked: false,
  isInputStringChecked: false,
  isModalOpen: false,
  isAlternateModalOpen: false,

  itemId: "",
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
  const { guitars, cartItems } = state;

  const guitar = guitars.find(({ id }) => id === guitarId);
  const itemIndex = cartItems.findIndex(({ id }) => id === guitarId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(guitar, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    isModalOpen: false,
    isAlternateModalOpen: true
  };
};


export const ActionType = {
  SET_GUITARS: `SET_GUITARS`,
  SET_FILTER_GUITARS: `SET_FILTER_GUITARS`,
  SET_GUITARS_LOADIND: `SET_GUITARS_LOADIND`,
  SORT_BY_PRICE: `SORT_BY_PRICE`,
  GUITAR_ADDED_TO_CART: `GUITAR_ADDED_TO_CART`,
  GUITAR_REMOVE_TO_CART: `GUITAR_REMOVE_TO_CART`,
  ALL_GUITARS_REMOVED_FROM_CART: `ALL_GUITARS_REMOVED_FROM_CART`,
  SORT_BY_POPULARITY: `SORT_BY_POPULARITY`,
  // SET_FILTER_GUITARS: `SET_FILTER_GUITARS`,
  CHANGE_FIRST_PRICE: `CHANGE_FIRST_PRICE`,
  CHANGE_LAST_PRICE: `CHANGE_LAST_PRICE`,
  CHANGE_INPUT_TYPE_VALUE: `CHANGE_INPUT_TYPE_VALUE`,
  CHANGE_INPUT_STRING_VALUE: `CHANGE_INPUT_STRING_VALUE`,
  IS_CHECKED_BUTTON: `IS_CHECKED_BUTTON`,
  IS_MODAL_OPEN: `IS_MODAL_OPEN`,
  IS_MODAL_CLOSE: `IS_MODAL_CLOSE`,
  IS_ALTERNATE_MODAL_CLOSE: `IS_ALTERNATE_MODAL_CLOSE`,
  IS_ALTERNATE_MODAL_OPEN: `IS_ALTERNATE_MODAL_OPEN`
};

export const ActionCreator = {
  setGuitars: (guitar) => ({
    type: ActionType.SET_GUITARS,
    payload: guitar,
  }),

  setFilterGuitars: (guitar) => ({
    type: ActionType.SET_FILTER_GUITARS,
    payload: guitar,
  }),

  sortGuitarsByPrice: (guitar) => ({
    type: ActionType.SORT_BY_PRICE,
    payload: guitar,
  }),

  sortGuitarsByPopularity: (guitar) => ({
    type: ActionType.SORT_BY_POPULARITY,
    payload: guitar,
  }),

  changeFirstPrice: (value) => ({
    type: ActionType.CHANGE_FIRST_PRICE,
    payload: value,
  }),

  changeLastPrice: (value) => ({
    type: ActionType.CHANGE_LAST_PRICE,
    payload: value,
  }),

  setCheckedButton: (flag) => ({
    type: ActionType.IS_CHECKED_BUTTON,
    payload: flag,
  }),

  changeInputTypeValue: (value) => ({
    type: ActionType.CHANGE_INPUT_TYPE_VALUE,
    payload: value,
  }),

  changeInputStringValue: (value) => ({
    type: ActionType.CHANGE_INPUT_STRING_VALUE,
    payload: value,
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
  loadGuitars: (data) => (dispatch, getState) => {
    dispatch(ActionCreator.setGuitars(data));
  },

  setFilterGuitars: (data) => (dispatch) => {
    dispatch(ActionCreator.setFilterGuitars(data));
  },

  sortGuitarsByPrice: (data) => (dispatch) => {
    dispatch(ActionCreator.sortGuitarsByPrice(data));
  },

  sortGuitarsByPopularity: (data) => (dispatch) => {
    dispatch(ActionCreator.sortGuitarsByPopularity(data));
  },

  changeFirstPrice: (value) => (dispatch) => {
    dispatch(ActionCreator.changeFirstPrice(value));
  },

  changeLastPrice: (value) => (dispatch) => {
    dispatch(ActionCreator.changeLastPrice(value));
  },

  setCheckedButton: (flag) => (dispatch) => {
    dispatch(ActionCreator.setCheckedButton(flag));
  },

  changeInputTypeValue: (value) => (dispatch) => {
    dispatch(ActionCreator.changeInputTypeValue(value));
  },

  changeInputStringValue: (value) => (dispatch) => {
    dispatch(ActionCreator.changeInputStringValue(value));
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
    dispatch(ActionCreator.isAlternateModalOpen())
  },

  isAlternateModalClose: () => (dispatch) => {
    dispatch(ActionCreator.isAlternateModalClose())
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GUITARS:
      return {
        ...state,
        guitars: action.payload,
      };

    case ActionType.SET_FILTER_GUITARS:
      return {
        ...state,
        filterGuitars: action.payload,
      };

    case ActionType.SORT_BY_PRICE:
      return {
        ...state,
        guitars: action.payload,
      };

    case ActionType.SORT_BY_POPULARITY:
      return {
        ...state,
        guitars: action.payload,
      };

     

    case ActionType.CHANGE_FIRST_PRICE:
      return {
        ...state,
        firstPrice: action.payload,
      };

    case ActionType.CHANGE_LAST_PRICE:
      return {
        ...state,
        lastPrice: action.payload,
      };
      

    case ActionType.IS_CHECKED_BUTTON:
      return {
        ...state,
        isCheckedButtonShow: action.payload,
      };

    case ActionType.CHANGE_INPUT_TYPE_VALUE:
      return {
        ...state,
        inputTypeValue: action.payload,
        isInputChecked: true,
      };

    case ActionType.CHANGE_INPUT_STRING_VALUE:
      return {
        ...state,
        inputStringValue: action.payload,
        isInputStringChecked: true,
      };

    case ActionType.GUITAR_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case ActionType.GUITAR_REMOVE_TO_CART:
      return updateOrder(state, action.payload, -1);

    case ActionType.ALL_GUITARS_REMOVED_FROM_CART:
      const item = state.cartItems.find(({ id }) => id === action.payload);
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
