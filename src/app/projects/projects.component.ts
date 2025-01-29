import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 projects: {
  id: number;
  imgName: string;
  title: string;
  repoName: string;
  liveLink: string;

 }[] = [
  {
    id: 1,
    imgName: "tindog.png",
    title: "Tin Dog",
    repoName: "Tin-dog",
    liveLink: "Tin-dog/"
   },
   {
    id: 2,
    imgName: "Drums.png",
    title: "Drum Kit",
    repoName: "drum-kit",
    liveLink: "drum-kit"
   },
   {
    id: 3,
    imgName: "password.png",
    title: "Password Generator",
    repoName: "Password_generator",
    liveLink: "Password_generator"
   },
 ];

 openGithub(repoName: string) {

  window.open(`https://github.com/vishalManowharan/${repoName}`);

}

openLiveLink(liveLink: string) {
  window.open(`https://vishalmanowharan.github.io/${liveLink}`);
}

}
