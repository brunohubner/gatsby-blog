import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"
import Profile from "../Profile"

export default function Sidebar({ children }) {
    return (
        <S.SidebarWrapper>
            <Profile />
        </S.SidebarWrapper>
    )
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired
}
