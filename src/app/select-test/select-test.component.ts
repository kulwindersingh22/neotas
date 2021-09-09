import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.css']
})
export class SelectTestComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToTest1(){
    this.router.navigate(['neotas/test1']);
  }

  goToTest2(){
    this.router.navigate(['neotas/test2']);
  }

}
