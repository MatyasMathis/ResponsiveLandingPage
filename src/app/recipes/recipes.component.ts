import { Component, OnInit } from '@angular/core';
import { RecipesManager } from '../services/recipes.service';
import { Recipes } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesManager]
})
export class RecipesComponent implements OnInit {
  recipeSelected:Recipes;
  constructor(private recipeManager:RecipesManager) { }
  
  ngOnInit(): void {
    this.recipeManager.recipeSelected.subscribe(
      (recipe:Recipes)=>{
        this.recipeSelected=recipe;
      }
    );
  }

  
    
}
