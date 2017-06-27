import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styles from './page.less'

import {Aside} from '../aside/aside.js'
import {Section} from '../section/section.js'
import {BookInfo} from '../bookinfo/bookinfo.js'
import {BookEdit} from '../bookedit/bookedit.js'
import {BookShelves} from '../bookshelves/bookshelves.js'
import {Reserve} from '../reserve/reserve.js'
import {Borrow} from '../borrow/borrow.js'

class Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            routes: [
                {
                    path: '/',
                    component: BookInfo
                },
                {
                    path: '/bookinfo',
                    component: BookInfo
                },
                {
                    path: '/bookshelves',
                    component: BookShelves
                },
                {
                    path: '/reserve',
                    component: Reserve
                },
                {
                    path: '/borrow',
                    component: Borrow
                },
                {
                    path: '/three',
                    component: BookInfo
                },
                {
                    path: '/four',
                    component: BookInfo
                }
            ]
        }
    }

    render() {
        const aside = <Aside />
        const section = <Section />

        return (
            <Router>
                <div className={styles.page}>
                    <div className={styles.asideWrap}>{aside}</div>
                    <div className={styles.sectionWrap}>
                        {
                            this.state.routes.map((route, index) => {
                                return <Route exact path={route.path} component={route.component} key={index}></Route>
                            })   
                        }   
                        <Route path='/bookinfo/edit/id/**' component={BookEdit}></Route>   
                    </div>    
                </div>
            </Router>
        )
    }
}

export {Page}