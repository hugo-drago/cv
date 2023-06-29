import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCvComponent } from './components/main-cv/main-cv.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HtmlToPdfComponent } from './components/html-to-pdf/html-to-pdf.component';
import { MainComponent } from './components/main/main.component';
import { PathologiesComponent } from './components/pathologies/pathologies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@NgModule({
  declarations: [
    AppComponent,
    MainCvComponent,
    HeaderComponent,
    FooterComponent,
    HtmlToPdfComponent,
    MainComponent,
    PathologiesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
