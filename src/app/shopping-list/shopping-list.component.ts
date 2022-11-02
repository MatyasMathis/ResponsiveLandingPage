import { Component, OnInit, NgModule } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('alma',5),
    new Ingredient('korte',3)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

}
