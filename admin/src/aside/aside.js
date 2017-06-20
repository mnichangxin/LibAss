import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
        let list = this.state.list

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
                                {primary.isDown && <ul className={styles.menu}>
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
                                </ul>}
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

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )


// class Home extends React.Component {
//     constructor() {
//         super()
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Home</h2>
//             </div>
//         )
//     }
// }

// class About extends React.Component {
//     constructor() {
//         super()
//     }

//     render() {
//         return (
//             <div>
//                 <h2>About</h2>
//             </div>
//         )
//     }
// }

// class Topic extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             topicId: props.match.params.topicId
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h3>{this.state.topicId}</h3>
//             </div>
//         )
//     }
// }

// class Topics extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             url: props.match.url
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Topics</h2>
//                 <ul>
//                     <li>
//                         <Link to={`${this.state.url}/rendering`}>Rendering with React</Link>
//                     </li>
//                     <li>
//                         <Link to={`${this.state.url}/components`}>Components</Link>
//                     </li>
//                     <li>
//                         <Link to={`${this.state.url}/props-v-state`}>Props v. State</Link>
//                     </li>
//                 </ul>

//                 <Route path={`${this.state.url}/:topicId`} component={Topic}/>
//                 <Route exact path={this.state.url} render={() => (
//                     <h3>Please select a topic.</h3>
//                 )} />
//             </div>
//         )
//     }
// }

// class Aside extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <Router>
//                 <div>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/topics">Topics</Link></li>
//                     </ul>

//                     <hr/>

//                     <Route exact path="/" component={Home} />
//                     <Route path="/about" component={About} />
//                     <Route path="/topics" component={Topics} />
//                 </div>
//             </Router>
//         )
//     }
// }


// // const Aside = () => (
// //     <Router>
// //         <div>
// //             <ul>
// //                 <li><Link to="/">Home</Link></li>
// //                 <li><Link to="/about">About</Link></li>
// //                 <li><Link to="/topics">Topics</Link></li>
// //             </ul>

// //             <hr/>

// //             <Route exact path="/" component={Home} />
// //             <Route path="/about" component={About} />
// //             <Route path="/topics" component={Topics} />
// //         </div>
// //     </Router>
// // )

// export {Aside}