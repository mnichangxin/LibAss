import React from 'react'
import 'whatwg-fetch'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './account.less'

import {Section} from '../section/section.js'

class Account extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            users: [
                {
                    username: '李昶昕',
                    phone: '18954109152',
                    vip: '普通会员'
                },
                {
                    username: '李昶昕',
                    phone: '18954109152',
                    vip: '普通会员'
                },
                {
                    username: '李昶昕',
                    phone: '18954109152',
                    vip: '普通会员'
                }
            ]
        }
    }

    render() {
        const section_title = '用户管理'
        const box_title = '账户信息'
        const box_content = <div className={styles.bookshelves}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>昵称</th>
                        <th>手机号</th>
                        <th>用户等级</th>
                        <th>借阅记录</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.vip}</td>
                                    <td>
                                        <Link to="" className={styles.see}>点击查看</Link>
                                    </td>
                                    <td>
                                        <Link to="" className={styles.repwd}>重置密码</Link>
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

export {Account}
