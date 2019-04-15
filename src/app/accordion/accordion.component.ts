import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"]
})
export class AccordionComponent implements OnInit {
  @Input() opened = false;
  @Input() queTitle: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onQuestionClick() {
    this.toggle.emit();
  }
}
