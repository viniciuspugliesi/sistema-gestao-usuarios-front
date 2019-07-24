import {Component, OnInit} from '@angular/core';
import {TodoList} from '../../../../../shared/domain/todo-list';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    list: Array<TodoList> = [
        {
            id: 1,
            item: 'Book Boss Flight',
            badge: '2 Days'
        },
        {
            id: 2,
            item: 'Hit the Gym',
            badge: '3 Minutes'
        },
        {
            id: 3,
            item: 'Book Boss Flight',
            badge: '3 Minutes'
        },
        {
            id: 4,
            item: 'Hit the Gym',
            badge: '3 Minutes'
        },
        {
            id: 5,
            item: 'Book Boss Flight',
            badge: '3 Minutes'
        },
        {
            id: 6,
            item: 'Hit the Gym',
            badge: '2 Days'
        },
        {
            id: 7,
            item: 'Book Boss Flight',
            badge: '3 Minutes'
        },
        {
            id: 8,
            item: 'Hit the Gym',
            badge: '3 Minutes'
        },
        {
            id: 9,
            item: 'Book Boss Flight',
            badge: '3 Minutes'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
