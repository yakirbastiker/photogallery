import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';


import { ImageFilterPipe } from './service/filter.pipe';
import { DataService } from 'src/app/service/data.service';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [DataService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
