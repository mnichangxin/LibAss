import React from 'react'
import ReactDOM from 'react-dom'
import styles from './src/main/main.less'

import {Nav} from './src/nav/nav.js'
import {Aside} from './src/aside/aside.js'
import {Section} from './src/section/section'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const nav = <Nav />
        const aside = <Aside />
        const section = <Section />

        return (
            <div className={styles.container}>
                {nav}
                <div className={styles.page}>
                    <div className={styles.asideWrap}>{aside}</div>
                    <div className={styles.sectionWrap}>{section}</div>              
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)