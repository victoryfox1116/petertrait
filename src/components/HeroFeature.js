import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class Hero extends Component {
  render() {
    const image = {
      backgroundImage: 'url(../images/work/' + this.props.image + '/hero.png)'
    }
    return (
      <section style={[styles.hero, image]}>
        <div style={styles.gradient} />
        <div className='container'>
          <div style={styles.inner}>
            <h1 style={styles.title}>{this.props.headline}</h1>
          </div>
        </div>
      </section>
    )
  }
}

const styles = {
  hero: {
    position: 'relative',
    top: '-150px',
    paddingTop: '150px',
    marginBottom: '-100px',
    backgroundSize: 'cover',
    zIndex: '-1',
  },
  inner: {
    textAlign: 'center',
    padding: '80px 20px 160px',
    position: 'relative',
    zIndex: '3',

    [breakpoint.medium]: {
      padding: '80px 20px 200px'
    }
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    bottom: '0',
    backgroundImage: 'linear-gradient(transparent 30%, #3d1d90)'
  },
  title: {
    fontSize: type.tera
  }
}

export default Hero
