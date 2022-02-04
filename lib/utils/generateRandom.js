module.exports = () => {
    let random = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);

    return random.toString();
};