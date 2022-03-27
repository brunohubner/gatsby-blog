import React from "react"
import PropTypes from "prop-types"
// import * as S from "./styled"

export default function Profile({ children }) {
    return (
        <div className="Profile-wrapper">
            <h1>Bruno Hubner</h1>
            <h2>Full Stack Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

Profile.propTypes = {
    children: PropTypes.node.isRequired
}
