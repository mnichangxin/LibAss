import React from 'react'
import 'whatwg-fetch'
import styles from './comp.less'

import {Section} from '../section/section.js'

class Comp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [
                {
                    bookId: '0001',
                    imgSrc: '../static/images/book1.jpg',
                    bookTitle: '百年孤独',
                    bookAuthor: 'xiaoli',
                    bookCategory: '小说'
                },
                {
                    bookId: '0001',
                    imgSrc: '../static/images/book1.jpg',
                    bookTitle: '百年孤独',
                    bookAuthor: 'xiaoli',
                    bookCategory: '小说'
                },
                {
                    bookId: '0001',
                    imgSrc: '../static/images/book1.jpg',
                    bookTitle: '百年孤独',
                    bookAuthor: 'xiaoli',
                    bookCategory: '小说'
                }
            ]
        }
    }

    componentDidMount() {
        fetch('/wxapp/soft/RecommendBooks.action', {
                mode: 'no-cors'
            })
            .then(function(res) {
                return res.json()
            })
            .then(function(resData) {
                console.log(resData)
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    render() {
        const section_title = 'Dashboard'
        const box_title = 'Dashboard'
        const box_content = <div className={styles.body}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>书籍名</th>
                        <th>作者</th>
                        <th>分类</th>
                        <th>馆藏</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>
                            <div className={styles.edit}>编辑</div>
                            <div className={styles.del}>删除</div>
                        </td>
                    </tr>
                    <tr>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>
                            <div className={styles.edit}>编辑</div>
                            <div className={styles.del}>删除</div>
                        </td>
                    </tr>
                    <tr>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>
                            <div className={styles.edit}>编辑</div>
                            <div className={styles.del}>删除</div>
                        </td>
                    </tr>
                    <tr>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>0001</td>
                        <td>
                            <div className={styles.edit}>编辑</div>
                            <div className={styles.del}>删除</div>
                        </td>
                    </tr>
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

export {Comp}