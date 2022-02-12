import actionType from "./BankActionType";

const initialState = {
  banks: null,
  selected: null,
};

 export const bankList = (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.FETCH_BANKS:
      return {
        ...state,
        banks: action.payload,
      };
    case actionType.SELECT_BANK:
      return {
        ...state,
        selected: action.payload,
      };
      case actionType.CLEAR_SELECTED:
        return {
          ...state,
          selected: null,
        };
    default:
      return state;
  }
};

export const transactions = (state = { loading: false, transactions: null}, action: any) => {
    switch (action.type) {
      case actionType.LOADING:
        return {
          ...state,
          loading: action.payload,
        };
      default:
        return state;
    }
  };

