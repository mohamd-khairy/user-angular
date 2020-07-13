import { Component, OnInit } from '@angular/core';
 import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
 import {NgxGalleryImage} from '@kolkov/ngx-gallery';
 import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-the-venue-gallery',
  templateUrl: './the-venue-gallery.component.html',
  styleUrls: ['./the-venue-gallery.component.scss']
})
export class TheVenueGalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        imageBullets: true,
        imageAutoPlay: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/Rectangle 671.png',
        medium: 'assets/Rectangle 671.png',
        big: 'assets/Rectangle 671.png'
      },
      {
        small: 'assets/component (10).png',
        medium: 'assets/component (10).png',
        big: 'assets/component (10).png'
      },
      {
        small: 'assets/OGF9H91.png',
        medium: 'assets/OGF9H91.png',
        big: 'assets/OGF9H91.png'
      },{
        small: 'assets/Rectangle 679.png',
        medium: 'assets/Rectangle 679.png',
        big: 'assets/Rectangle 679.png'
      },
      {
        small: 'assets/Rectangle 683.png',
        medium: 'assets/Rectangle 683.png',
        big: 'assets/Rectangle 683.png'
      }
    ];
  }

}
