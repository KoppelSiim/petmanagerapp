import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pets } from './pets';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiServerUrl = environment.apiServerUrl;
  constructor(private http:HttpClient) { }

  public getPets(): Observable<Pets[]>{
    return this.http.get<Pets[]>(`${this.apiServerUrl}/pet/all`);
  }
  public addPet(pet:Pets): Observable<Pets>{
    return this.http.post<Pets>(`${this.apiServerUrl}/pet/add`, pet);
  }

  public updatePet(petId:number, pet:Pets): Observable<Pets>{
    return this.http.put<Pets>(`${this.apiServerUrl}/pet/update/${petId}`, pet);
  }
  public deletePet(petId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/pet/delete/${petId}`);
  }

}
