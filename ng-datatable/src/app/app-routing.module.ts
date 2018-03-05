import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'core',
    loadChildren: './core-table/core-table.module#CoreTableModule'
  },
  {
    path: 'plain',
    loadChildren: './plain-table/plain-table.module#PlainTableModule'
  },
  {
    path: 'performance',
    loadChildren: './performance/performance.module#PerformanceModule'
  },
  {
    path: 'es6',
    loadChildren: './es6-table/es6-table.module#Es6TableModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
