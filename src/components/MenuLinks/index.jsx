import React from "react"
import * as S from "./styles"
import links from "./links"

export default function MenuLinks() {
    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink to={link.url}>
                            {link.label}
                        </S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    )
}
