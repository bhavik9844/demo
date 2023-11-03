var base64 = require('base-64');
var utf8 = require('utf8');
let data = localStorage.getItem("userdata");
const Tokendata = {
    UserData: data && data != null ? JSON.parse(utf8.decode(base64.decode(localStorage.getItem("userdata")))) : ""
}
export default Tokendata;