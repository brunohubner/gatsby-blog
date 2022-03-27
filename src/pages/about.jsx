import React from "react"
import PropTypes from "prop-types"
// import * as S from "./styled"

export default function AboutPage({ children }) {
    return (
        <div>
            <h1>AboutPage</h1>
        </div>
    )
}

AboutPage.propTypes = {
    children: PropTypes.node.isRequired
}
