/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import { breakpoints } from "../components/breakpoints"

const BuyButton = ({ label }) => {
  return (
    <Button
      className="buy-button"
      href="https://gum.co/grid-gospel"
      target="_blank"
    >
      {label || "Buy Now"} &raquo;
    </Button>
  )
}

const Button = styled.a`
  padding: 1rem;
  background: var(--color-heading-black);
  color: var(--color-accent);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 900;
  font-size: 1.25rem;
  position: relative;
  @media ${breakpoints.laptop} {
    font-size: 1.5rem;
  }
  &:after {
    content: "Only $5!";
    position: absolute;
    bottom: 0%;
    color: #000;
    font-size: 0.75em;
    left: 50%;
    transform: translate(-50%, 100%);
    width: auto;
    white-space: nowrap; 
  }
`

export default BuyButton
