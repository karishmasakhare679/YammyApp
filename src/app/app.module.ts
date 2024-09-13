import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { ChefsComponent } from './chefs/chefs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainService } from './services/main.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    EventsComponent,
    ChefsComponent,
    GalleryComponent,
    DropDownComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
    
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
