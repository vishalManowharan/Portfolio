import { Component } from "@angular/core";
import { TechStackComponent } from "./tech-stack/tech-stack.component";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [TechStackComponent],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.css",
})
export class ExperienceComponent {
  techStacks: {
    id: number;
    title: string;
    techStackList: {id: string,name: string, level: string}[];
  }[] = [
    {
      id: 1,
      title: "Frontend Development",
      techStackList: [
        {
          id: crypto.randomUUID(),
          name:"HTML",
          level: "Experienced"
        },
        {
          id: crypto.randomUUID(),
          name:"CSS",
          level: "Experienced"
        },
        {
          id: crypto.randomUUID(),
          name:"JavaScript",
          level: "Experienced"
        },
        {
          id: crypto.randomUUID(),
          name:"TypeScript",
          level: "Experienced"
        },
        {
          id: crypto.randomUUID(),
          name:"Angular",
          level: "Experienced"
        },
        {
          id: crypto.randomUUID(),
          name:"React",
          level: "Intermediate"
        }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      techStackList: [
        {
          id: crypto.randomUUID(),
          name:"Node Js",
          level: "intermediate"
        },
        {
          id: crypto.randomUUID(),
          name:"Java(SpringBoot)",
          level: "intermediate"
        },
        {
          id: crypto.randomUUID(),
          name:"Express Js",
          level: "intermediate"
        },
        {
          id: crypto.randomUUID(),
          name:"python(Flask)",
          level: "intermediate"
        }
      ]
    }
  ];
}
