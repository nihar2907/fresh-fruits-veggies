module.exports = cartController = () => {
    return{
        index(req, res){
            res.render("customers/cart")
        },
        update(req, res){
            if(!req.session.cart){
                req.session.cart = {
                    items : {},
                    totalQty : 0,
                    totalAmt : 0
                }
            }

            let cart = req.session.cart
            if(!cart.items[req.body._id]){
                cart.items[req.body._id] = {
                    items : req.body,
                    qty : 1,
                }
                cart.totalQty += 1
                cart.totalAmt += req.body.price
            } else{
                cart.items[req.body._id].qty += 1
                cart.totalQty += 1
                cart.totalAmt += req.body.price


            }
            res.json({ totalQty : req.session.cart.totalQty})
        }
    }
}