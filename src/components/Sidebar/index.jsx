import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

export default function Sidebar({ children }) {
    return (
        <S.SidebarWrapper>
            <Profile />
            <SocialLinks />
            <MenuLinks />
        </S.SidebarWrapper>
    )
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired
}
