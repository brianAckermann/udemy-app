import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>(); 

  recipes: Recipe[] = [
    new Recipe( 'Peas on Toast', 'Toast with peas in a white flour gravy', 'https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/98/22/picftMJDs.jpg')
,    new Recipe( 'Cheese Sandwich', 'A sandwich made with cheese', 'https://www.telegraph.co.uk/multimedia/archive/03268/Cheese_sandwich_AJ_3268260b.jpg')
,    new Recipe( 'Avocado Toast', 'Toast with avocados', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ&w=800&c=sc&poi=face&q=60')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleRecipeSelectedEvent(r: Recipe) {
    
    console.log ('handling recipe selected event for  list level:'+ r.name)
    this.recipeSelectedEvent.emit(r);
  }

}
