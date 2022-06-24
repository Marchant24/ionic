import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },{path: '',
redirectTo: 'home',
pathMatch: 'full'},
  {
    path: 'ilumination',
    loadChildren: () => import('./ilumination/ilumination.module').then( m => m.IluminationPageModule)
  },
  {
    path: 'ventilation',
    loadChildren: () => import('./ventilation/ventilation.module').then( m => m.VentilationPageModule)
  },
  {
    path: 'segurity',
    loadChildren: () => import('./segurity/segurity.module').then( m => m.SegurityPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'gobierno',
    loadChildren: () => import('./gobierno/gobierno.module').then( m => m.GobiernoPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'educacion',
    loadChildren: () => import('./educacion/educacion.module').then( m => m.EducacionPageModule)
  },  {
    path: 'sensor',
    loadChildren: () => import('./sensor/sensor.module').then( m => m.SensorPageModule)
  },

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}