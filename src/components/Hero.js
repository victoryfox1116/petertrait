import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { breakpoint } from '../vars'

import AnchorLink from '../components/AnchorLink'

@Radium
class Hero extends Component {
  render() {
    return (
      <section className='container'>
        <div style={styles.hero}>
          <h1>{this.props.headline}</h1>
          {this.props.link && <span style={styles.button}><AnchorLink link={this.props.link} text={this.props.text} /></span>}
        </div>
      </section>
    )
  }
}

const styles = {
  hero: {
    paddingTop: '40px',
    paddingBottom: '60px',

    [breakpoint.medium]: {
      paddingBottom: '100px'
    }
  },
  button: {
    marginTop: '60px',
    display: 'table',

    [breakpoint.medium]: {
      marginTop: '80px'
    }
  }
}

export default Hero
