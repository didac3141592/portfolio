if(localStorage.length != 0) {
    let defaultData = document.querySelector('ul');
    defaultData.innerHTML = "";
    let itemsData = JSON.parse(localStorage.getItem('data'));
    let completedData = JSON.parse(localStorage.getItem('completed'));
    let bodyStyle = localStorage.getItem('theme');  
    for(let i=0; i<itemsData.length; i++) {
        if(completedData[i]) {
            addCompletedTask(itemsData[i]);
        }
        else addTask(itemsData[i]);
    }

    if(bodyStyle == 'light') {
        setLightTheme();
    }
}

window.addEventListener('unload', function() {
    updateUserData();
})

changeToDarkTheme();
changeToLightTheme();
addNewItem();
deleteItem();
checkItem();
filterItems();
itemsLeft();
clearCompleted();
itemsToDoYet();
filterActive(); 
filterCompleted();
filterAll();
setPointer();
showCross();
hideCross();

