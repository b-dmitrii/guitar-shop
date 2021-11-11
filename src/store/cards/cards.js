import {NameSpaceGuitar} from "../../const";

const initialState = {
  guitars: [],
  firstPrice: ``,
  lastPrice: ``,
  isInputTypeChecked: false,
  isInputStringChecked: false,
  isSortPriceActive: false,
  isSortPopularityActive: false,
  isArrowUpActive: false,
  isArrowDownActive: false,
  typeGuitarsArr: [],
  countStringArr: [],
  innerGuitars: [],
  currentPage: 1,
  innerGuitarsPerPage: 9,
  isDisabled: false,
  itemId: ``
};

const changeArray = (array, value) => {
  if (array.length === 0) {
    return [...array, value];
  }

  const idx = array.findIndex((item) => item === value);

  if (idx >= 0) {
    return [...array.slice(0, idx), ...array.slice(idx + 1)];
  }

  if (idx < 0) {
    return [...array, value];
  }
  return array;
};

const onChangeTypeArray = (state, value) => {
  const {
    typeGuitarsArr,
    countStringArr,
  } = state;
  const nextTypeGuitarsArr = changeArray(typeGuitarsArr, value);

  const genNextCountStringArr = (
      nextTypeGuitarsArr,
      config,
      countStringArr
  ) => {
    let permittedArr = [];
    const nextCountStringArr = [];

    if (nextTypeGuitarsArr.length === 0) {
      return countStringArr;
    }

    nextTypeGuitarsArr.map((i) => {
      if (i === `ukulele`) {
        permittedArr = permittedArr.concat(config[i]);
      }
      if (i === `electro`) {
        permittedArr = permittedArr.concat(config[i]);
      }
      if (i === `acustic`) {
        permittedArr = permittedArr.concat(config[i]);
      }

      return permittedArr;
    });

    countStringArr.forEach((i) => {
      if (permittedArr.includes(parseInt(i, 10))) {
        nextCountStringArr.push(i);
      }
    });

    return nextCountStringArr;
  };

  return {
    ...state,
    typeGuitarsArr: nextTypeGuitarsArr,
    countStringArr: genNextCountStringArr(
        nextTypeGuitarsArr,
        NameSpaceGuitar,
        countStringArr
    ),
    currentPage: 1,
  };
};

const onChangeCountStringArray = (state, value) => {
  const {countStringArr} = state;

  return {
    ...state,
    countStringArr: changeArray(countStringArr, value),
    currentPage: 1,
  };
};

export const ActionType = {
  SET_GUITARS: `guitars/SET_GUITARS`,
  SET_FILTER_GUITARS: `guitars/SET_FILTER_GUITARS`,
  SET_GUITARS_LOADIND: `guitars/SET_GUITARS_LOADIND`,
  SORT_BY_PRICE: `sortGuitars/SORT_BY_PRICE`,
  SORT_BY_POPULARITY: `sortGuitars/SORT_BY_POPULARITY`,
  CHANGE_FIRST_PRICE: `filter/CHANGE_FIRST_PRICE`,
  CHANGE_LAST_PRICE: `filter/CHANGE_LAST_PRICE`,
  CHANGE_INPUT_TYPE_VALUE: `filter/CHANGE_INPUT_TYPE_VALUE`,
  CHANGE_INPUT_STRING_VALUE: `filter/CHANGE_INPUT_STRING_VALUE`,
  ON_CHANGE_TYPE_ARRAY: `filter/ON_CHANGE_TYPE_ARRAY`,
  ON_CHANGE_COUNT_STRING_ARRAY: `filter/ON_CHANGE_COUNT_STRING_ARRAY`,
  CREATE_COPY_GUITARS_ARRAY: `guitars/CREATE_COPY_GUITARS_ARRAY`,
  CHANGE_STATE_UP_ARROW: `sortGuitars/CHANGE_STATE_UP_ARROW`,
  CHANGE_STATE_DOWN_ARROW: `sortGuitars/CHANGE_STATE_DOWN_ARROW`,
  CHANGE_PAGE_NUMBER: `pagination/CHANGE_PAGE_NUMBER`,
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

  changeInputTypeValue: (value) => ({
    type: ActionType.CHANGE_INPUT_TYPE_VALUE,
    payload: value,
  }),

  changeInputStringValue: (value) => ({
    type: ActionType.CHANGE_INPUT_STRING_VALUE,
    payload: value,
  }),

  isInputStringChange: (flag) => ({
    type: ActionType.IS_STRING_INPUT_CHANGE,
    payload: flag,
  }),

  changeTypeArray: (value) => ({
    type: ActionType.ON_CHANGE_TYPE_ARRAY,
    payload: value,
  }),

  changeCountStringArray: (value) => ({
    type: ActionType.ON_CHANGE_COUNT_STRING_ARRAY,
    payload: value,
  }),

  createCopyGuitarsArr: (guitars) => ({
    type: ActionType.CREATE_COPY_GUITARS_ARRAY,
    payload: guitars,
  }),

  changeStateUpArrow: (flag) => ({
    type: ActionType.CHANGE_STATE_UP_ARROW,
    payload: flag,
  }),

  changeStateDownArrow: (flag) => ({
    type: ActionType.CHANGE_STATE_DOWN_ARROW,
    payload: flag,
  }),

  changePageNumber: (number) => ({
    type: ActionType.CHANGE_PAGE_NUMBER,
    payload: number,
  }),
};

export const Operation = {
  loadGuitars: (data) => (dispatch) => {
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

  changeInputTypeValue: (value) => (dispatch) => {
    dispatch(ActionCreator.changeInputTypeValue(value));
  },

  changeInputStringValue: (value) => (dispatch) => {
    dispatch(ActionCreator.changeInputStringValue(value));
  },

  changeTypeArray: (value) => (dispatch) => {
    dispatch(ActionCreator.changeTypeArray(value));
  },

  changeCountStringArray: (value) => (dispatch) => {
    dispatch(ActionCreator.changeCountStringArray(value));
  },

  createCopyGuitarsArr: (guitars) => (dispatch) => {
    dispatch(ActionCreator.createCopyGuitarsArr(guitars));
  },

  changeStateUpArrow: (flag) => (dispatch) => {
    dispatch(ActionCreator.changeStateUpArrow(flag));
  },

  changeStateDownArrow: (flag) => (dispatch) => {
    dispatch(ActionCreator.changeStateDownArrow(flag));
  },

  changePageNumber: (number) => (dispatch) => {
    dispatch(ActionCreator.changePageNumber(number));
  },

  isInputStringChange: (flag) => (dispatch) => {
    dispatch(ActionCreator.isInputStringChange(flag));
  },
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
        isSortPriceActive: true,
        isSortPopularityActive: false,
      };

    case ActionType.SORT_BY_POPULARITY:
      return {
        ...state,
        guitars: action.payload,
        isSortPriceActive: false,
        isSortPopularityActive: true,
      };

    case ActionType.CHANGE_FIRST_PRICE:
      return {
        ...state,
        firstPrice: action.payload,
        currentPage: 1,
      };

    case ActionType.CHANGE_LAST_PRICE:
      return {
        ...state,
        lastPrice: action.payload,
        currentPage: 1,
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
      };

    case ActionType.ON_CHANGE_TYPE_ARRAY:
      return onChangeTypeArray(state, action.payload);

    case ActionType.ON_CHANGE_COUNT_STRING_ARRAY:
      return onChangeCountStringArray(state, action.payload);

    case ActionType.CREATE_COPY_GUITARS_ARRAY:
      return {
        ...state,
        innerGuitars: action.payload,
      };

    case ActionType.CHANGE_STATE_UP_ARROW:
      return {
        ...state,
        isArrowUpActive: action.payload,
        isArrowDownActive: false,
      };

    case ActionType.CHANGE_STATE_DOWN_ARROW:
      return {
        ...state,
        isArrowDownActive: action.payload,
        isArrowUpActive: false,
      };

    case ActionType.CHANGE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ActionType.IS_STRING_INPUT_CHANGE:
      return {
        ...state,
        isInputStringChecked: action.payload,
      };

    default:
      return state;
  }
};
