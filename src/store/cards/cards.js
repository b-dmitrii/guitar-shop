const initialState = {
  guitars: [],
  loading: true
};

export const ActionType = {
  SET_GUITARS: `SET_GUITARS`,
  SET_GUITARS_LOADIND: `SET_GUITARS_LOADIND`
};

export const ActionCreator = {
  setGuitars: (guitar) => ({
    type: ActionType.SET_GUITARS,
    payload: guitar,
  }),

  setGuitarsLoading: () => ({
    type: ActionType.SET_GUITARS_LOADIND
  })
};

export const Operation = {
  loadGuitars: (data) => (dispatch, getState) => {
    data.getGuitars().then((res) => dispatch(ActionCreator.setGuitars(res)));
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GUITARS:
      return {
        ...state,
        guitars: action.payload,
        loading: false
      }
      case ActionType.SET_GUITARS_LOADIND:
        return {
          guitars: [],
          loading: true
        }
    default:
      return state;
  }
};
