import { Component, input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-about-container',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about-container.component.html',
  styleUrl: './about-container.component.css'
})
export class AboutContainerComponent implements OnInit {
icon = input.required<string>();
title = input.required<string>();
content1 = input.required<string>();
content2 = input.required<string>();
constructor() {
  // console.log(this.title());
}
ngOnInit(): void {
    console.log(this.title());
}
}
