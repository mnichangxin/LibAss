import React from 'react'
import ReactDOM from 'react-dom'
import styles from './src/main/main.less'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        let container = styles.container

        return (
            <div className={container}></div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
)