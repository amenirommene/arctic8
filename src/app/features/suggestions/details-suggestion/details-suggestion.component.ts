import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-suggestion',
  templateUrl: './details-suggestion.component.html',
  styleUrl: './details-suggestion.component.css'
})
export class DetailsSuggestionComponent {

  id!: string;

  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor ");
  }
  ngOnInit(){
console.log("je suis ngOnInit ");
//this.id=this.ac.snapshot.params['id'];
//this.ac.paramMap.subscribe(res=>this.id=res.get('id'));
this.ac.params.subscribe(res=>this.id=res['id']);
  }



}
