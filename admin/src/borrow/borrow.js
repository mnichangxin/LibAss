import React from 'react'
import styles from './borrow.less'

import {Section} from '../section/section.js'

class Borrow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const section_title = '预约借书'
        const box_title = '借书管理'
        const box_content = <div>This is a reserve.</div>

        return (
            <Section 
                section_title={section_title}
                box_title={box_title} 
                box_content={box_content} 
            />
        )
    }
}

export {Borrow}