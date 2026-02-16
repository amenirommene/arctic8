import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';

import { FormsModule } from '@angular/forms';
import { DetailsSuggestionComponent } from './details-suggestion/details-suggestion.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
     ListSuggestionComponent,
     DetailsSuggestionComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule //utiliser la directive ngModel
  ]
})
export class SuggestionsModule { }
