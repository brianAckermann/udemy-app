import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    collapsed = true;

    @Output() appHeaderNavSelectEvent = new EventEmitter<string>();

    onHeaderSelectRecipes() {
        console.log("selected recipes header nav option.")
        this.appHeaderNavSelectEvent.emit('RECIPES');
    }

    onHeaderSelectShoppingList() {
        console.log("selected shopping list header nav option.")
        this.appHeaderNavSelectEvent.emit('SHOPPING_LIST');

    }
}