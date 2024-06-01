import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { CommonModule } from '@angular/common';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    CommonModule,
    DbzModule,
  ],
})
export class AppModule {}
