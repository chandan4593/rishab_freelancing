const farmers = require("./farmers");

const customers = require("./customers");

const delvery = require("./delvery");

module.exports = {
    ...farmers,
    ...customers,
    ...delvery
}