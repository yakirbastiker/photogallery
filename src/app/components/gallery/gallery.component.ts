import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Image }  from '../../model/image/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  visibleImages: any[];
  filterBy?: string = 'all';

  constructor(private imageService: DataService) {
    console.log(this.filterBy)
    this.visibleImages =  this.imageService.getImages();
   }

   ngOnChanges() {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
  }

}
