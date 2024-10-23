document.getElementById('personalizar-bolo').addEventListener('change', function () {
    // Preços base (pode modificar conforme desejar)
    let precoBase = 0;
    let precoTotal = precoBase;

    // Aqui você pode adicionar mais lógica de preços, por exemplo:
    // - Cada ingrediente, cobertura ou decoração pode ter um preço extra
    const ingredientes = document.getElementById('ingredientes').value;
    const cobertura = document.getElementById('cobertura').value;
    const decoracao = document.getElementById('decoracao').value;

    // Exemplo de acréscimos simples
    if (ingredientes === 'chocolate') precoTotal += 10;
    if (cobertura === 'ganache') precoTotal += 15;
    if (decoracao === 'flores') precoTotal += 5;

    // Atualiza o preço na tela
    document.getElementById('preco-total').innerText = `R$ ${precoTotal},00`;
});
