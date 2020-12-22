function setLightTheme() {
    document.body.classList.remove('body-dark-theme');
    document.body.classList.add('body-light-theme');
    document.body.id = 'light';
    let banner = document.querySelector('.banner-dark-theme');
    banner.classList.remove('banner-dark-theme');
    banner.classList.add('banner-light-theme');
    let container = document.querySelectorAll('.container-dark-theme');
    container.forEach(element => {
        element.classList.remove('container-dark-theme');
        element.classList.add('container-light-theme');
    });
    let colorOne = document.querySelectorAll('.color-dark-theme-one');
    colorOne.forEach(element => {
        element.classList.remove('color-dark-theme-one');
        element.classList.add('color-light-theme-one');
    });
    let colorTwo = document.querySelectorAll('.color-dark-theme-two');
    colorTwo.forEach(element => {
        element.classList.remove('color-dark-theme-two');
        element.classList.add('color-light-theme-two');
    });
    let colorThree = document.querySelectorAll('.color-dark-theme-three');
    colorThree.forEach(element => {
        element.classList.remove('color-dark-theme-three');
        element.classList.add('color-light-theme-three');
    });
    let colorFour = document.querySelectorAll('.color-dark-theme-four');
    colorFour.forEach(element => {
        element.classList.remove('color-dark-theme-four');
        element.classList.add('color-light-theme-four');
    });
    let borderBottom = document.querySelectorAll('.border-bottom-dark-theme');
    borderBottom.forEach(element => {
        element.classList.remove('border-bottom-dark-theme');
        element.classList.add('border-bottom-light-theme')
    });
    let borderBotton = document.querySelectorAll('.border-button-dark-theme');
    borderBotton.forEach(element => {
        element.classList.remove('border-button-dark-theme');
        element.classList.add('border-button-light-theme');
    });
    let buttonToLight = document.querySelector('#to-light-theme');
    buttonToLight.classList.add('d-none');
    let buttonToDark = document.querySelector('#to-dark-theme');
    buttonToDark.classList.remove('d-none');
}
function setDarkTheme() {
    document.body.classList.remove('body-light-theme');
    document.body.classList.add('body-dark-theme');
    document.body.id = 'dark';
    let banner = document.querySelector('.banner-light-theme');
    banner.classList.remove('banner-light-theme');
    banner.classList.add('banner-dark-theme');
    let container = document.querySelectorAll('.container-light-theme');
    container.forEach(element => {
        element.classList.remove('container-light-theme');
        element.classList.add('container-dark-theme');
    });
    let colorOne = document.querySelectorAll('.color-light-theme-one');
    colorOne.forEach(element => {
        element.classList.remove('color-light-theme-one');
        element.classList.add('color-dark-theme-one');
    });
    let colorTwo = document.querySelectorAll('.color-light-theme-two');
    colorTwo.forEach(element => {
        element.classList.remove('color-light-theme-two');
        element.classList.add('color-dark-theme-two');
    });
    let colorThree = document.querySelectorAll('.color-light-theme-three');
    colorThree.forEach(element => {
        element.classList.remove('color-light-theme-three');
        element.classList.add('color-dark-theme-three');
    });
    let colorFour = document.querySelectorAll('.color-light-theme-four');
    colorFour.forEach(element => {
        element.classList.remove('color-light-theme-four');
        element.classList.add('color-dark-theme-four');
    });
    let borderBottom = document.querySelectorAll('.border-bottom-light-theme');
    borderBottom.forEach(element => {
        element.classList.remove('border-bottom-light-theme');
        element.classList.add('border-bottom-dark-theme')
    });
    let borderBotton = document.querySelectorAll('.border-button-light-theme');
    borderBotton.forEach(element => {
        element.classList.remove('border-button-light-theme');
        element.classList.add('border-button-dark-theme');
    });
    let buttonToLight = document.querySelector('#to-light-theme');
    buttonToLight.classList.remove('d-none');
    let buttonToDark = document.querySelector('#to-dark-theme');
    buttonToDark.classList.add('d-none');
}
function changeToLightTheme() {
    let button = document.querySelector('#to-light-theme');
    button.addEventListener('click', function(){
        setLightTheme();
    })
}
function changeToDarkTheme() {
    let button = document.querySelector('#to-dark-theme');
    button.addEventListener('click', function(){
        setDarkTheme();
    })
}
function addNewItem() {
    let itemToAdd = document.querySelector('input');
    itemToAdd.addEventListener('keypress', function(e) {
        if(e.key != 'Enter') {
            doNone();
        }
        else {
            if(!itemToAdd.value) {
                emptyTask();
            }
            else {
                addTask(itemToAdd.value);
            }
        }
    });
}
function deleteItem() {
    let itemToDelete = document.querySelectorAll('.delete-task');
    itemToDelete.forEach(element => {
        element.addEventListener('click', function() {
            deleteTask(this.parentNode);
            itemsToDoYet();
        })
    });
}
function doNone() {
}
function emptyTask() {
    alert('You cannot add an empty task to you to-do list');
}
function addTask(task) {
    let list = document.querySelector('ul');
    let newItem = document.createElement('li');
    let borderButton;
    newItem.classList.add('active-task');
    if(document.body.id === 'dark') {
        newItem.classList.add('color-dark-theme-one');
        newItem.classList.add('border-bottom-dark-theme');
        borderButton = 'border-button-dark-theme';
    }
    else {
        newItem.classList.add('color-light-theme-one');
        newItem.classList.add('border-bottom-light-theme');
        borderButton = 'border-button-light-theme';
    }
    newItem.innerHTML = '<label class="checkbox-container"><span class="pointer">'+ task +'</span><input class="checkbox" type="checkbox"><span class="checkmark ' + borderButton +'"></span><button class="d-none f-right delete-task"><img src="images/icon-cross.svg" alt=""></button></label>';
    list.appendChild(newItem);
    let input = document.querySelector('input');
    input.value = "" 
    itemsToDoYet();
    addDeleteTaskEvent();
    addCompleteTaskEvent();
    showCross();
    hideCross();
    setPointer();
    updateUserData();
}   
function addCompletedTask(task) {
    let list = document.querySelector('ul');
    let newItem = document.createElement('li');
    let borderButton;
    newItem.classList.add('completed-task');
    if(document.body.id === 'dark') {
        newItem.classList.add('color-dark-theme-one');
        newItem.classList.add('border-bottom-dark-theme');
        borderButton = 'border-button-dark-theme';
    }
    else {
        newItem.classList.add('color-light-theme-one');
        newItem.classList.add('border-bottom-light-theme');
        borderButton = 'border-button-light-theme';
    }
    newItem.innerHTML = `<label class="checkbox-container"><span class="pointer">${task}</span><input class="checkbox" type="checkbox" checked><span class="checkmark ${borderButton}"></span><button class="d-none f-right delete-task"><img src="images/icon-cross.svg" alt=""></button></label>`;
    list.appendChild(newItem);
    let input = document.querySelector('input');
    input.value = "" 
    itemsToDoYet();
    addDeleteTaskEvent();
    addCompleteTaskEvent();
    showCross();
    hideCross();
    setPointer();
    updateUserData();
}   
function deleteTask(task) {
    task.parentNode.remove();
    updateUserData();
}
function updateUserData() {
    let itemsArray = [];
    let completedArray = [];
    let list = document.querySelectorAll('li');
    let bodyStyle = document.body.id;
    list.forEach(element => {
        itemsArray.push(element.outerText);
        completedArray.push(element.classList.contains('completed-task'));
    }); 
    localStorage.setItem('data', JSON.stringify(itemsArray));
    localStorage.setItem('completed', JSON.stringify(completedArray));
    localStorage.setItem('theme', bodyStyle);

}   


function checkItem() {
    let itemToCheck = document.querySelectorAll('.checkbox');
    itemToCheck.forEach(element => {
        element.addEventListener('click', function() {
            if(element.checked) {
                completeTask(this.parentNode);
            }
            else { 
                uncompleteTask(this.parentNode);
            }
        }) 
    }); 
    let secondItemToCheck = document.querySelectorAll('.pointer');
    secondItemToCheck.forEach(element => {
        element.addEventListener('click', function() {
            let li = element.parentNode;
            let children = li.children;
            let checkbox = children[0];
            if(checkbox.checked) {
                checkbox.checked = false;
                uncompleteTask(this.parentNode);
            }
            else {
                checkbox.checked = true;
                completeTask(this.parentNode);

            }
        })
        
    });
}
function filterItems() {
    let buttonActive = document.querySelector('#active-to-do');
    buttonActive.addEventListener('click', function() {
        filterActive();
    });
    let buttonAll = document.querySelector('#all-to-do');
    buttonAll.addEventListener('click', function() {
        filterAll();
    });
    let buttonCompleted = document.querySelector('#completed-to-do');
    buttonCompleted.addEventListener('click', function() {
        filterCompleted();
    });    
}
function itemsLeft() {
    let itemsLeft = document.querySelector('#items-left');
    itemsLeft.addEventListener('click', function() {
        filterActive();
    });
}
function clearCompleted() {
    let clearCompleted = document.querySelector('#clear-completed');
    clearCompleted.addEventListener('click', function() {
        let completedTasks = document.querySelectorAll('.completed-task');
        completedTasks.forEach(element => {
            let children = element.children;
            deleteTask(children[0]);
    });
})
}
function addDeleteTaskEvent() {
    let itemToDelete = document.querySelectorAll('.delete-task');
    itemToDelete.forEach(element => {
        element.addEventListener('click', function() {
            deleteTask(this.parentNode);
            itemsToDoYet();
    })
});

}
function addCompleteTaskEvent() {
    let itemToComplete = document.querySelectorAll('.checkbox');
    itemToComplete.forEach(element => {
        element.addEventListener('click', function() {
            if(element.checked) {
                completeTask(this.parentNode);

            }
            else {
                uncompleteTask(this.parentNode);

            }
        })
    });
}
function completeTask(task) {
    task.parentNode.classList.remove('active-task')
    task.parentNode.classList.add('completed-task');
    itemsToDoYet();
}
function uncompleteTask(task) {
    task.parentNode.classList.remove('completed-task');
    task.parentNode.classList.add('active-task')
    itemsToDoYet();

}
function itemsToDoYet() {
    let items = document.querySelectorAll('.active-task');
    let counter = items.length;
    let itesmLeft = document.querySelector('#items-left');
    itesmLeft.innerHTML = counter + ' items left';
}
function filterAll() {
    let buttonActive = document.querySelector('#active-to-do');
    let buttonCompleted = document.querySelector('#completed-to-do');
    let buttonAll = document.querySelector('#all-to-do');      
    buttonAll.classList.add('filter-active');
    buttonActive.classList.remove('filter-active');
    buttonCompleted.classList.remove('filter-active');
    allTasks = document.querySelectorAll('li');
    allTasks.forEach(element => {
        element.style.display = 'inherit';
    });
}
function filterActive() {
    let buttonActive = document.querySelector('#active-to-do');
    let buttonCompleted = document.querySelector('#completed-to-do');
    let buttonAll = document.querySelector('#all-to-do');  
    buttonActive.classList.add('filter-active');  
    buttonAll.classList.remove('filter-active');
    buttonCompleted.classList.remove('filter-active');
    allTasks = document.querySelectorAll('li');
    allTasks.forEach(element => {
        element.style.display = 'none';
    });
    activeTasks = document.querySelectorAll('.active-task');
    activeTasks.forEach(element => {
        element.style.display = 'inherit';   
    });
}
function filterCompleted() {
    let buttonActive = document.querySelector('#active-to-do');
    let buttonCompleted = document.querySelector('#completed-to-do');
    let buttonAll = document.querySelector('#all-to-do');
    buttonCompleted.classList.add('filter-active');
    buttonActive.classList.remove('filter-active');
    buttonAll.classList.remove('filter-active');
    allTasks = document.querySelectorAll('li');
    allTasks.forEach(element => {
        element.style.display = 'none';
    });
    completedTasks = document.querySelectorAll('.completed-task');
    completedTasks.forEach(element => {
        element.style.display = 'inherit';
    });
}
function setPointer() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        })
    });
    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        }) 
    });
    let li = document.querySelectorAll('.pointer');
    li.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        })
    });
}
function showCross(){
    let li = document.querySelectorAll('.checkbox-container');
    li.forEach(element => {
        element.addEventListener('mouseover', function() {
            let crossButton = element.children;
            crossButton[3].style.display = 'inherit'; 
        })
    });
}
function hideCross(){
    let li = document.querySelectorAll('.checkbox-container');
    li.forEach(element => {
        element.addEventListener('mouseleave', function() {
            let crossButton = element.children;
            crossButton[3].style.display = 'none';
        })   
    });
}

