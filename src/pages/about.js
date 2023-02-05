import * as React from 'react'
import Layout from '../components/layout.js'

const AboutPage = () => {
  return (
	  <Layout pageTitle='About'>
	  <p>Hello there, this is my site</p>
	  </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
