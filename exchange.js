const input = document.querySelector('input[type = text]')
const h2 = document.querySelector('h2')
const btn = document.querySelector('.btn')
const ZAR = document.getElementById('zar')
const USDollar = document.getElementById('USDollar')


const dollarExch = async() => {
    const api = await fetch('https://api.frankfurter.app/latest?from=ZAR')
    const data1 = await api.json()
    return data1.rates.USD
}

USDollar.addEventListener('click', async() => {
    const dataval = await dollarExch()
    btn.addEventListener("click", ()=>{
        h2.textContent = input.value * dataval
        input.value = ''
    })
})
 
const NairaEhc = async() => {
    const api = await fetch('https://api.frankfurter.app/latest?from=USD')
    const data2 = await api.json()
    return data2.rates.ZAR
}

ZAR.addEventListener('click', async() => {
    const datav = await NairaEhc()
    btn.addEventListener("click", ()=>{
        h2.textContent = input.value * datav
        input.value = ''
    })
})