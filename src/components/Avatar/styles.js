import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
    .gatsby-image-wrapper {
        border-radius: 50%;
        margin: auto;
        height: 3.75rem;
        width: 3.75rem;

        ${media.lessThan("large")`
            height: 1.875rem;
            width: 1.875rem;
        `}
    }
`
