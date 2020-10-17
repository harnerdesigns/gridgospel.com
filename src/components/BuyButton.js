/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const BuyButton = () => {


  return (
    <Button
          className="buy-button"
          href="https://gum.co/grid-gospel?wanted=true"
          target="_blank"
        >
          Buy Now &raquo;
        </Button>
  )
}

const Button = styled.a`

padding: 1rem;
  background: var(--color-heading-black);
  color: var(--color-accent); 
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 900; font-size: 1.5rem;

`

export default BuyButton
