import React from 'react'
import 'whatwg-fetch'
import styles from './bookedit.less'

import {Section} from '../section/section.js'

class BookEdit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const section_title = '书籍管理'
        const box_title = '图书编辑'
        const box_content = <div>edit</div>

        return (
            <Section 
                section_title={section_title} 
                box_title={box_title} 
                box_content={box_content} 
            />
        )
    }
}

export {BookEdit}