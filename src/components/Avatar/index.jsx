import React from "react"
import * as S from "./styles"
import { useStaticQuery, graphql } from "gatsby"

export default function Avatar() {
    const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}
