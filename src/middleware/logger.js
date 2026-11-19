export default function (req, res, next){
    console.log(`Uma requisição foi feita: body: ${req.body.nome}, params: ${res.params.id}`);
    next()
}