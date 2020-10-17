import React from "react"
import { Link } from "gatsby"
import BuyButton from "./BuyButton"
import styled from "styled-components"

import Logo from "../../content/assets/text-logo.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <Link to="/" className="main-heading">
      <img src={Logo} alt="The Grid Gospel" />
    </Link>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <BuyButton />
      </header>
      <main>{children}</main>
      <Footer>
        <h4>
          © {new Date().getFullYear()}{" "}
          <a href="https://www.jackharner.com">Jack Harner</a>
        </h4>
      </Footer>
      <script src="https://gumroad.com/js/gumroad.js" />
    </div>
  )
}

const Footer = styled.footer`
  background: #231f20;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;

  a,
  h4 {
    color: var(--color-accent);
    margin: 0 auto;
  }
`

export default Layout
