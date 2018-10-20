import { Injectable } from '@angular/core';

import { Image } from '../model/image/image';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  visibleImages: Image[];

  constructor() {

  }

  getImages() {
    return this.visibleImages =IMAGES.slice(0);

  }

  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)
}

}

const IMAGES = [
  { "id": 1, "category": "car", "caption": "shallow focus photography black Mustang sports car parked beside the street", "url": "https://images.unsplash.com/photo-1496437792604-55ca7c5c3f6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebdd923019dfb46b14f97c189b3c1d2c&auto=format&fit=crop&w=752&q=80" },
  { "id": 2, "category": "car", "caption": "red Audi coupe on road near trees at daytime", "url": "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e786d9afafdce3d78f3126611e628383&auto=format&fit=crop&w=400&q=80" },
  { "id": 3, "category": "car", "caption": "silver Mercedes-Benz sedan", "url": "https://images.unsplash.com/photo-1533629663071-038eb2b96fcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b44b67a894157da211c987e57024c262&auto=format&fit=crop&w=750&q=80" },
  { "id": 4, "category": "code", "caption": "person using laptop in programming", "url": "https://images.unsplash.com/photo-1528660544347-95a93c58e424?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4acfd895b034f61a180e28884ba4f643&auto=format&fit=crop&w=334&q=80" },
  { "id": 5, "category": "space", "caption": "silhouette of man looking at milky way", "url": "https://images.unsplash.com/photo-1516571748831-5d81767b788d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a29d44f8c78ba3da0e00af9c60de1a3&auto=format&fit=crop&w=334&q=80" },
  { "id": 6, "category": "space", "caption": "three person looking stars and milky way", "url": "https://images.unsplash.com/photo-1504387103978-e4ee71416c38?ixlib=rb-0.3.5&s=e03bf50e379a0b963cfe29233c31c03d&auto=format&fit=crop&w=334&q=80" },
  { "id": 7, "category": "code", "caption": "woman and man sitting in front of monitor", "url": "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a748e7b25651211d3092e562247c860&auto=format&fit=crop&w=750&q=80" },
  { "id": 8, "category": "code", "caption": "men sitting in front of their laptop computer", "url": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc341e1e6a4ae6a405bb98e5947559f&auto=format&fit=crop&w=334&q=80" },
  { "id": 9, "category": "space", "caption": "Milky Way galaxy during nighttime", "url": "https://images.unsplash.com/photo-1502624210716-bf8740533f4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=715600dc71c02daffa654eb75841013a&auto=format&fit=crop&w=334&q=80" },
  { "id": 10, "category": "space", "caption": "bottom view shot of trees under starry sky", "url": "https://images.unsplash.com/photo-1460131548611-36aac9b6a901?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac1a4f750e7b457a3bef1c5a5e698038&auto=format&fit=crop&w=334&q=80" },
  { "id": 11, "category": "car", "caption": "running black Porsche sedan", "url": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-0.3.5&s=da3df16631fc154abfac92efb7f7a15e&auto=format&fit=crop&w=750&q=80" },
  { "id": 12, "category": "car", "caption": "black Ford Mustang GT", "url": "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40085e3ea5d8524b7518df890e4aa72d&auto=format&fit=crop&w=750&q=80" },
  { "id": 13, "category": "code", "caption": "grayscale photo of man using laptop coding", "url": "https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24c4f1ba9da73b2c26dc5dd851c3e592&auto=format&fit=crop&w=750&q=80" }
]