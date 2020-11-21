import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import HeaderComponent from "../Header/Header"
import FooterComponent from "../Footer/Footer"
import { Layout } from "antd"

//Import css
import "../globalStyles.css"

const { Header, Footer, Content } = Layout

const LayoutWrapper = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <Header>
        <HeaderComponent></HeaderComponent>
      </Header>
      <Content className="container-fluid">{children}</Content>
      <Footer>
        <FooterComponent></FooterComponent>
      </Footer>
    </Layout>
  )
}

export default LayoutWrapper
