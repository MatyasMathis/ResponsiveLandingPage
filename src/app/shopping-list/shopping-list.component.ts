import { Component, OnInit, NgModule } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingService } from '../services/shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppingService) { }
 
  ngOnInit(): void {
    this.ingredients=this.shoppingService.ingredients;
    this.shoppingService.addableIngredient.subscribe(
      (ingredient:Ingredient )=>{
          this.shoppingService.ingredients.push(ingredient);
      }
    );
  }

  

}
