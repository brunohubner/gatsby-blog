import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"
import * as S from "./styles"
import GlobalStyles from "../../styles/GlobalStyles"
import Sidebar from "../Sidebar"

export default function Layout({ children }) {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />
            <Sidebar />
            <S.LayoutMain>{children}</S.LayoutMain>
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
