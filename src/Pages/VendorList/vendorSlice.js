import HTTP from "../../http/http";
const initialState = {
  isLoading: false,
  finalResult: []
};

export default function vendorReducer(state = initialState, action) {
  switch (action.type) {
    case "vendore/firstPage":
      return {
        ...state,
        ...action.payload,
        finalResult:[...state.finalResult,...action.payload.finalResult]
      };
    default:
      return state;
  }
}
export const firstList = (state) => state.list;

export const getVendorsList = (vendor) => {
  return {
    type: "vendore/firstPage",
    payload: vendor.data,
  };
};

export const getVendors = (page) => {
  return (dispatch) => {
    HTTP.get("restaurant/vendors-list", {
      params: {
        page,
        page_size: 10,
        lat: 35.754,
        long: 51.328,
      },
    }).then((vendors) => {
      dispatch(getVendorsList(vendors.data));
    });
  };
};
