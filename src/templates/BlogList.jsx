import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostItem from "../components/PostItem"
import { graphql } from "gatsby"
import Pagination from "../components/Pagination"
import * as S from "../components/ListWrapper/styles"

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        background
                        category
                        date(
                            locale: "pt-br"
                            formatString: "DD [de] MMMM [de] YYYY"
                        )
                        description
                        title
                    }
                    timeToRead
                }
            }
        }
    }
`

export default function BlogList(props) {
    const postList = props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
            <SEO title="Home" />
            <S.ListWrapper>
                {postList.map(
                    ({
                        node: {
                            frontmatter: {
                                background,
                                category,
                                date,
                                description,
                                title
                            },
                            timeToRead,
                            fields: { slug }
                        }
                    }) => (
                        <PostItem
                            key={slug}
                            slug={slug}
                            background={background}
                            category={category}
                            date={date}
                            timeToRead={timeToRead}
                            title={title}
                            description={description}
                        />
                    )
                )}
            </S.ListWrapper>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                numPages={numPages}
            />
        </Layout>
    )
}
