import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private detailService: DetailService) { }

  actions: any = [
    {},
    { name: "Play", icon: "fa fa-play" },
    { name: "Pause", icon: "fa fa-pause" },
    { name: "Resume", icon: "fa fa-play" },
  ];

  gamedetail: any;

  ngOnInit(): void {
    this.detailService.detail().subscribe(data => {
      this.gamedetail = data;
    })
  }

}
