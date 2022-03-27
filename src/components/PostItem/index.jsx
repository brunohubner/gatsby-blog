import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"

export default function PostItem({ children }) {
    return (
        <S.PostItemLink>
            <S.PostItemWrapper>
                <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
                <S.PostItemInfo>
                    <S.PostItemDate>
                        27 de Março de 2022 • 4 min de leitura
                    </S.PostItemDate>
                    <S.PostItemTitle>
                        Algumas razões para você ter sua própria plataforma ao
                        invés de soluções como o Medium.
                    </S.PostItemTitle>
                </S.PostItemInfo>
            </S.PostItemWrapper>
        </S.PostItemLink>
    )
}

PostItem.propTypes = {
    children: PropTypes.node.isRequired
}
