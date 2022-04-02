import React from "react"
import PropTypes from "prop-types"
// import * as S from "./styles"

export default function Search({ children }) {
    return (
        <div>
            <h1>Search Component</h1>
        </div>
    )
}

Search.propTypes = {
    children: PropTypes.node.isRequired
}
