


let input = prompt("what would u like to do?");

//make list
const todos = ['Clean', 'Eat Pho'];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('list was typed, here it is:');
        for (let i = 0; i < todos.length; i++) {
            console.log(i + ": " + todos[i]);
        }
    } else if (input === 'new') {
        const newTodo = prompt("what is the new todo?");
        //add tot he end of array
        todos.push(newTodo);
        console.log('new todo added!')
    } else if (input === 'delete') {
        const index = parseInt(prompt("enter an index to delete"));

        //check if its a valid index
        if (Number.isNaN(index)) {
            console.log('Invalid index')
        } else {
            console.log('task at ' + index + " is to be deleted");
            //will delete the element
            const deleted = todos.splice(index, 1);
            console.log(deleted + " was deleted successfully!");
        }

    }

    input = prompt("what would u like to do?");

}

console.log("YOU QUIT THE APP");