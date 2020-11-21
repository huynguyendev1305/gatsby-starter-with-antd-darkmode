import React from "react"

import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper"
import SEO from "../components/SEO/SEO"

const NotFoundPage = () => (
  <LayoutWrapper>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutWrapper>
)

export default NotFoundPage
