import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'events',component:EventsComponent
  },
  {
    path:'chefs',component:ChefsComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'dropDown',component:DropDownComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
  path:'header',component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
