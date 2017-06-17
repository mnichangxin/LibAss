import React from 'react'
import styles from './aside.less'

class Aside extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                    title: 'a',
                    list: [1, 2, 3]
                },
                {
                    title: 'b',
                    list: [4, 5, 6]
                },
                {
                    title: 'c',
                    list: [7, 8, 9]
                },
                {
                    title: 'd',
                    list: [10, 11, 12]
                }
            ]
        }
    }

    render() {
        const List = <ul>
            {
                this.state.list.map(
                    (primary, index) => {
                        return (
                            <li key={index}>
                                {primary.title}
                                <ul>      
                                    {
                                        primary.list.map(
                                            (second, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li>second.title</li>
                                                    </ul>
                                                )
                                            }
                                        )
                                    }
                                </ul>
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