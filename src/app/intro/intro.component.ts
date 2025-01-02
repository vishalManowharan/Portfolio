import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit, AfterViewInit {
  @ViewChild('profileImg') profileImg!: ElementRef;
  @ViewChild('crownImg') crownImg!: ElementRef;
constructor(private el: ElementRef, private renderer: Renderer2) {}
ngOnInit(): void {
    this.dynamicBlinker();
}

ngAfterViewInit(): void {
  if (this.profileImg && this.crownImg) {
    // Adding the event listener using Renderer2 for the 'mouseenter' event
    this.renderer.listen(this.profileImg.nativeElement, 'mouseenter', () => {
      console.log('Mouse entered the profile image!');
      this.renderer.addClass(this.crownImg.nativeElement, 'visible');
    });

    // Adding a listener for 'mouseleave' if you want to detect when the mouse leaves
    this.renderer.listen(this.profileImg.nativeElement, 'mouseleave', () => {
      console.log('Mouse left the profile image!');
      this.renderer.removeClass(this.crownImg.nativeElement, 'visible');
    });
  } else {
    console.error('Profile image element not found');
  }
}
  dynamicBlinker () {
  const txt: HTMLElement = this.el.nativeElement.querySelector("#textP");
  let skills = ["JavaScript", "Angular", "TypeScript", "React"];
  let constantLength = 0;
  let count = 0;
  skills.forEach(element => {
      if(element.length > constantLength) constantLength = element.length;
  });
  const blink: HTMLElement = this.el.nativeElement.querySelector("#blinker");
  let isHidden = false;
  setInterval(() => {
      if (!isHidden) {
          isHidden = true;
          blink.classList.add("hide-blink");
          blink.classList.remove("show-blink");
      } else {
          isHidden = false;
          blink.classList.add("show-blink");
          blink.classList.remove("hide-blink");
      }
  }, 700)
  
  function showSkills () {
  for (let j = 0; j < skills.length; j++) {
      let skill = skills[j];
      setTimeout(() => {
          for (let i = 0; i < skill.length; i++) {
              setTimeout(() => {
                  txt.innerText = txt.innerText + skill[i];
              }, 150 * i);
          }
  
          setTimeout(() => {
              for (let i = 0; i < skill.length; i++) {
                  setTimeout(() => {
                      txt.innerText = txt.innerText.slice(0, - 1)
                  }, 150 * i);
              }
          }, 250 * constantLength)
      }, 550 * constantLength * j)
  }
  count++;
  }
  // showSkills();
  function showSkill () {
    for (let j = 0; j < skills.length; j++) {
        let skill = skills[j];
        setTimeout(() => {
          // This for loop is for adding each letter of current skill text.
            for (let i = 0; i < skill.length; i++) {
                setTimeout(() => {
                    txt.innerText = txt.innerText + skill[i];
                }, 150 * (i == 0 ? 1 : i));
            }
            // Using timeout here since this part should start only after the completion of the above part
            setTimeout(() => {
              // This for loop is for removing each letter of current skill.
                for (let i = 0; i < skill.length; i++) {
                    setTimeout(() => {
                        txt.innerText = txt.innerText.slice(0, - 1)
                    }, 150 * (i == 0 ? 1 : i));
                }
            }, 250 * constantLength)
        }, 550 * constantLength * j)
    }
    count++;
    }
    showSkill();
  setInterval( () => showSkill(), 21700)
}
}
