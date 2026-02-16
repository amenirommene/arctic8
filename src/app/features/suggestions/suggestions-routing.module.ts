import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailsSuggestionComponent } from './details-suggestion/details-suggestion.component';
import { FormSuggestionComponent } from './form-suggestion/form-suggestion.component';


const routes: Routes = [
  { path: '', component: SuggestionsComponent, children:[
{path: 'add', component: FormSuggestionComponent},
{ path: 'suggestions', component: ListSuggestionComponent, children:[
  { path: ':id', component: DetailsSuggestionComponent}
]},

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
