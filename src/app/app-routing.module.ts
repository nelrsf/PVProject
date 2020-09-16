import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoSystemComponent } from './components/auto-system/auto-system.component';
import { LoadlistComponent } from './components/elements-features/loadlist/loadlist.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'auto-system',
    component: AutoSystemComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'load-list',
    component: LoadlistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
