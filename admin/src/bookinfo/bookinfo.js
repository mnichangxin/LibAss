import React from 'react'
import 'whatwg-fetch'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './bookinfo.less'

import {Section} from '../section/section.js'

import {BookEdit} from '../bookedit/bookedit.js'

class BookInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [
                // {
                //     bookId: '0001',
                //     imgSrc: '../static/images/book1.jpg',
                //     bookTitle: '百年孤独',
                //     bookAuthor: 'xiaoli',
                //     bookCategory: '小说',
                //     bookHolding: 10
                // },
                // {
                //     bookId: '0001',
                //     imgSrc: '../static/images/book1.jpg',
                //     bookTitle: '百年孤独',
                //     bookAuthor: 'xiaozhang',
                //     bookCategory: '小说',
                //     bookHolding: 10
                // },
                // {
                //     bookId: '0001',
                //     imgSrc: '../static/images/book1.jpg',
                //     bookTitle: '百年孤独',
                //     bookAuthor: 'xiaowang',
                //     bookCategory: '小说',
                //     bookHolding: 10
                // }
            ]
        }

        this.handleDel = this.handleDel.bind(this)
    }

    componentDidMount() {
        fetch('/wxapp/soft/Linkage_books.action')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({
                    books: data
                })
            })
            .catch((err) => {
                return err
            })
    }

    handleDel(index) {
        this.setState({
            books: this.state.books.filter((_, i) => i != index)
        })
    }

    render() {
        const section_title = '书籍管理'
        const box_title = '书籍信息'
        const box_content = <Router>
            <div>
                <div className={styles.body}>
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
                            {
                                this.state.books.map((book, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{book.bookId}</td>
                                            <td>{book.bookTitle}</td>
                                            <td>{book.bookAuthor}</td>
                                            <td>{book.bookCategory}</td>
                                            <td>{book.bookHolding}</td>
                                            <td>
                                                {/*<div className={styles.edit}>编辑</div>*/}
                                                <Link
                                                    to={{
                                                        pathname: '/edit',
                                                        search: '?id=' + book.bookId
                                                    }} 
                                                    className={styles.edit}>编辑</Link>
                                                <div className={styles.del} onClick={() => this.handleDel(index)}>删除</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Route path="/edit" component={BookEdit} />
            </div>
        </Router>

        return (
            <Section 
                section_title={section_title} 
                box_title={box_title} 
                box_content={box_content} 
            />
        )
    }
}

export {BookInfo}