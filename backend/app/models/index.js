const user = require("./user.models");
const roleM = require("./role.models");
const role = roleM.role
const book = require("./book")
const danhmuc = require("./danhmuc")
function innitDB (){
    roleM.initRole();
}

module.exports = {
    user,
    role,
    book,
    danhmuc,
    innitDB,
}