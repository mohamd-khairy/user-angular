import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(@Inject(LOCALE_ID) public lang: string) {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'en');
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const modifiedReq = req.clone({
      url: environment.apiURL + req.url,
      headers: req.headers.set('language', this.lang),
    });
    return next.handle(modifiedReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response and headers you want
          event = event.clone({ body: event.body.data });
        }
        return event;
      })
    );
  }
}
