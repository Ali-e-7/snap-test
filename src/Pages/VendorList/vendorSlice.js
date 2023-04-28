import HTTP from '../../assets/http/http'
const initState = {

}


export default function vendorReducer(state = initState, action) {

    switch (action.type) {
        case 'vendore/firstPage':
            return {
                ...action.payload.data
            }
            case 'vendore/otherPage':
            return action.payload.data.finalResult.map(item => (state.finalResult.push(item)))
        default:
            return false
    }
}
export const firstList = state => ({ count: state.list.count, finalResult: state.list.finalResult, openCount: state.list.open_count })
export const filters = state => state.list.extra_sections
export const newTest = state => ({newResult: state.list.finalResult})


export const getVendorsList = (vendor) => {
    return {
        type: 'vendore/firstPage',
        payload: vendor.data
    }
}
export const getMoreVendorsList = (vendor) => {
    return {
        type: 'vendore/otherPage',
        payload: vendor.data
    }
}


export const getVendors = (dispatch, getState) => {
    HTTP.get('restaurant/vendors-list', {
        params: {
            page: 1,
            page_size: 10,
            lat: 35.754,
            long: 51.328
        }
    }).then(vendors => {
        dispatch(getVendorsList(vendors))
    })
}
export const getMoreVendors = (dispatch, getstate) => {
    HTTP.get('restaurant/vendors-list', {
        params: {
            page: 5,
            page_size: 10,
            lat: 35.754,
            long: 51.328
        }
    }).then(vendors => {
        dispatch(getMoreVendorsList(vendors))
    })
}