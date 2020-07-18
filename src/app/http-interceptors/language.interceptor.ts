import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, finalize } from 'rxjs/operators';
import { LoadingService } from '../shared/services/loading.service';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(@Inject(LOCALE_ID) public lang: string,
    private loadingService: LoadingService) {
    // if (!localStorage.getItem('locale')) {
    //   localStorage.setItem('locale', 'en');
    // }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    this.loadingService.show();
    let req$: Observable<any>;
    const modifiedReq = req.clone({
      url: environment.apiURL + req.url,
      headers: req.headers.set('language', this.lang),
    });
    req$ = next.handle(modifiedReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          event = event.clone({ body: event.body.data });
        }
        return event;
      })
    );

    return req$.pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
