const username = "ayuu"
const password = "0303505"

function auth (){
    let userInput = document.getElementById('username').value
    let passwordInput = document.getElementById('password').value
    let form = document.getElementById('form')

    if(userInput == username && passwordInput == password){
        alert("Login Beerhasil!")
        form.submit()
    } else {
        alert("Login Gagal!")
    }
}