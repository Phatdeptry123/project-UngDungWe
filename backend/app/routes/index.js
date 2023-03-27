const auth = require('./auth.routes');
const users = require('./users.routes');
const book = require('./book.routes')
const danhmuc = require('./danhmuc.routes')
exports.Start = (app) => {
    auth(app)
    users(app)
    book(app)
    danhmuc(app)
}
