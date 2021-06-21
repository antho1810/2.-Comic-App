import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'heroes', component: HeroesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: 'heroe/:id', component: HeroeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
