import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  private apiUrl = 'http://localhost:3000/announcements';

  constructor(private http: HttpClient) { }

  public getAllAnnouncement(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        catchError((error: any) => {
          // Handle error (log, display message, etc.)
          console.error('Error fetching announcements:', error);
          return throwError(error);
        })
      );
  }
  public getAnnouncementById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .pipe(
        catchError((error: any) => {
          console.error(`Error fetching announcements with ID ${id}:`, error);
          return throwError(error);
        })
      );
  }
  public saveAnnouncement(payload: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, payload, { headers })
      .pipe(
        catchError((error: any) => {
          // Handle error (log, display message, etc.)
          console.error('Error saving announcement:', error);
          return throwError(error);
        })
      );
  }
  public editAnnouncement(payload: any, id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, payload, { headers })
      .pipe(
        catchError((error: any) => {
          // Handle error (log, display message, etc.)
          console.error('Error editing announcement:', error);
          return throwError(error);
        })
      );
  }
  public deleteAnnouncement(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError((error: any) => {
          console.error(`Error deleting announcement with ID ${id}:`, error);
          return throwError(error);
        })
      );
  }
}
