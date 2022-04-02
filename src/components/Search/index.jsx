import React from "react"
import * as S from "./styles"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from "./Hit"

const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

export default function Search() {
    return (
        <S.SearchWrapper>
            <InstantSearch
                appId={algolia.appId}
                apiKey={algolia.searchOnlyApiKey}
                indexName={algolia.indexName}
            >
                <SearchBox
                    autoFocus
                    translations={{ placeholder: "Pesquisar..." }}
                />
                <Stats
                    translations={{
                        stats(nbHits, timeSpenMs) {
                            return `${nbHits} encontrados em ${timeSpenMs}ms`
                        }
                    }}
                />
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </S.SearchWrapper>
    )
}
