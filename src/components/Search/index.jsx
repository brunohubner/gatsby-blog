import React from "react"
import * as S from "./styles"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from "./Hit"
import algoliasearch from "algoliasearch/lite"

export default function Search({ algolia }) {
    const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

    return (
        <S.SearchWrapper>
            <InstantSearch
                searchClient={searchClient}
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
