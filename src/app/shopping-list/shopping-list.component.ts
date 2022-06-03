import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('oranges', 4)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  handleAddIngredientToShoppingListEvent(i: Ingredient)
  {
    console.log('handling event AddIngredientToShoppingList...');

    this.ingredients.push(i);

  }

}
