import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import CookieConsent from "@modules/layout/components/cookie-consent"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <main className="relative flex-grow">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default Layout
