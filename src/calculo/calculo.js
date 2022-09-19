

process.on('message', cantidad => {
    let numeros = []
    for (let i = 0 ; i < cantidad; i++){
        numeros.push(Math.floor(Math.random() * (999) + 1))
    }
    const resultado = {}
    numeros.forEach(el => (resultado[el] = resultado[el] + 1 || 1))
    /* const datos = {
        max: Math.max(...resultado),
        min:Math.min(...numeros),
        resultado: {...resultado} */
    process.send(resultado)
    process.exit()
})
