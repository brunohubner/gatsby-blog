import React from "react"
import * as S from "./styles"
import links from "./links"
import getThemeColor from "../../utils/getThemeColor"

export default function MenuLinks() {
    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink
                            cover="true"
                            direction="left"
                            bg={getThemeColor()}
                            duration={0.6}
                            to={link.url}
                            activeClassName="active"
                        >
                            {link.label}
                        </S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    )
}
