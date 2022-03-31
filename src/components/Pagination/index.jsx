import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"
import { Link } from "gatsby"

export default function Pagination({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextpage
}) {
    return (
        <S.PaginationWrapper>
            {!isFirst && <Link to={prevPage}>← página anterior</Link>}
            <p>
                {currentPage} de {numPages}
            </p>
            {!isLast && <Link to={nextpage}>proxima página →</Link>}
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
