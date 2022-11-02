import { Component, OnInit, EventEmitter,Output } from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    
})

export class HeaderComponent{

    public recipe=false;
    public shopping=false;

    @Output() recipeV=new EventEmitter<boolean>();
    @Output() shoppingV=new EventEmitter<boolean>();

    constructor(){

    }
    ngOninit(){

    }

    onHeaderRecipe(){
        this.recipe=true;
        this.shopping=false;
        this.recipeV.emit(this.recipe);
        this.shoppingV.emit(this.shopping);
    }

    onHeaderShopping(){
        this.recipe=false;
        this.shopping=true;
        this.recipeV.emit(this.recipe);
        this.shoppingV.emit(this.shopping);
    }
}