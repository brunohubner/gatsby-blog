import React from "react"
import PropTypes from "prop-types"
// import * as S from "./styled"
import { useStaticQuery, graphql } from "gatsby"

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
        <div className="Profile-wrapper">
            <h1>{author}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
    )
}

Profile.propTypes = {
    children: PropTypes.node.isRequired
}
