import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { RecipesManager } from 'src/app/services/recipes.service';
import { Recipes } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipeNew:Recipes;
   @Input()selectedIndex:number=0;
   
  
  constructor(private recipeManager:RecipesManager) { }


  ngOnInit(): void {
    
  }

  onSelected(){
    this.recipeManager.recipeSelected.emit(this.recipeManager.recipesList[this.selectedIndex]);
    
  }

}
