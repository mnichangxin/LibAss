import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Icon} from 'react-fa'
import styles from './page.less'

import {Aside} from '../aside/aside.js'
import {Section} from '../section/section.js'
import {BookInfo} from '../bookinfo/bookinfo.js'
import {BookShelves} from '../bookshelves/bookshelves.js'

class Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            routes: [
                {
                    path: '/bookinfo',
                    component: BookInfo
                },
                {
                    path: '/bookshelves',
                    component: BookShelves
                },
                {
                    path: '/one',
                    component: BookInfo
                },
                {
                    path: '/two',
                    component: BookInfo
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
                                return <Route path={route.path} component={route.component} key={index}></Route>
                            })   
                        }      
                    </div>    
                </div>
            </Router>
        )
    }
}

export {Page}