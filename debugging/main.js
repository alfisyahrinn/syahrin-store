let asu = document.getElementById("sotot")
asu.innerHTML = "hello world"

function anjay() {
    let tombol = document.getElementById("meden")
    tombol.innerHTML = "wait"
    setTimeout(() => {
        tombol.innerHTML = "sudah terbeli"
        tombol.style.backgroundColor = "red"
    }, 5000);
}