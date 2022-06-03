import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient: Ingredient;

  @ViewChild('nameInput', { static: false } ) nameInput!: ElementRef; 
  @ViewChild('amountInput', { static: false } ) amountInput!: ElementRef; 

  @Output() AddIngredientToShoppingListEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredientClicked()
  {
    console.log('add ingredient clicked')
    const ingred = new Ingredient(
      this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value);
    console.log(ingred);

    this.AddIngredientToShoppingListEvent.emit(ingred);
  }
}
