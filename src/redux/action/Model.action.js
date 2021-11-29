import { ModelService } from "../../_services/Model.service";
import axios from "axios";
import { MODEL } from "../constant/Model.constant";
import { message } from "antd";
export const findByModelIdAction = (id) => {
    return async (dispatch) => {
        try{
            Promise.all([ModelService.FindByModelId(id)]).then((result) =>{
                if( result[0].returnCode !== 1){
                    message.error({ content: 'cannot find data!', duration: 2 });
                }
                else {
                    dispatch({
                        type:MODEL.FIND_BY_ID,
                        payload: result[0].data[0],
                    })
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

export const createModelAction = (value,file1,file2,file3) => {
    const key = 'addModel';
    return async (dispatch) => {
        try{
            Promise.all([ModelService.Create(value)]).then((result) =>{
                if( result[0].returnCode !== 1){
                    message.error({ content: 'something wrong!', key, duration: 3 });
                }
                else {
                    dispatch({
                        type:MODEL.FIND_BY_ID,
                        payload: result[0].data,
                    })
                    UploadFileAction(file1,`${value.ModelName}.obj`);
                    UploadFileAction(file2,`${value.ModelName}.mtl`);
                    UploadFileAction(file3,`${value.ModelName}.jpg`);
                    message.success({ content: 'Add model success', key, duration: 3 });
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }
}
export const updateModelAction = (value,file1,file2,file3) => {
    const key = 'addModel';
    return async (dispatch) => {
        try{
            Promise.all([ModelService.Create(value)]).then((result) =>{
                if( result[0].returnCode !== 1){
                    message.error({ content: 'something wrong!', key, duration: 3 });
                }
                else {
                    dispatch({
                        type:MODEL.FIND_BY_ID,
                        payload: result[0].data,
                    })
                    UploadFileAction(file1,`${value.ModelName}.obj`);
                    UploadFileAction(file2,`${value.ModelName}.mtl`);
                    UploadFileAction(file3,`${value.ModelName}.jpg`);
                    message.success({ content: 'Add model success', key, duration: 3 });
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

export const deleteModelAction = (id) => {
    const key = 'deleteModel';
    return async (dispatch) => {
        try{
            Promise.all([ModelService.Delete(id)]).then((result) =>{
                if( result[0].returnCode !== 1){
                    message.error({ content: 'something wrong!', key, duration: 3 });
                }
                else {
                    dispatch({
                        type:MODEL.DELETE_MODEL,
                        payload: result[0].data,
                    })
                    
                    message.success({ content: 'Delete model success', key, duration: 3 });
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

export const cancelModelAction = () => {
    return {
        type: MODEL.CANCEL_MODEL,
        payload: []
    }
}
const UploadFileAction = async (file, name) => {
    
        try{
            let formData = new FormData();
            formData.append( 
                name, 
                file,
            );
            await axios.post(`http://localhost:5000/Model/uploadFile/${name}`, formData).then(result => {
                console.log(result)
            })
        }
        catch (err){
            console.log(err)
        }
    
}
