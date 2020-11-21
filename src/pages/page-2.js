import React from "react"
import { Link } from "gatsby"

import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper"
import SEO from "../components/SEO/SEO"

const SecondPage = () => (
  <LayoutWrapper>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </LayoutWrapper>
)

export default SecondPage
