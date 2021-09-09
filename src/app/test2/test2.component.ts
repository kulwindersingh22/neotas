import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() {
    this.items = [
      {label: 'Detail', icon: 'pi pi-fw pi-user'},
      {label: 'Payment', icon: 'pi pi-fw pi-credit-card'},
      {label: 'Success', icon: 'pi pi-fw pi-check'},
  ];
  
  this.activeItem = this.items[0];
   }

  ngOnInit(): void {
  }

  continueClicked(){
    this.activeItem = this.items[1];    
  }

  creditCardClicked(){
    this.activeItem = this.items[2]; 
  }

  activateMenu(tab:any){
console.log(tab);
    this.activeItem=tab.activeItem;
  }

}
