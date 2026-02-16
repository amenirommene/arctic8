import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

@NgModule({
  declarations: [//la liste des composants associés à ce module
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, //*ngFor + *ngIf
    AppRoutingModule,
    FormsModule //utiliser la directive ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
