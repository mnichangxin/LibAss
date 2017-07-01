import React from 'react'
import 'whatwg-fetch'
import {Link} from 'react-router-dom'
import styles from './reserve.less'

import {Section} from '../section/section.js'

class Reserve extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                   orderId: '0001',
                   username: 'mnichangxin',
                   bookName: '百年孤独',
                   status: '已支付',
                   createDate: '2015-09-12'
                }
            ]    
        }
    }
    
    render() {
        const section_title = '预约借书'
        const box_title = '预约管理'
        const box_content = <div className={styles.reserve}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>订单ID</th>
                        <th>用户昵称</th>
                        <th>书籍名</th>
                        <th>状态</th>
                        <th>创建时间</th>
                        <th>管理</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.orderId}</td>
                                    <td>{item.username}</td>
                                    <td>{item.bookName}</td>
                                    <td>{item.status}</td>
                                    <td>{item.createDate}</td>
                                    <td>
                                        <Link to="" className={styles.edit}>管理</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        return (
            <Section 
                section_title={section_title} 
                box_title={box_title} 
                box_content={box_content} 
            />
        )
    }
}

export {Reserve}

