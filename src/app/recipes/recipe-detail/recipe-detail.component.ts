import { Component, OnInit,Input } from '@angular/core';

import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }
  @Input() recipe:Recipes;

  
  
  
  ngOnInit(): void {
    
    }

}
