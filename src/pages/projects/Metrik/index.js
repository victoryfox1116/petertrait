import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ListBlock from '../../../components/ListBlock'
import GridBlock from '../../../components/GridBlock'
import Media from '../../../components/Media'
import Vimeo from '../../../components/Vimeo'
import Button from '../../../components/Button'

import IntroContent from './intro.md'
import LearnContent from './learn.md'

class Metrik extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.metrik,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    const involvement = [
      { name: 'Handcrafted letterforms on paper' },
      { name: 'Glyph design within Illustrator' },
      { name: 'Font creation with Glyphs' }
    ]
    return (
      <div>
        <HeroFeature headline='Metrik: a geometric typeface' image='metrik' color={color.metrik}/>
        <Container>
          <Column width='third'>
            <Button text='Download coming soon' icon='download' color='metrik' />
          </Column>
          <Column
            width='twoThird'
            intro='Metrik is a geometric typeface built from the ground up with the simplest of shapes.'
            content={IntroContent}>
            <ListBlock
              title='Project Involvement'
              intro="Metrik is a typeface I've created as a way to learn and appreciate typography further."
              items={involvement} />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Logo sample.' />
          <Column width='twoThird'>
            <Media
              media='image'
              url='../images/work/metrik/logo.svg'
              alt='Metrik logo written out with the Metrik typeface.' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Metrik v0.1.0 lowercase.' />
          <Column width='twoThird'>
            <Media
              media='image'
              url='../images/work/metrik/abc.svg'
              alt='Metrik lowercase sample' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Tester sample.' />
          <Column width='twoThird'>
            <Media
              media='image'
              url='../images/work/metrik/text.svg'
              alt='Sentence tester set in Metrik' />
          </Column>
        </Container>
        <hr />
        <Media
          media='image'
          url='../images/work/metrik/book.jpg'
          type='background'
          gradient='true'
          color={color.metrik} />
        <Media
          media='image'
          url='../images/work/metrik/shapes.svg'
          alt='Metrik glyphs expanded to show the geometric structure' />
        <Container>
          <Column
            width='third'
            headline='Learning by doing.' />
          <Column
            width='twoThird'
            content={LearnContent}>
            <Vimeo url='https://player.vimeo.com/video/132186891?color=00bc6c&title=0&byline=0&portrait=0' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Metrik
