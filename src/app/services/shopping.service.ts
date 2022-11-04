import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    ingredients:Ingredient[]=[
        new Ingredient('alma',5),
        new Ingredient('korte',3)
      ];
      addableIngredient=new EventEmitter<Ingredient>;
      addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
      }
}