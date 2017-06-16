import React from 'react'
import styles from './nav.less'

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.data = {
            
        }
    }

    render() {
        return (
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <a href="/" className={styles.logoA}>AssLib Admin</a>
                </div>
                <div className={styles.user}>
                    <div className={styles.username}>
                        <span>admin</span>
                    </div>
                    <div className={styles.exit}>
                        <span>退出</span>
                    </div>
                </div>
            </div>
        )
    }
}

export {Nav}