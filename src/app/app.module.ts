import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './modules/home/components/login/login.component';
import { DashboardComponent } from './modules/home/components/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './store/reducers/app.reducers'
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { DiscoverComponent } from './modules/home/components/discover/discover.component';
import { GenreComponent } from './modules/home/components/genre/genre.component';
import { AccountComponent } from './modules/home/components/account/account.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { MangaPageComponent } from './modules/home/components/manga-page/manga-page.component';
import { MangaViewerComponent } from './modules/home/components/manga-viewer/manga-viewer.component';
import { SearchComponent } from './modules/home/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    DiscoverComponent,
    GenreComponent,
    AccountComponent,
    HomePageComponent,
    MangaPageComponent,
    MangaViewerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaV3Module,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({reducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LdJC_kZAAAAACIaPRtUIB0M8Vd6u459oZGf3csY' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
