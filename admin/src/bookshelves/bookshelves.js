import React from 'react'
import 'whatwg-fetch'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './bookshelves.less'

import {Section} from '../section/section.js'

class BookShelves extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const section_title = '书籍管理'
        const box_title = '书籍上架'
        const box_content = '书籍上架'

        return (
            <Section 
                section_title={section_title} 
                box_title={box_title} 
                box_content={box_content} 
            />
        )
    }
}

export {BookShelves}
