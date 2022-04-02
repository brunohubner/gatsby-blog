const { resolve } = require("path")
require("dotenv").config({ path: resolve(__dirname, ".env") })

module.exports = {
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
    ALGOLIA_ADMIN_KEY: process.env.ALGOLIA_ADMIN_KEY,
    ALGOLIA_INDEX_NAME: process.env.ALGOLIA_INDEX_NAME
}
