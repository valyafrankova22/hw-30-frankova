// Task 1
let lis = document.getElementsByTagName('li');
for (let li of lis) {
    console.log(li);
}

//Task 2
console.log(document.getElementById(`ulId`).getElementsByTagName('li').length);


//Task 3
let elements = document.getElementsByTagName("li");
let arr = [];
for (let i = 0; i < elements.length; i++) {
    arr.push(elements[i].innerHTML);
}

console.log(arr);

