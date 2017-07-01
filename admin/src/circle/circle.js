import React from 'react'
import 'whatwg-fetch'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './circle.less'

import {Section} from '../section/section.js'

class Circle extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            users: [
                {
                    username: '李昶昕',
                    content: '内容',
                    voteup: [1, 2, 3],
                    comment: [1, 2, 3]
                }
            ]
        }
    }

    render() {
        const section_title = '书圈管理'
        const box_title = '书圈管理'
        const box_content = <div className={styles.bookshelves}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>昵称</th>
                        <th>书圈</th>
                        <th>点赞</th>
                        <th>评论</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.content}</td>
                                    <td>
                                        <Link to="" className={styles.see}>查看</Link>
                                    </td>
                                    <td>
                                        <Link to="" className={styles.see}>查看</Link>
                                    </td>
                                    <td>
                                        <Link to="" className={styles.del}>删除</Link>
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

export {Circle}
