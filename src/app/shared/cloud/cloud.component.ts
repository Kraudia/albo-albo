import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges, Output, EventEmitter } from '@angular/core';
import { tagCloud } from './tagcloud';
import { Tag } from '../../models/tag';
declare const $: any;

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})

export class CloudComponent implements OnChanges {
  @Input('tags') tags;
  @Input('status') status;
  @Input('colorStart') colorStart = '#2DD655';
  @Input('colorEnd') colorEnd = '#000000';
  @Input('sizeStart') sizeStart = 10;
  @Input('sizeEnd') sizeEnd = 16;

  @Output('selected') selected = new EventEmitter<number>();
  public idSelected: number;

  constructor(
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const prop2Changes: SimpleChange = changes['tags'];
    if (prop2Changes) {
      this.setTags();
    }
  }

  setTags() {
    tagCloud();
    $.fn.tagcloud.defaults = {
      size: {start: this.sizeStart, end: this.sizeEnd, unit: 'pt'},
      color: {start: this.colorStart, end: this.colorEnd}
    };

    $(function () {
      $('#tagCloud button').tagcloud();
    });
  }

  select(tag: Tag) {
    if (this.idSelected === tag.id) {
      this.idSelected = null;
      this.selected.emit(0);
    } else {
      this.idSelected = tag.id;
      this.selected.emit(tag.id);
    }
  }
}
