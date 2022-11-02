import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  public vRecipe:boolean=false;
  public vShopping:boolean=false;

  setRecipeVisible(recipe:boolean){
    this.vRecipe=recipe;
  }

  setShoppingVisible(shopping:boolean){
    this.vShopping=shopping;
  }
}
