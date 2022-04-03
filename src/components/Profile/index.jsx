import React from "react"
import * as S from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"

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
            <S.ProfileLink
                to="/"
                cover="true"
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
            >
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
