import React from "react"
import PropTypes from "prop-types"
// import * as S from "./styled"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function AboutPage({ children }) {
    return (
        <Layout>
            <SEO title="Sobre" />
            <h1>Sobre</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about" activeStyle={{ color: "red" }}>
                        About
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}

AboutPage.propTypes = {
    children: PropTypes.node.isRequired
}
