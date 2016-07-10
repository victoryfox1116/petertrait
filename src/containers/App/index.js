import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Home from '../../containers/Home'
import Header from '../../components/Header'

import vars from '../../vars'
import styles from './styles.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme : {
        primary: 'purple',
        secondary: 'teal'
      }
    }
  }

  render() {
    return (
      <div styleName='container'>
        <Header logoColor={this.state.secondary}/>
        <Home/>
      </div>
    )
  }
}

export default CSSModules(App, styles)
