import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"

export default function RecomendedPosts({ next, previous }) {
    return (
        <S.RecommendedWrapper>
            {previous && (
                <S.RecommendedLink
                    to={previous.fields.slug}
                    className="previous"
                >
                    {previous.frontmatter.title}
                </S.RecommendedLink>
            )}
            {next && (
                <S.RecommendedLink to={next.fields.slug} className="next">
                    {next.frontmatter.title}
                </S.RecommendedLink>
            )}
        </S.RecommendedWrapper>
    )
}

RecomendedPosts.propTypes = {
    previous: PropTypes.shape({
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        })
    }),
    next: PropTypes.shape({
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        })
    })
}
