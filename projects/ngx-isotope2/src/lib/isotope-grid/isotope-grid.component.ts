import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

import { IsotopeItemComponent } from '../isotope-item/isotope-item.component';

import { IsotopeOptions } from '../models/isotope-options';


declare var Isotope: any;
declare var imagesLoaded: any;

@Component({
  selector: 'isotope-isotope-grid',
  templateUrl: './isotope-grid.component.html',
  styleUrls: ['./isotope-grid.component.css']
})
export class IsotopeGridComponent implements OnInit,OnChanges {
  @Input() public options: IsotopeOptions;

  private items: Array<IsotopeItemComponent> = [];
  private isotope: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (!this.options) this.options = {};

    if (!this.options.itemSelector) {
      this.options.itemSelector = '[isotope-item], isotope-item';
    }

    if (this.el.nativeElement.tagName === 'ISOTOPE-GRID') {
      this.el.nativeElement.style.display = 'block';
    }

    this.isotope = new Isotope(this.el.nativeElement, this.options);
  }

  ngOnChanges() {
    if (this.isotope) {
      this.isotope.arrange(this.options)
    }
  }

  public add(el: HTMLElement) {
      this.isotope.appended(el);
      this.isotope.layout();

      imagesLoaded(el).on('progress', () => {
          this.isotope.layout();
      });
  }

}