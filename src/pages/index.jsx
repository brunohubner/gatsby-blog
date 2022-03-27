import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

export default function IndexPage() {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/" activeStyle={{ color: "red" }}>
                        Home
                    </Link>
                </li>{" "}
                <li>
                    <Link to="/about">About</Link>
                </li>{" "}
            </ul>
        </Layout>
    )
}
