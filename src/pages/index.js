import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"

import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper"
import ImageLocalFluid from "../components/ImageLocalFluid/ImageLocalFluid"
import SEO from "../components/SEO/SEO"

import BtnToggleTheme from "../components/BtnToggleTheme/BtnToggleTheme"

const IndexPage = () => (
  <LayoutWrapper>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <p>aaaaaaaaaaaaaaaaaaaaaxxxx</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <ImageLocalFluid filename="gatsby-astronaut.png" alt="demo" />
    </div>
    <BtnToggleTheme></BtnToggleTheme>
    <div>
      <Button>Hello</Button>
    </div>
    <br></br>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </LayoutWrapper>
)

export default IndexPage
