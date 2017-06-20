import React from 'react'
import ReactDOM from 'react-dom'
import styles from './src/main/main.less'

import {Nav} from './src/nav/nav.js'
import {Aside} from './src/aside/aside.js'
import {Comp} from './src/comp/comp.js'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const nav = <Nav />
        const aside = <Aside />
        const comp = <Comp />

        return (
            <div className={styles.container}>
                {nav}
                <div className={styles.page}>
                    <div className={styles.asideWrap}>{aside}</div>
                    <div className={styles.sectionWrap}>{comp}</div>              
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)