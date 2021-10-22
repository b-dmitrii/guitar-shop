const initialState = {
  guitars: [],
  loading: true,  
};

export const ActionType = {
  SET_GUITARS: `SET_GUITARS`,
  SET_GUITARS_LOADIND: `SET_GUITARS_LOADIND`,
  SORT_BY_PRICE: `SORT_BY_PRICE`,
  SORT_BY_POPULARITY: `SORT_BY_POPULARITY`
};

export const ActionCreator = {
  setGuitars: (guitar) => ({
    type: ActionType.SET_GUITARS,
    payload: guitar,
  }),

  setGuitarsLoading: () => ({
    type: ActionType.SET_GUITARS_LOADIND,
  }),

  sortGuitarsByPrice: (guitar) => ({
    type: ActionType.SORT_BY_PRICE,
    payload: guitar,
  }),

  sortGuitarsByPopularity: (guitar) => ({
    type: ActionType.SORT_BY_POPULARITY,
    payload: guitar
  })
};

export const Operation = {
  loadGuitars: (data) => (dispatch, getState) => {
    data.getGuitars().then((res) => dispatch(ActionCreator.setGuitars(res)));
  },
  sortGuitarsByPrice: (data) => (dispatch) => {
    dispatch(ActionCreator.sortGuitarsByPrice(data));
  },

  sortGuitarsByPopularity: (data) => (dispatch) => {
    dispatch(ActionCreator.sortGuitarsByPopularity(data))
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GUITARS:
      return {
        ...state,
        guitars: action.payload,
        loading: false,
      };
    case ActionType.SET_GUITARS_LOADIND:
      return {
        ...state,
        loading: true,
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
      }

    default:
      return state;
  }
};
