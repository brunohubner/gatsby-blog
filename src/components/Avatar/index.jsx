import React from "react"
import * as S from "./styles"
import { StaticImage } from "gatsby-plugin-image"

export default function Avatar() {
    return (
        <S.AvatarWrapper>
            <StaticImage
                src="../../images/profile-photo.png"
                alt="avatar image"
                placeholder="blurred"
            />
        </S.AvatarWrapper>
    )
}
