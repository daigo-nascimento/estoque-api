export default function (req, res, next){
    const inicio = Date.now();

    res.on('finish', () => {
        const duracao = Date.now() - inicio;
        const mensagem = `[LOG] ${req.method} ${req.url} - Status: ${res.statusCode} (${duracao}ms)`;
        console.log(mensagem)
    })

    next()
}