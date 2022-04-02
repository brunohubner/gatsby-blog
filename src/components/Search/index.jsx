import React from "react"
import PropTypes from "prop-types"
// import * as S from "./styles"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

export default function Search({ children }) {
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={algolia.indexName}
        >
            <SearchBox />
            <Hits />
        </InstantSearch>
    )
}

Search.propTypes = {
    children: PropTypes.node.isRequired
}
