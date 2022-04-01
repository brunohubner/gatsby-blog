import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"
import ReactDisqusComments from "react-disqus-comments"

export default function Comments({ url, title }) {
    const completeURL = `http://127.0.0.1:8000${url}`

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="brunohubner01"
                identifier={completeURL}
                url={completeURL}
            />
        </S.CommentsWrapper>
    )
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
