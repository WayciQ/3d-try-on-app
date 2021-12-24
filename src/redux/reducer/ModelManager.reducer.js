import { MODEL_CATEGORY } from "../constant/ModelManager.constant";

const stateDefault = {
    dataCategory: [],
}

export const ModelManagerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case MODEL_CATEGORY.FIND_ALL:{
            state.dataCategory = action.payload;
            return {...state}
        }
        case MODEL_CATEGORY.CREATE_CATEGORY:{
            state.dataCategory = [...state.dataCategory,action.payload];
            return {...state}
        }
        case MODEL_CATEGORY.DELETE_CATEGORY:{
            state.dataCategory = [...state.dataCategory].filter(item => item._id !== action.payload._id)
            return {...state}
        }
        default:
            return { ...state }
    }
}