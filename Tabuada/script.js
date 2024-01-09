function gerar() {
    let num = document.querySelector('input#num')
    let tab = document.getElementById('tabuada')
    if (num.value.length == 0) {
    alert('Digite um número')
    } else {
        tab.innerHTML = '' 
        let n = Number(num.value)
            for(let r = 1; r <= 10; r++) {
                let item = document.createElement('option')
                item.text = `${n} x ${r} = ${n*r}`
                item.value = `tab${r}`  //  Para linguagens como PHP
                tab.appendChild(item)
            }

    }
}