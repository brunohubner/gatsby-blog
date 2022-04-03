import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

*,
button,
input {
    border: 0;
    outline: 0;
    font-family: "Roboto", sans-serif;
}

html,
body,
#root {
    height: 100%;
}

body {
    background-color: var(--background);
    color: var(--postColor);
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

// Themes
body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
}

body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
}
`
