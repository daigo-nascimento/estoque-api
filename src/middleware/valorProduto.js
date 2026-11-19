export default function (resq, res, next){
    let preco = req.body.preco
    if(preco < 100) {
        //chuta pra fora.
        res.send ('Não autorizado produto menor que 100')
    }else{
        next()
    }
}