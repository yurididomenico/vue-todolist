// JAVASCRIPT //

console.log("YDD");

/*
To Do List.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

var app = new Vue
(
    {
        el: '#root',
        data:
        {
            text: "",
            todoList:
            [
                {
                    text: 'task_1',
                    done: true
                },
                {
                    text: 'task_2',
                    done: false
                },
                {
                    text: 'task_3',
                    done: false
                }
            ]
        },

        methods:
        {
            addElement()
            {
                this.todoList.push({text: this.text, done: false});
            },

            deleteElement(index)
            {
                //Rimuovo oggetto dall'array
                this.todoList.splice(index, 1);
            },

            todoCompleted(index)
            {
                //modifico lo stato della proprietà
                if(this.todoList[index].done == false)
                {
                    this.todoList[index].done = true;
                }
                else
                {
                    this.todoList[index].done = false;
                }
            },

            refresh()
            {
                location.reload()
            }
        }
    }
)




















// ----- FINE :) -----