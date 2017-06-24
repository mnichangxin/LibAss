import React from 'react'
import 'whatwg-fetch'
import styles from './bookedit.less'

import {Section} from '../section/section.js'

class BookEdit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookId: this.props.match.params[0],
            book: {
                bookId: '0001',
                imgSrc: 'http://www.1tong.com/uploads/wallpaper/landscapes/273-1-1920x1200.jpg',
                bookTitle: '百年孤独',
                bookAuthor: '马尔克斯',
                bookPublish: '南海出版公司',
                bookCategory: {
                    primary: '文学',
                    second: '小说',
                    third: '言情'
                },
                bookGuidance: '多年以后...',
                bookReview: '创世纪之后...'
            }
        }
    }

    render() {
        const section_title = '书籍管理'
        const box_title = '图书编辑'
        const box_content = <div className={styles.form}>
            <p>
                <span className={styles.bookId}><label>ID：</label><input type="text" defaultValue={this.state.book.bookId} /></span>
                <span className={styles.bookTitle}><label>名称：</label><input type="text" defaultValue={this.state.book.bookTitle} /></span>
                <span className={styles.bookAuthor}><label>作者：</label><input type="text" defaultValue={this.state.book.bookAuthor} /></span>
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
                <span className={styles.bookPublish}><label>出版信息：</label><input type="text" defaultValue={this.state.book.bookPublish} /></span>
            </p>
            <div className={styles.section}>
                <div className={styles.bookLeft}>
                    <p className={styles.bookGuidance}>
                        <label>导读：</label><textarea defaultValue={this.state.book.bookGuidance}></textarea>
                    </p>
                    <p className={styles.bookReview}>
                        <label>书评：</label><textarea defaultValue={this.state.book.bookReview}></textarea>
                    </p>
                </div>
                <div className={styles.imgRight}>
                    <div className={styles.img}>
                        <img src={this.state.book.imgSrc} />
                    </div>
                    <div className={styles.fileWrap}>
                        <div className={styles.fileButton}>选择</div>
                        <input type="file" />
                        <span className={styles.fileName}>1.jpg</span>
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