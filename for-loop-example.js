function geeks() {
    let obj = {Name: 'Join', age: 18, point: 3000};
    for (let i = 0; i <= 10; i = i + 2) {
        console.log(i + ' ')
    }
    for (let i of ['Phu Tho', 19, 456]) {
        console.log(i + ' ');
    }
    for (let i in obj) {
        console.log(obj[i] + ' ');
    }
}
geeks()