let btn = document.getElementsByTagName('input')[0]

let color = ['white','rgb(28, 36, 36)', 'white']
let i = 0
btn.onclick = () => {
    document.body.style.backgroundColor = color[i]
    i++;
    if (i > 1) {
        i = 0
    }
}