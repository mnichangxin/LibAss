import React from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import {Icon} from 'react-fa'
import styles from './aside.less'

class Aside extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                    title: '菜单1',
                    list: [1, 2, 3],
                    isDown: false
                },
                {
                    title: '菜单2',
                    list: [4, 5, 6],
                    isDown: false
                },
                {
                    title: '菜单3',
                    list: [7, 8, 9],
                    isDown: false
                },
                {
                    title: '菜单4',
                    list: null,
                    isDown: false
                },
                {
                    title: '菜单5',
                    list: null,
                    isDown: false
                }
            ]
        }

        this.handleDrop = this.handleDrop.bind(this)
    }

    handleDrop(index) {
        let list = this.state.list;

        if (!!list[index].list) {
            list[index].isDown = !list[index].isDown
            this.setState({
                list: list
            })
        }
    }

    render() {
        const List = <ul className={styles.sideNav}>
            {
                this.state.list.map(
                    (primary, index) => {
                        return (
                            <li key={index} className={styles.primaryItem} onClick={() => this.handleDrop(index)}>
                                <a className={styles.primaryTitle}>
                                    {primary.title}
                                    {
                                        !!primary.list && (!primary.isDown?<Icon name="angle-left"/>:<Icon name="angle-down"/>)
                                    }
                                </a>
                                {primary.isDown && <CSSTransitionGroup
                                    component="div"
                                    transitionName="drop"
                                    transitionEnterTimeout={5000}
                                    transitionLeaveTimeout={3000}>
                                    <ul className={styles.menu}>
                                        {   
                                            primary.list.map(
                                                (second, index) => {
                                                    return (
                                                        <li key={index} className={styles.menuList}>
                                                            <a className={styles.menulistTitle}><Icon name="angle-right"/>{second}</a>
                                                        </li>
                                                    )
                                                }
                                            )
                                        }
                                    </ul>
                                </CSSTransitionGroup>}
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