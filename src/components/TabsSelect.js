import React, {useEffect} from 'react';
import { Tabs, message } from 'antd';
import { Card } from './Card'
import { ModelCategoryForm } from './ModelCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoryAction, findAllAction } from '../redux/action';
const { TabPane } = Tabs;

export const TabsSelect = ({managerMode}) => {
    useEffect(() => {
        handleRefreshTab();
    },[])

    const handleRefreshTab = () => {
        dispatch(findAllAction())
    }
    const {dataCategory} = useSelector(state => state.ModelManagerReducer);
    const dispatch = useDispatch();
    const handleDeleteCategory = (e) => {
        const key = 'deleteCategory';
        message.loading({ content: 'Loading...', key});
        const id = e.target.attributes.getNamedItem('data-id').value;
        dispatch(deleteCategoryAction(id));
    }

    return(
        <>
            <Tabs defaultActiveKey="1" type="card" size="large" className="select-model">
                {
                    managerMode ?
                    !!dataCategory && dataCategory.map(tab => 
                        <TabPane tab={tab.ModelCategoryName} className="tab" key={tab._id}>
                            {
                                !!tab.Item && tab.Item.length !== 0 ?
                                tab.Item.map(item => 
                                    <Card managerMode={managerMode} idData={item._id} name={item.ModelName} url={item.url} key={item._id} />
                                )
                                : (<button data-id={tab._id} onClick={handleDeleteCategory} className='btn secondary'>Delete</button>)
                            }
                        </TabPane>
                    )
                    :
                    !!dataCategory && dataCategory.map(tab => 
                        !!tab.Item && tab.Item.length > 0 &&
                        <TabPane tab={tab.ModelCategoryName} className="tab" key={tab._id}>
                            {tab.Item.map(item => 
                            <Card managerMode={managerMode} idData={item._id} name={item.ModelName} url={item.url} key={item._id} />)}
                        </TabPane>
                    )
                }
                {managerMode &&
                    <TabPane tab="+" className="tab" key="addCate">
                        <ModelCategoryForm />
                    </TabPane>
                }
            </Tabs>
        </>
    )
}

