import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe = new Recipe("Placeholder Sandwich", "A sandwich made of placeholder bread and placeholder cheese, smeared with placeholder condiments and a toothpick!", "https://www.telegraph.co.uk/multimedia/archive/03268/Cheese_sandwich_AJ_3268260b.jpg")
  constructor() { }

  ngOnInit(): void {
  }

  handleRecipeSelectedEvent(r: Recipe){
    console.log ('handling recipe selected event for :'+ r.name)
    this.selectedRecipe = r;
  }

}
