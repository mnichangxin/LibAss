import React from 'react'
import ReactDOM from 'react-dom'
import styles from './src/main/main.less'

import {Nav} from './src/nav/nav.js'
import {Page} from './src/page/page.js'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const nav = <Nav />
        const page = <Page />

        return (
            <div className={styles.container}>
                {nav}
                {page}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)