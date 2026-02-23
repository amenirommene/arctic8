import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';

@Component({
  selector: 'app-form-suggestion',
  templateUrl: './form-suggestion.component.html',
  styleUrl: './form-suggestion.component.css'
})
export class FormSuggestionComponent {
 constructor(private fb:FormBuilder, private myRouter:Router,private sugService:SuggestionService){}
  myForm : FormGroup;
  myForm2 : FormGroup;
  onSubmit(){

  }
  ngOnInit(){
    this.myForm=new FormGroup({
title : new FormControl("",
[Validators.required,Validators.minLength(10),Validators.pattern("^[A-Z][a-zA-Z]*$")]),
description: new FormControl("",[Validators.required,Validators.minLength(30)]),
 category: new FormControl("",[Validators.required]),
 status: new FormControl("en attente"),
date:new FormControl(new Date().toISOString().split("T")[0])
    })

    this.myForm2 = this.fb.group({
      title:["",[Validators.required,Validators.minLength(10),Validators.pattern("^[A-Z][a-zA-Z]*$")]]
    })
  }

  get title(){
    return this.myForm.get('title');
  }
  id: number = 0;

  categories: string[] =
[ 'Infrastructure et bâtiments',
  'Technologie et services numériques',
   'Restauration et cafétéria',
   'Hygiène et environnement',
   'Transport et mobilité',
   'Activités et événements',
   'Sécurité', 'Communication interne', 'Accessibilité', 'Autre' ];


}
