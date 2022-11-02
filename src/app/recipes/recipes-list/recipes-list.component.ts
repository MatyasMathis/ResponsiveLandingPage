import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipes>();
  
  recipes:Recipes[]=[
    new Recipes('Test recipe','This should be a description', 'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts='),
    new Recipes('Test khglhgljfe','This should be a description', 'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts='),
    new Recipes('Test recipe','This should be a description', 'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts=')
  ];

 
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipes){
    
    this.recipeWasSelected.emit(recipe);
  }

}
