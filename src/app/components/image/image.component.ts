import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Image }  from '../../model/image/image';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  

  constructor(
    private imageService: DataService,
    private route: ActivatedRoute

  ) { }
  image:any;
  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

}
