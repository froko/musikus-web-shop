import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';

import { ENV_PROVIDERS, environment } from '../environments/environment';

import { InstrumenteModule, InstrumenteState } from '@musikus/instrumente';
import { ShoppingCartModule, ShoppingCartState } from '@musikus/shopping-cart';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'instrumente', redirectTo: 'instrumente' },
  { path: 'shopping-cart', redirectTo: 'shopping-cart' },
  { path: '', redirectTo: '/instrumente', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    NgxsModule.forRoot([InstrumenteState, ShoppingCartState], { developmentMode: !environment.production }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    InstrumenteModule,
    ShoppingCartModule
  ],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
