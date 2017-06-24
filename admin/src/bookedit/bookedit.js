import React from 'react'
import 'whatwg-fetch'
import styles from './bookedit.less'

import {Section} from '../section/section.js'

class BookEdit extends React.Component {
    constructor(props) {
        super(props)

        this.data = {
            bookId: this.props.match.params[0],
            book: {
                bookId: '0001',
                imgSrc: ''
            }
        }
    }

    render() {
        const section_title = '书籍管理'
        const box_title = '图书编辑'
        const box_content = <div className={styles.form}>
            <p>
                <span className={styles.bookId}><label>ID：</label><input type="text" placeholder="ID" /></span>
                <span className={styles.bookTitle}><label>名称：</label><input type="text" placeholder="图书名称" /></span>
                <span className={styles.bookAuthor}><label>作者：</label><input type="text" placeholder="图书作者" /></span>
            </p>
            <p>
                <span className={styles.bookCategory}>
                    <label>分类：</label>
                    <select>
                        <option>文学</option>
                        <option>科学</option>
                        <option>社会</option>
                    </select>
                    <select>
                        <option>小说</option>
                        <option>社科</option>
                        <option>名著</option>
                    </select>
                    <select>
                        <option>校园</option>
                        <option>言情</option>
                        <option>玄幻</option>
                    </select>
                </span>
                <span className={styles.bookPublish}><label>出版信息：</label><input type="text" placeholder="出版信息" /></span>
            </p>
            <div className={styles.section}>
                <div className={styles.bookLeft}>
                    <p className={styles.bookGuidance}>
                        <label>导读：</label><textarea placeholder="导读"></textarea>
                    </p>
                    <p className={styles.bookReview}>
                        <label>书评：</label><textarea placeholder="书评"></textarea>
                    </p>
                </div>
                <div className={styles.imgRight}>
                    <div className={styles.img}>
                        <img src="http://www.1tong.com/uploads/wallpaper/landscapes/273-1-1920x1200.jpg" />
                    </div>
                    <div>
                        <input type="file" />
                    </div> 
                </div>
            </div>
            <div className={styles.btn}>
                <div className={styles.submit}>提交</div>
            </div>
        </div>

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