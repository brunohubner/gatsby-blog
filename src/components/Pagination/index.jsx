import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/getThemeColor"

export default function Pagination({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage
}) {
    return (
        <S.PaginationWrapper>
            {!isFirst && (
                <AniLink
                    to={prevPage}
                    cover="true"
                    direction="left"
                    bg={getThemeColor()}
                    duration={0.6}
                >
                    ← página anterior
                </AniLink>
            )}
            <p>
                {currentPage} de {numPages}
            </p>
            {!isLast && (
                <AniLink
                    to={nextPage}
                    cover="true"
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.6}
                >
                    proxima página →
                </AniLink>
            )}
        </S.PaginationWrapper>
    )
}

Pagination.propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string
}
