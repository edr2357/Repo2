import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {



  timeMessage: string;

  constructor() { 
    setInterval(()=> {
    let currentTime = new Date() ;
    
    this.timeMessage = currentTime.toLocaleTimeString();
  } , 1000);
  }

  ngOnInit() {
  }

}
