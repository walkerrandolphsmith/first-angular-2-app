import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
    items = [];
    constructor() {
        this.items = [
            { name: 'one' },
            { name: 'two' },
            { name: 'three' },
            { name: 'four' },
            { name: 'five' }
        ];
    }
    
    getItems() {
        return this.items;
    }
}