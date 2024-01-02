const Menu = require("../../model/menu")

module.exports = homeController = () => {
    return{
        async index(req, res){

            const pizzas = await Menu.find();
            res.render("home" , {pizzas})


        }
    }
}