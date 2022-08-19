import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  openTab(event: any, tabName:any) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    x = Array.from(x as HTMLCollectionOf<HTMLElement>);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName)!.style.display = "block";
    event.currentTarget.className += " is-active";
    }

}
