import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import { NoteInterface } from '../interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  NOTES_URL = "http://localhost:4000/notes"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  getNotes(){
      return this.http.get<NoteInterface[]>(this.NOTES_URL,this.httpOptions);
  }

  getNote(id){
    return this.http.get<NoteInterface>(this.NOTES_URL+`/${id}`,this.httpOptions);
  }

  postNote(note){
      return this.http.post<any>(this.NOTES_URL,note,this.httpOptions)
  }

  puttNote(note){
    return this.http.put<any>(this.NOTES_URL+`/${note.id}`,note,this.httpOptions);
  }

  deleteNote(id){
    return this.http.delete<any>(this.NOTES_URL+`/${id}`,this.httpOptions);
  }
}
