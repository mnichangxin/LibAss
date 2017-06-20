import React from 'react'
import {Icon} from 'react-fa'
import styles from './section.less'

class Section extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            section_title: props.section_title,
            section_content: props.section_content
        }
    }

    render() {
        return (
            <div className={styles.section}>
                <div className={styles.sectionMain}>
                    <div className={styles.sectionTitle}>{this.state.section_title}</div>
                    <div className={styles.sectionContent}>{this.state.section_content}</div>
                </div>
            </div>
        )
    }
}

export {Section}