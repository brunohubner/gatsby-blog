import React from "react"
import * as S from "./styles"
import { useStaticQuery, graphql } from "gatsby"

export default function Avatar() {
    const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}
