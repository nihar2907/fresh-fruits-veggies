const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const homeController = require("../app/http/controllers/homeController");

module.exports = initRoutes = (app) => {
    app.get("/" , homeController().index)
    
    app.get("/cart" , cartController().index)

    app.post("/updateCart" , cartController().update)
    
    app.get("/login" , authController().login)
    
    app.get("/register" , authController().register)
}