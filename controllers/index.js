const lyRoute = (req, res) => {
    res.send('Hello Ly');
}

const joshRoute = (req, res) => {
    res.send('Hello Josh');
}

const odyRoute = (req, res) => {
    res.send('Hello Ody');
}

module.exports = {
    lyRoute,
    joshRoute,
    odyRoute
};