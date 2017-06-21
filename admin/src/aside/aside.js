import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Icon} from 'react-fa'
import styles from './aside.less'

import {Comp} from '../comp/comp.js'

class Aside extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            list: [
                {
                    title: '书籍管理',
                    path: '',
                    component: null,
                    list: [{
                        text: '书籍信息',
                        path: 'one',
                        component: Comp
                    }, {
                        text: '书籍上架',
                        path: 'two',
                        component: Comp
                    }],
                    isDown: false
                },
                {
                    title: '预约借书',
                    path: '',
                    component: null,
                    list: [{
                        text: '预约管理',
                        path: 'one',
                        component: Comp
                    }, {
                        text: '借书管理',
                        path: 'two',
                        component: Comp
                    }],
                    isDown: false
                },
                {
                    title: '订单管理',
                    path: 'four',
                    component: Comp,
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
        const List = <Router>
            <ul className={styles.sideNav}>
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
                {
                    this.state.list.map((primary, index) => {
                        if (!!primary.list) {
                            primary.list.map((second, index) => {
                                return <Route path={second.path} component={second.component} key={index}></Route>
                            })
                        } else {
                            return <Route path={primary.path} component={primary.component} key={index}></Route>
                        }
                    }) 
                }
            </ul>  
        </Router>

        return (
            <div className={styles.aside}>
                {List}
            </div>
        )
    }
}

export {Aside}