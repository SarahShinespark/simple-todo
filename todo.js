// Create your HTML/CSS/JS files


// Display a list of items that you need to do.

// Use local storage to get/remove/add these items.
localStorage.setItem('food', 'candy');
localStorage.setItem('drink', 'soda');
localStorage.setItem('beer', 'Miller')
localStorage.setItem('cup', 'red solo cups')

const getTodoList = () => {
    var returnText = `You need: <br>`
    for (var i = 0; i < localStorage.length; i++){
        returnText += localStorage.getItem(localStorage.key(i)) + "<br>"
    }
    return returnText
}

document.getElementById('your-list').innerHTML = getTodoList()

// Create a form at the bottom of the list to add more things to your todo list

// Create the ability to check off things from your todo list. When you check things off, 
// make sure that has a strikethrough so that you know what you've already done. 
// This will probably alter the data structure you have in local storage.
