import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PaneladdComponent } from './paneladd/paneladd.component';
import { SeriesComponent } from './series/series.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path:"",
    component: TaskComponent  },
    {
      path: "home",
      component: HomeComponent
    },
    {
      path: "form",
      component: FormComponent
    },
    {
      path:"series",
      component: SeriesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
