import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component'
import { LoginComponent} from './modules/home/components/login/login.component'
import { DashboardComponent } from './modules/home/components/dashboard/dashboard.component'
import { DiscoverComponent } from './modules/home/components/discover/discover.component'
import { HomePageComponent } from './modules/home/components/home-page/home-page.component'
import { GenreComponent } from './modules/home/components/genre/genre.component'
import { AccountComponent } from './modules/home/components/account/account.component'
import { MangaPageComponent } from './modules/home/components/manga-page/manga-page.component'
import { MangaViewerComponent } from './modules/home/components/manga-viewer/manga-viewer.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'discover', component: DiscoverComponent
      },
      {
        path: 'home', component: HomePageComponent
      },
      {
        path: 'genre', component: GenreComponent
      },
      {
        path: 'account', component: AccountComponent
      },
      {
        path:'mangaView',component:MangaPageComponent
      },
    ]
  },
  {
    path:'chapViewer',component:MangaViewerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
