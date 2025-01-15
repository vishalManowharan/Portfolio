import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
      skills: {
        src: string,
        name: string,
        id: number
      }[] = [
        {
          src: 'assets/skills/html.svg',
          name: 'HTML',
          id: 1
        },
        {
          src: 'assets/skills/css.svg',
          name: 'CSS',
          id: 2
        },
        {
          src: 'assets/skills/javascript.svg',
          name: 'JavaScript',
          id: 3
        },
        {
          src: 'assets/skills/typescript.svg',
          name: 'TypeScript',
          id: 4
        },
        {
          src: 'assets/skills/react.svg',
          name: 'React',
          id: 5
        },
        {
          src: 'assets/skills/angular.svg',
          name: 'Angular',
          id: 6
        },
        {
          src: 'assets/skills/java.svg',
          name: 'Java',
          id: 7
        },
        {
          src: 'assets/skills/python.svg',
          name: 'Python',
          id: 8
        },
        {
          src: 'assets/skills/spring-boot.svg',
          name: 'Spring Boot',
          id: 9
        },
        {
          src: 'assets/skills/flask.svg',
          name: 'Flask',
          id: 10
        },
        {
          src: 'assets/skills/mongoDB.svg',
          name: 'Mongo DB',
          id: 11
        },
        {
          src: 'assets/skills/git.svg',
          name: 'Git',
          id: 12
        },
        {
          src: 'assets/skills/gcp.svg',
          name: 'GCP',
          id: 13
        },
        {
          src: 'assets/skills/docker.svg',
          name: 'Docker',
          id: 14
        },
        {
          src: 'assets/skills/mysql.svg',
          name: 'My Sql',
          id: 15
        },
        {
          src: 'assets/skills/nodejs.svg',
          name: 'Node Js',
          id: 16
        },
        {
          src: 'assets/skills/Sass.svg',
          name: 'Sass',
          id: 17
        },
        {
          src: 'assets/skills/html.svg',
          name: 'HTML',
          id: 18
        },
        {
          src: 'assets/skills/css.svg',
          name: 'CSS',
          id: 19
        },
        {
          src: 'assets/skills/javascript.svg',
          name: 'JavaScript',
          id: 20
        },
        {
          src: 'assets/skills/typescript.svg',
          name: 'TypeScript',
          id: 21
        },
        {
          src: 'assets/skills/react.svg',
          name: 'React',
          id: 22
        },
        {
          src: 'assets/skills/angular.svg',
          name: 'Angular',
          id: 23
        },
        {
          src: 'assets/skills/java.svg',
          name: 'Java',
          id: 24
        },
        {
          src: 'assets/skills/python.svg',
          name: 'Python',
          id: 25
        },
        {
          src: 'assets/skills/spring-boot.svg',
          name: 'Spring Boot',
          id: 26
        },
        {
          src: 'assets/skills/flask.svg',
          name: 'Flask',
          id: 27
        },
        {
          src: 'assets/skills/mongoDB.svg',
          name: 'Mongo DB',
          id: 28
        },
        {
          src: 'assets/skills/git.svg',
          name: 'Git',
          id: 29
        },
        {
          src: 'assets/skills/gcp.svg',
          name: 'GCP',
          id: 30
        },
        {
          src: 'assets/skills/docker.svg',
          name: 'Docker',
          id: 31
        },
        {
          src: 'assets/skills/mysql.svg',
          name: 'My Sql',
          id: 32
        },
        {
          src: 'assets/skills/nodejs.svg',
          name: 'Node Js',
          id: 33
        },
        {
          src: 'assets/skills/Sass.svg',
          name: 'Sass',
          id: 34
        }
      ];
}
