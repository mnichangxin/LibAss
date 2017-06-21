import React from 'react'
import {Icon} from 'react-fa'
import styles from './section.less'

class Section extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            section_title: props.section_title,
            box_title: props.box_title,
            box_content: props.box_content
        }
    }

    render() {
        return (
            <div className={styles.section}>
                <div className={styles.sectionMain}>
                    <div className={styles.sectionTitle}>{this.state.section_title}</div>
                    <div className={styles.sectionContent}>
                        <div className={styles.boxTitle}>
                            {this.state.box_title}
                        </div>
                        <div className = {styles.boxContent}>
                            {this.state.box_content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {Section}