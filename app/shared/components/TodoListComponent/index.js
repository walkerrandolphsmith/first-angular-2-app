import { Component } from '@angular/core';
import { ItemsService } from './../../services/items';

@Component({
    selector: 'to-do-list',
    template: `
        <div *ngFor="let item of items">
            <span>{{item.name}}</span>
        </div>
    `,
    providers: [ItemsService]
})
export class TodoListComponent {


    static get parameters() {
        return [[ItemsService]];
    }

    constructor(_itemsService) {
        this.items = _itemsService.getItems();
    }
}