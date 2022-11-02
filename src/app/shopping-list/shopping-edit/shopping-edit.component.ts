
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
  addListItem(){
    if(this.newName!=='' && !(this.newAmount).empty){
      this.ingredients.emit({name:this.newName, amount:this.newAmount});
      this.newName='';
      this.newAmount=0;
    }
  }
}
