let name = ['Olma', 'Banan', 'Gilos', 'Shaftoli']

alert(`Boshlanishida Arrayning uzinligi: ${name.length}`)

console.log(name);

let Confirm = confirm('sizni arrayingizni malumotlarni olib tashlomoqchimiz')

if (Confirm === true) {
    name.pop()
    alert(`Arrayning uzunligi: ${name.length}`)
    console.log(name);
}

else{
    alert(`Arrayning uzunligi: ${name.length}`)
    console.log(name);
}