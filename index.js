let main = document.querySelector ('#item_container');
let item = document.querySelector ('#item');
let btn = document.querySelector ('#button');


btn.addEventListener ('click', function () {
    for (let i = 20; i <=20; i++) {
        let newitem = document.createElement ('p');
        newitem.textContent = item.value;
    main.appendChild(newitem);
    
}
})

