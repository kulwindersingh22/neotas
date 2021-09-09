import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   redirectTo:'neotas',
   pathMatch:'full'
  },
  {
    path: 'neotas',
    loadChildren: () => import('./select-test/select-test.module').then(m => m.SelectTestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
