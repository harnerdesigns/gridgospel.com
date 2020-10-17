import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import Image from "../../content/assets/cover.png"
import Logo from "../../content/assets/text-logo.svg"
import Pages from "../../content/assets/pages.png"

import BuyButton from "../components/BuyButton"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="The Grid Gospel - An Intro To CSS Grid" />
      <Grid>
        <Block>
          <img src={Logo} alt="The Grid Gospel" />
          <BuyButton />
        </Block>
        <img src={Image} />
      </Grid>

      <Column style={{ background: "white", width: "100%" }}>
        <Block>
          <p>
            CSS Grid may seem scary and daunting at first, but it doesn't have
            to be!
          </p>
          <p>
            Order{" "}
            <a href="https://gum.co/grid-gospel">The Grid Gospel</a>{" "}
            Today And Receive:
          </p>
          <ul>
            <li>20+ Pages of CSS Grid Awesome-ness</li>
            <li>Live Code Examples Available Through CodePen</li>
            <li>A Double-Sided Printable Cheatsheet</li>
          </ul>
        </Block>
      </Column>

      <Grid>
        <Block>
          <img src={Pages} />
        </Block>
        <Block>
         <h1>Learn CSS Grid Today!</h1>
         <BuyButton />
        </Block>
      </Grid>
    </Layout>
  )
}

export default BlogIndex

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
    display: block;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`

const Column = styled(Grid)`
  grid-template-columns: 1fr;
  padding: 5vh;
`

const Block = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  img {
    margin: 1rem;
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
