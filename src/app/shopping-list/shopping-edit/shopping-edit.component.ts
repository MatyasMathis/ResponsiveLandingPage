
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  public newAmount;
  public newName;
  @Output() ingredients=new EventEmitter<Ingredient>();
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }
  addListItem(){
    if(this.newName!=='' && !(this.newAmount).empty){
      this.shoppingService.addableIngredient.emit({name:this.newName, amount:this.newAmount});
      this.newName='';
      this.newAmount=0;
    }
  }
}
