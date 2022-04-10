import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Search from "../components/Search"

const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_ONLY_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

export default function SearchPage() {
    return (
        <Layout>
            <SEO title="Sobre" />
            <Search algolia={algolia} />
        </Layout>
    )
}
