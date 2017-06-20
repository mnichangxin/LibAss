import React from 'react'
import {Icon} from 'react-fa'
import styles from './section.less'

class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.section}>
                <div className={styles.sectionMain}>
                    <div className={styles.sectionTitle}></div>
                    <div className={styles.sectionContent}></div>
                </div>
            </div>
        )
    }
}

export {Section}