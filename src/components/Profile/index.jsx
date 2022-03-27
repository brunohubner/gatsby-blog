import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

export default function Profile({ children }) {
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
            <S.ProfileLink>
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

Profile.propTypes = {
    children: PropTypes.node.isRequired
}
