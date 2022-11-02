import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestaurantApp';
  public vRecipe:boolean=false;
  public vShopping:boolean=false;

  setRecipeVisible(recipe:boolean){
    this.vRecipe=recipe;
  }

  setShoppingVisible(shopping:boolean){
    this.vShopping=shopping;
  }
 
}
