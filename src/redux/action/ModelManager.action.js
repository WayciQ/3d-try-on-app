
import { MODEL_CATEGORY } from "../constant/ModelManager.constant";
import { ModelCategoryService } from "../../_services/ModelCategory.service"
import { message } from "antd"
export const findAllAction = () => {
    return async (dispatch) => {
        try{
            Promise.all([ModelCategoryService.FindAll()]).then((result) =>{
                dispatch({
                    type:MODEL_CATEGORY.FIND_ALL,
                    payload: result[0].data
                })
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

export const createCategoryAction = (value) => {
    const key = 'addCategory';
    return async (dispatch) => {
        try{
            Promise.all([ModelCategoryService.Create(value)]).then((result) =>{
                if( result[0].returnCode !== 1){
                    message.error({ content: 'something wrong!', key, duration: 3 });
                } else {
                    dispatch({
                        type:MODEL_CATEGORY.CREATE_CATEGORY,
                        payload: result[0].data
                    })
                    message.success({ content: 'Add model category success', key, duration: 3 });
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }
}
export const deleteCategoryAction = (id) => {
    const key = 'deleteCategory';
    return async (dispatch) => {
        try{
            Promise.all([ModelCategoryService.Delete(id)]).then((result) =>{
                if( result[0].returnCode !== 1){
                    message.error({ content: 'something wrong!', key, duration: 3 });
                }
                else {
                    dispatch({
                        type:MODEL_CATEGORY.DELETE_CATEGORY,
                        payload: result[0].data
                    })
                    message.success({ content: 'Delete model category success', key, duration: 3 });
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }
}
