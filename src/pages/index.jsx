import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostItem from "../components/PostItem"

export default function IndexPage() {
    return (
        <Layout>
            <SEO title="Home" />
            <PostItem
                slug="/about/"
                category="Misc"
                date="27 de Março de 2022"
                timeToRead="5"
                title="Diga não ao Medium: tenha sua própria plataforma"
                description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
            />
        </Layout>
    )
}
