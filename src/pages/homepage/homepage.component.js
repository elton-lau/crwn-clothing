import React from 'react'
import { withRouter } from 'react-router'

import './homepage.styles.scss'

import Directory from '../../components/directory/directory.component'

import { HomePageContainer } from './homepage.styles'

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

export default withRouter(HomePage)
