import React from 'react'
import styles from './comp.less'

import {Section} from '../section/section.js'

class Comp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const section_title = 'Dashboard'
        const section_content = 'This is only a test.'

        return (
            <Section section_title={section_title} section_content={section_content} />
        )
    }
}

export {Comp}