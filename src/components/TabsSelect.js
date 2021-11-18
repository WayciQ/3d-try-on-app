import React, {useState} from 'react';
import { Tabs } from 'antd';
import { Card } from './Card'
import { ModelCategoryForm } from './ModelCategoryForm';
const { TabPane } = Tabs;

const cardData = [
    {
        id:1, 
        name: "Glassed", 
        item: [ 
            {id:1, name:'Glass1', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:2, name:'Glass2', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:3, name:'Glass3', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:4, name:'Glass4', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:5, name:'Glass5', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:6, name:'Glass1', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:7, name:'Glass2', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:8, name:'Glass3', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:9, name:'Glass4', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:10, name:'Glass5', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:11, name:'Glass1', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:12, name:'Glass2', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:13, name:'Glass3', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:14, name:'Glass4', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:15, name:'Glass5', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
        ]
    },
    {
        id:2, 
        name: "Jul", 
        item: [ 
            {id:1, name:'Glass1', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:2, name:'Glass2', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:3, name:'Glass3', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:4, name:'Glass4', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:5, name:'Glass5', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
        ]
    },
    {
        id:3, 
        name: "Wayci", 
        item: [ 
            {id:1, name:'Glass1', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:2, name:'Glass2', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:3, name:'Glass3', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:4, name:'Glass4', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:5, name:'Glass5', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:6, name:'Glass1', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:7, name:'Glass2', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:8, name:'Glass3', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:9, name:'Glass4', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},
            {id:10, name:'Glass5', url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
        ]
    }
]

export const TabsSelect = ({haveAddCategory}) => {
    const [tabData, setTabData] = useState(cardData);

    return(
        <>
            <Tabs defaultActiveKey="1" type="card" size="large" className="select-model">
                {
                    haveAddCategory ?
                    tabData.map(tab => 
                        <TabPane tab={tab.name} className="tab" key={tab.id}>
                            {
                                !!tab.item && tab.item.length !== 0 ?
                                tab.item.map(item => <Card name={item.name} url={item.url} key={item.id} />) 
                                : (<button className='btn secondary'>Delete</button>)
                            }
                        </TabPane>
                    )
                    :
                    tabData.map(tab => !!tab.item && tab.item.length > 0 ?
                        <TabPane tab={tab.name} className="tab" key={tab.id}>
                            {tab.item.map(item => <Card name={item.name} url={item.url} key={item.id} />)}
                        </TabPane>: null
                    )
                }
                {haveAddCategory ? 
                    <TabPane tab="+" className="tab" key="addCate">
                        <ModelCategoryForm />
                    </TabPane> : null
                }
            </Tabs>
        </>
    )
}