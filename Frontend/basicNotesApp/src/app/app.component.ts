import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

import { NoteServiceService } from './services/note-service.service';

//component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notes App';
 
  notesForm = new FormGroup({
    title: new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
  })
  
  constructor(private notesService:NoteServiceService){}

  save(){
    this.notesService.postNote(this.notesForm.value).subscribe(res=>{
      console.log(res)
      location.reload()
    })
  }
  
}
