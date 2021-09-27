import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  actions: any = [
    {},
    { name: "Play Now", icon: "fa fa-play" },
    { name: "Pause", icon: "fa fa-pause" },
    { name: "Resume", icon: "fa fa-play" },
  ];

  abcd: any = [
    { "date": "2021-06-16", "action": 1 },
    { "date": "2021-09-26", "action": 2 },
    { "date": "2021-10-28", "action": 1 },
  ];

  gamedetail: any = {
    "name": "This is the Test Game",
    "action": 2
  };

  ngOnInit(): void {
  }

}
