module.exports = function jsTimestampToUnixTimestamp(jsTimestamp) {
    return parseInt((new Date(jsTimestamp).getTime() / 1000).toFixed(0))
}
