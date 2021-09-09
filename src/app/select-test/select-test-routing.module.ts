import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectTestComponent } from './select-test.component';

const routes: Routes = [
  {
    path:'',
    component:SelectTestComponent
  },
  {
    path: 'test1',
    loadChildren: () => import('../test1/test1.module').then(m => m.Test1Module)
  },
  {
    path: 'test2',
    loadChildren: () => import('../test2/test2.module').then(m => m.Test2Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectTestRoutingModule { }
