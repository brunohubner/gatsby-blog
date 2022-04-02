import React from "react"
import * as S from "./styles"
import links from "./links"
import icons from "./icons"

export default function SocialLinks() {
    return (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {links.map((link, i) => {
                    const Icon = icons[link.label]
                    return (
                        <S.SocialLinksItem key={i}>
                            <S.SocialLinksLink
                                href={link.url}
                                title={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <S.IconWrapper>
                                    <Icon />
                                </S.IconWrapper>
                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    )
                })}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
    )
}
