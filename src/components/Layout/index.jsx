import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"
import GlobalStyles from "../../styles/GlobalStyles"
import Sidebar from "../Sidebar"
import MenuBar from "../Menubar"
import { TransitionPortal } from "gatsby-plugin-transition-link"

export default function Layout({ children }) {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />
            <TransitionPortal level="top">
                <Sidebar />
            </TransitionPortal>
            <S.LayoutMain>{children}</S.LayoutMain>
            <TransitionPortal level="top">
                <MenuBar />
            </TransitionPortal>
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
