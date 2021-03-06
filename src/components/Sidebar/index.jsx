import React from "react"
import * as S from "./styles"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

export default function Sidebar() {
    return (
        <S.SidebarWrapper>
            <Profile />
            <SocialLinks />
            <MenuLinks />
        </S.SidebarWrapper>
    )
}
