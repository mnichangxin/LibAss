import React from 'react'
import ReactDOM from 'react-dom'
import styles from './src/main/main.less'

import {Nav} from './src/nav/nav.js'
import {Aside} from './src/aside/aside.js'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const nav = <Nav />
        const aside = <Aside />

        return (
            <div className={styles.container}>
                {nav}
                <div className={styles.page}>
                    {aside}               
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)