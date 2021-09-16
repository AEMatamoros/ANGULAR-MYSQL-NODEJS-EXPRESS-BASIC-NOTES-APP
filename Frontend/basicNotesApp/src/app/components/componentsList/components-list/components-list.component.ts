import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../../services/note-service.service';
import { NoteInterface} from '../../../interfaces/note-interface';


@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.css']
})
export class ComponentsListComponent implements OnInit {
  //init
  notes:NoteInterface[];

  constructor(private notesService:NoteServiceService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notesService.getNotes().subscribe(res=>{
      this.notes = res;
    })
  }

  deleteNote(id){
    this.notesService.deleteNote(id).subscribe(res=>{
      this.notes = this.notes.filter(note=>note.ID!=id);
    })
  }
}
