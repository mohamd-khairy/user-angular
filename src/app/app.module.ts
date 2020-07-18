import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';
import { httpInterceptorProviders } from './http-interceptors';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { LanguageService } from './shared/services/language.service';
registerLocaleData(localeAr, 'ar-EG');

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    httpInterceptorProviders,
    // {
    //   provide: LOCALE_ID,
    //   deps: [LanguageService],
    //   useFactory: (local: LanguageService) => { return local.getLang() }
    // }
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
