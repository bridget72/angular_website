import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  start: boolean = false
  start2: boolean = false
  start3: boolean = false
  ngOnInit () {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => this.start = true, 1000)
  }
  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    this.start2 = true
    // ...
  }
  onTypingAnimationComplete2 () {
    console.log('#SECOND LINE COMPLETE')
    this.start3 = true
    // ...
  }
  onTypingAnimationComplete3 () {
    console.log('#THIRD LINE COMPLETE')
    // ...
  }
}
