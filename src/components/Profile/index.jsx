import React from "react"
import * as S from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

export default function Profile() {
    const {
        site: {
            siteMetadata: { author, position, description }
        }
    } = useStaticQuery(graphql`
        query SiteMetadata {
            site {
                siteMetadata {
                    author
                    position
                    description
                }
            }
        }
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink to="/">
                <Avatar />
                <S.ProfileAuthor>
                    {author}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}
