const initialState = {
  guitars: [],  
  loading: false,
};

export const ActionType = {
  SET_GUITARS: `SET_GUITARS`,
  SET_GUITARS_LOADIND: `SET_GUITARS_LOADIND`,
  SORT_BY_PRICE: `SORT_BY_PRICE`,
  SORT_BY_POPULARITY: `SORT_BY_POPULARITY`,
  SET_FILTER_GUITARS: `SET_FILTER_GUITARS`,
};

export const ActionCreator = {
  setGuitars: (guitar) => ({
    type: ActionType.SET_GUITARS,
    payload: guitar,
  }),

  setGuitarsLoading: (flag) => ({
    type: ActionType.SET_GUITARS_LOADIND,
    payload: flag,
  }),

  sortGuitarsByPrice: (guitar) => ({
    type: ActionType.SORT_BY_PRICE,
    payload: guitar,
  }),

  sortGuitarsByPopularity: (guitar) => ({
    type: ActionType.SORT_BY_POPULARITY,
    payload: guitar,
  }),

  setFilterGuitars: (guitar) => ({
    type: ActionType.SET_FILTER_GUITARS,
    payload: guitar,
  }),
};

export const Operation = {
  loadGuitars: (data) => (dispatch, getState) => {
    dispatch(ActionCreator.setGuitarsLoading(true));
    setTimeout(() => {
      dispatch(ActionCreator.setGuitars(data));
      dispatch(ActionCreator.setGuitarsLoading(false));
    }, 700);
  },

  sortGuitarsByPrice: (data) => (dispatch) => {
    dispatch(ActionCreator.sortGuitarsByPrice(data));
  },

  sortGuitarsByPopularity: (data) => (dispatch) => {
    dispatch(ActionCreator.sortGuitarsByPopularity(data));
  },

  setFilterGuitars: (data) => (dispatch) => {
    dispatch(ActionCreator.setFilterGuitars(data));
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GUITARS:
      return {
        ...state,
        guitars: action.payload,
      };
    case ActionType.SET_GUITARS_LOADIND:
      return {
        ...state,
        loading: action.payload,
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

    case ActionType.SET_FILTER_GUITARS:
      return {
        ...state,
        guitars: action.payload,
      };

    default:
      return state;
  }
};
