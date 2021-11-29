import { MODEL } from "../constant/Model.constant";

const dataFormExam = {
    _id:'',
    ModelName: '',
    ModelCategory: '',
    ModelDescription: '',
    ModelObj: [
    ],
    ModelMtl: [
    ],
    ModelMaterial: [
    ]
}
const stateDefault = {
    model: dataFormExam,
    isUpdate: false
}

export const ModelReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case MODEL.FIND_BY_ID:{
            state.model = action.payload;
            state.isUpdate = true;
            return {...state}
        }
        case MODEL.CREATE_MODEL:{
            state.model = dataFormExam;
            return {...state}
        }
        case MODEL.UPDATE_MODEL:{
            state.model = dataFormExam;
            return {...state}
        }
        case MODEL.DELETE_MODEL:{
            state.model = dataFormExam;
            return {...state}
        }
        case MODEL.CANCEL_MODEL:{
            state.model = dataFormExam;
            return{...state}
        }
        case MODEL.UPLOAD_FILE: {
            return {...state}
        }
        default:
            return { ...state }
    }
}