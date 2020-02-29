import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgBootstrapDemoComponent } from './ngBootstrapDemo/ngBootstrapDemo.component';
import { DataDemoComponent } from './data-demo/data-demo.component'
import { MongoDemoComponent } from './mongo-demo/mongo-demo.component'
const routes: Routes =  [
  //   { path : '', component: SearchComponent, pathMatch : 'full',  
  //   children: [
  //     { path: 'favorites', component: FavoritesComponent },
  //   ]
  // },
    { path : '', component:  NgBootstrapDemoComponent, pathMatch : 'full', },
    { path : 'dataDemo', component: DataDemoComponent, pathMatch : 'full', },

    { path : 'mongoDemo', component: MongoDemoComponent, pathMatch : 'full', },

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
