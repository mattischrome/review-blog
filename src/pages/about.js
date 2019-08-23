import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const ExamplePage = ({ data }) => {
  return (
    <Container>
      <SEO title="About Page" description="This page describes the content of mattischrome.com, the personal reviews blog of Matthew Dorey a health economist from West Sussex UK" />
      <Content>
        <h1>About</h1>
        <p>
          Hi, I'm Matt, a health economist living and working in West Sussex, UK.
        </p>
        <p>
          This is a personal blog, mostly filled with reviews of books, films and music. There are also some pictures from my modest travels around the globe.
        </p>
      </Content>
    </Container>
  )
}

export default ExamplePage
