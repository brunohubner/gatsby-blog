import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import * as S from "../components/Post/styles"

export default function BlogPost() {
    const { markdownRemark: post } = useStaticQuery(graphql`
        query Post($slug: String) {
            markdownRemark(fields: { slug: { eq: $slug } }) {
                frontmatter {
                    title
                    description
                    date(
                        locale: "pt-br"
                        formatString: "DD [de] MMMM [de] YYYY"
                    )
                }
                html
                timeToRead
            }
        }
    `)
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <S.PostHeader>
                <S.PostDate>
                    {post.frontmatter.date} • {post.frontmatter.timeToRead} min
                    de leitura
                </S.PostDate>
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostDescription>
                    {post.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.MainContent>
        </Layout>
    )
}
