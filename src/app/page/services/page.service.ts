import { Inject, Injectable } from '@angular/core';
import { MorePage } from '../page';
import { environment } from '../../../environments/environment';
import { APP_CONFIG_SERVICE } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  morePages: MorePage[] = []
  // headers = new HttpHeaders({ 'token': 'token value' });

  getPages$ = this.http.get<MorePage[]>('/api/rooms').pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig, private http: HttpClient) {
    console.log(this.config.apiEndpoint);
  }

  getPages() { 
    return this.http.get<MorePage[]>('/api/rooms');
  }
  addPage(page: MorePage) {
    return this.http.post<MorePage[]>('/api/rooms', page);
  }
  editPage(page: MorePage) {
    return this.http.put<MorePage[]>(`/api/rooms/${page.pageNum}`, page);
  }
  deletePage(id: string) {
    return this.http.delete<MorePage[]>(`/api/rooms/${id}`);
  }
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true
    });
    console.log(request);
    return this.http.request(request);
  }
}
