import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styles from './page.less'

import {Aside} from '../aside/aside.js'
import {Section} from '../section/section.js'
import {BookInfo} from '../bookinfo/bookinfo.js'
import {BookEdit} from '../bookedit/bookedit.js'
import {BookShelves} from '../bookshelves/bookshelves.js'
import {Reserve} from '../reserve/reserve.js'
import {Account} from '../account/account.js'
import {Vip} from '../vip/vip.js'
import {Circle} from '../circle/circle.js'

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
                    path: '/account',
                    component: Account
                },
                {
                    path: '/reserve',
                    component: Reserve
                },
                {
                    path: '/vip',
                    component: Vip
                },
                {
                    path: '/circle',
                    component: Circle
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