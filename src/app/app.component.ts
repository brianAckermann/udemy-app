import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  bShowRecipes = true;
  bShowShopList = false;

  handleAppHeaderNavSelectEvent(s: string)
  {
    if(s === "RECIPES") {
      this.bShowRecipes = true;
      this.bShowShopList = false;
    }
    else if(s === "SHOPPING_LIST") {
      this.bShowRecipes = false;
      this.bShowShopList = true;
    }
  }
}
