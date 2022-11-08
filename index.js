const Category = require('./structures/Category')
const Option = require('./structures/Option')

const { init } = require('./database');

module.exports = { Category, Option, init }