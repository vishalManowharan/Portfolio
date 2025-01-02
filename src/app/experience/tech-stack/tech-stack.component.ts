import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent implements OnInit {
  title = input<string>();
  stackList = input<{
    id: string, name: string, level: string
  }[]>();

  ngOnInit(): void {
      console.log(this.stackList());
  }
}
