let main = document.querySelector ('#item_container');
let item = document.querySelector ('#item');
let btn = document.querySelector ('#button');


btn.addEventListener ('click', function () {
        let newitem = document.createElement ('p');
        newitem.classList = "one";
        newitem.textContent = item.value;
        let newCheck = document.createElement ('input')
        newCheck.type = 'checkbox';
        newCheck.classList = 'newCheck';
        newitem.appendChild(newCheck);
        main.appendChild(newitem);
        item.value = ''
})



main.addEventListener ('click', function (e) {
if (e.target.className == 'newCheck') { 
e.target.parentNode.classList = 'two'
if (e.target.className == 'newCheck' && e.target.checked == false) { 
    e.target.parentNode.classList = 'one';
    }
}
})
