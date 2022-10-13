import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
//import { ComponenteTesteComponent } from './components/componente-teste/componente-teste.component';
//import { ChangeNumberComponent } from './components/change-number/change-number.component';
//import { DirectivesComponent } from './components/directives/directives.component';
//import { EmitterComponent } from './components/emitter/emitter.component';
//import { EventosComponent } from './components/eventos/eventos.component';
//import { IfRenderComponent } from './components/if-render/if-render.component';
//import { ParentDataComponent } from './components/parent-data/parent-data.component';
//import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';


const routes: Routes = [
  {path:'', component: FirstComponentComponent},
  {path:'list', component: ListRenderComponent},
  //{path:'teste', component: ComponenteTesteComponent},
  //{path:'change_number', component: ChangeNumberComponent},
  //{path:'change_number', component: ChangeNumberComponent},
  //{path:'directives', component: DirectivesComponent},
  //{path:'emitter', component: EmitterComponent},
  //{path:'eventos', component: EventosComponent},
  //{path:'if_render', component: IfRenderComponent},
  //{path:'parent_data', component: ParentDataComponent},
  //{path:'two_way_data_binding', component: TwoWayBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
