import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef } from '@ngx-gallery/core';

import { GalleryItem, ImageItem } from '@ngx-gallery/core';
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  $:any[];
  images: GalleryItem[];

  constructor(private gallery: Gallery) { }
 
  ngOnInit() {
   
    this.images = [
      new ImageItem({ src: 'assets/img/houses/h1.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'assets/img/houses/h2.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'assets/img/houses/h3.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'assets/img/houses/h4.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'assets/img/houses/h5.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
    ];
   
    }
 
  }

