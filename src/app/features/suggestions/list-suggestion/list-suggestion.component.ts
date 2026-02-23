import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../services/suggestion.service';


@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {

  constructor(private sug:SuggestionService){}
search_term : string = "";
titre : string = "Liste des suggestions";
textPlaceholder : string = "Rechercher une suggestion"
like(sug:Suggestion){
 sug.nbLikes ++;
}
getClassCss(status : string){
  if (status == 'acceptee'){
    return "status-accepted"
  } else{
    if (status == 'refusee'){
      return "status-refused"
    }
    else {
      return "status-pending"
    }
  }

}
addToFavoris(){

}
suggestions: Suggestion[] =[];
ngOnInit(){
  this.sug.getSuggestionsList().subscribe(res=>this.suggestions=res);
}


}
