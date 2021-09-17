import { Component, OnInit, Input } from '@angular/core';
import { NoteInterface } from '../../interfaces/note-interface'
import { CommonModule } from '@angular/common';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  
  constructor(private noteService:NoteServiceService) { }

  @Input() note:NoteInterface;

  ID:number;
  TITLE:string;
  DESCRIPTION:string;

  editNote(){
    console.log(this.TITLE)
    this.noteService.puttNote({"ID":this.ID,"TITLE":this.TITLE,"DESCRIPTION":this.DESCRIPTION}).subscribe(res=>{
      if(res.status==200){
        location.reload();
      }
    })
    
  }

  ngOnInit(): void {
    if(this.note){
      this.ID = this.note.ID;
      this.TITLE= this.note.TITLE;
      this.DESCRIPTION = this.note.DESCRIPTION;
      console.log(this.ID)
      console.log(this.TITLE,this.DESCRIPTION)
    };
  }

}
