import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesManager } from 'src/app/services/recipes.service';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipeWasSelected:Recipes;
  
  recipes:Recipes[];

 
  
  constructor(private recipeManager:RecipesManager) { }
  
  ngOnInit(): void {
    this.recipes=this.recipeManager.recipesList;
  }

 

}
