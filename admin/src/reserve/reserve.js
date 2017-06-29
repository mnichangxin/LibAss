import React from 'react'
import 'whatwg-fetch'
import styles from './reserve.less'

import {Section} from '../section/section.js'

class Reserve extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                   id: '0001',
                   username: 'mnichangxin',
                   bookname: '百年孤独',
                   status: 0,
                   date: '2015-09-12',
                   pay: '已支付'
                }
            ]    
        }
    }
    
    render() {
        const section_title = '预约借书'
        const box_title = '预约管理'
        const box_content = <div className={reverse}>
             <table className={style.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>昵称</th>
                        <th>借阅书籍</th>
                        <th>借阅/预约</th>
                        <th>应还时间/应取时间</th>
                        <th>支付状态</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <tr key={index}>
                                   <td></td>
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

