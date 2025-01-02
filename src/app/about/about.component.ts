import { Component } from '@angular/core';
import { AboutContainerComponent } from './about-container/about-container.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
items: {
  id: number,
  title: string,
  content1: string,
  content2: string 
  icon: string
}[] = [
{
  id: 1,
  title: "Experience",
  content1: "2+ years",
  content2: "Frontend Development",
  icon: "work" 
},
{
  id: 2,
  title: "Education",
  content1: "Bachelor of Engineering",
  content2: "CGPA - 7.9" ,
  icon: "book"
}
]
}
