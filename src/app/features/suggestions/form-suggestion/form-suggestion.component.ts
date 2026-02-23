import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-suggestion',
  templateUrl: './form-suggestion.component.html',
  styleUrl: './form-suggestion.component.css'
})
export class FormSuggestionComponent {

  myForm : FormGroup;
  ngOnInit(){
    this.myForm=new FormGroup({
      title : new FormControl("",
        [Validators.required,Validators.minLength(3)]),
      description: new FormControl("",Validators.required)
    })
  }


}
