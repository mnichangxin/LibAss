import React from 'react'
import styles from './aside.less'

class Aside extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                    title: '菜单1',
                    list: [1, 2, 3]
                },
                {
                    title: '菜单2',
                    list: [4, 5, 6]
                },
                {
                    title: '菜单3',
                    list: [7, 8, 9]
                },
                {
                    title: '菜单4',
                    list: null
                },
                {
                    title: '菜单5',
                    list: null
                }
            ]
        }
    }

    render() {
        const List = <ul className={styles.sideNav}>
            {
                this.state.list.map(
                    (primary, index) => {
                        return (
                            <li key={index} className={styles.primaryItem}>
                                <a className={styles.primaryTitle}>{primary.title}</a>
                                {
                                    !!primary.list 
                                    ?(<ul className={styles.menu}>
                                        {
                                            primary.list.map(
                                                (second, index) => {
                                                    return (
                                                        <li key={index} className={styles.menuList}>
                                                            <a className={styles.menulistTitle}>second.title</a>
                                                        </li>
                                                    )
                                                }
                                            )
                                        }
                                    </ul>)
                                    :(null)   
                                }
                            </li>
                        )
                    }
                )
            }
        </ul>  

        return (
            <div className={styles.aside}>
                {List}
            </div>
        )
    }
}

export {Aside}