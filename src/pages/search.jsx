import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Search from "../components/Search"

export default function SearchPage({ children }) {
    return (
        <Layout>
            <SEO title="Sobre" />
            <Search />
        </Layout>
    )
}

SearchPage.propTypes = {
    children: PropTypes.node.isRequired
}
