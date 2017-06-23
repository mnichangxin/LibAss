import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'react-fa'
import styles from './aside.less'

class Aside extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            list: [
                {
                    title: '书籍管理',
                    path: '',
                    list: [{
                        text: '书籍信息',
                        path: '/bookinfo'
                    }, {
                        text: '书籍上架',
                        path: '/bookshelves',
                    }],
                    isDown: false
                },
                {
                    title: '预约借书',
                    path: '',
                    list: [{
                        text: '预约管理',
                        path: '/one'
                    }, {
                        text: '借书管理',
                        path: '/two'
                    }],
                    isDown: false
                },
                {
                    title: '订单管理',
                    path: '/four',
                    list: null,
                    isDown: false
                }
            ]
        }

        this.handleDrop = this.handleDrop.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleDrop(index) {
        let list = this.state.list

        if (!!list[index].list) {
            list[index].isDown = !list[index].isDown
            this.setState({
                list: list
            })
        }
    }

    handleClick(e) {
        e.stopPropagation()
    }

    render() {
        const List = <ul className={styles.sideNav}>
            {
                this.state.list.map(
                    (primary, index) => {
                        return (
                            <li key={index} className={styles.primaryItem} onClick={() => this.handleDrop(index)}>
                                <Link to={primary.path} className={styles.primaryTitle}>
                                    {primary.title}
                                    {
                                        !!primary.list && (!primary.isDown?<Icon name="angle-left"/>:<Icon name="angle-down"/>)
                                    }
                                </Link>
                                {primary.isDown && <ul className={styles.menu}>
                                    {   
                                        primary.list.map(
                                            (second, index) => {
                                                return (
                                                    <li key={index} className={styles.menuList} onClick={(e) => this.handleClick(e)}>
                                                        <Link to={second.path} className={styles.menulistTitle}><Icon name="angle-right"/>{second.text}</Link>
                                                    </li>
                                                )
                                            }
                                        )
                                    }
                                </ul>}
                            </li>
                        )
                    }
                )
            }
        </ul>

        return (
            <div className={styles.aside}>
                {List}
            </div>
        )
    }
}

export {Aside}