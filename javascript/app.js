let contador = 0
let sorte = parseInt(Math.random() * 9 + (1))// 0 a 9

addEventListener("click", (e) => {
    let num = e.target.id
    const div = document.getElementById(num);
    if (contador < 3) {
        //div.style.border = '2px solid black';
        if (num == sorte) {
            div.style.backgroundColor = 'rgb(10 200 20)';
            alert("parabens!!! você ganhou")
            zerar()

        }
        else {
            div.style.backgroundColor = 'red';
            //div.innerHTML=`<img url="../img/foto.jpg">`
            contador++
        }
    }
    else {
        div.style.backgroundColor = 'red';
        alert("nao foi dessa vez!!!")
        zerar()
    }
})


function zerar() {
    for (i = 1; i <= 9; i++) {
        const div = document.getElementById(i)
        div.style.backgroundColor = ''
        contador = 0
    }
}