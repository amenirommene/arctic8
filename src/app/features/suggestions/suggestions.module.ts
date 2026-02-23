import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsSuggestionComponent } from './details-suggestion/details-suggestion.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { FormSuggestionComponent } from './form-suggestion/form-suggestion.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SuggestionsComponent,
     ListSuggestionComponent,
     DetailsSuggestionComponent,
     FormSuggestionComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    ReactiveFormsModule,
   // HttpClientModule,
    FormsModule //utiliser la directive ngModel
  ]
})
export class SuggestionsModule { }
