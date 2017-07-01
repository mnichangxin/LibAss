import React from 'react'
import 'whatwg-fetch'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './vip.less'

import {Section} from '../section/section.js'

class Vip extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            users: [
                {
                    username: '李昶昕',
                    score: 70,
                    vip: '普通会员',
                    bookCount: 2,
                    takeTime: 30
                }
            ]
        }
    }

    render() {
        const section_title = '用户管理'
        const box_title = '信用等级'
        const box_content = <div className={styles.bookshelves}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>昵称</th>
                        <th>信用分数</th>
                        <th>会员等级</th>
                        <th>可借阅本数</th>
                        <th>可借阅时间</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.score}</td>
                                    <td>{item.vip}</td>
                                    <td>{item.bookCount}</td>
                                    <td>{item.takeTime}</td>
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

export {Vip}
