import { EventEmitter } from "@angular/core";
import { Recipes } from "../recipes/recipe.model";

export class RecipesManager{

    public recipesList:Recipes[]=[
        new Recipes('Test recipe','This should be a description', 'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts='),
        new Recipes('Test khglhgljfe','This should be a description', 'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts='),
        new Recipes('Test recipe','This should be a description', 'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts=')
      ];

      public recipeSelected=new EventEmitter<Recipes>();
      addToRecipes(recipe:Recipes){
        this.recipesList.push(recipe);
      }
      

}