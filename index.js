const input = document.querySelector('input[type = text]')
const h2 = document.querySelector('h2')
const btn2 = document.querySelector('.btn2')
const btn = document.querySelector('.btn')
const ZAR = document.querySelector('.usd')
const USDollar = document.querySelector('.spec')


const dollarExch = async() => {
    const api = await fetch('https://api.frankfurter.app/latest?from=ZAR')
    const data1 = await api.json()
    return data1.rates.USD
}

ZAR.addEventListener('click', async() => {
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

USDollar.addEventListener('click', async() => {
    const datav = await NairaEhc()
    btn2.addEventListener("click", ()=>{
        h2.textContent = input.value * datav
        input.value = ''
    })
})