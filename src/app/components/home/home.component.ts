import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';
import { FeedService } from 'src/app/services/feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedcategory: string = "";

  constructor(private feedService: FeedService,
    private detailService: DetailService,
    private router: Router) { }

  category: any;
  feed: any;

  ngOnInit(): void {
    this.feedService.getCategoryList().subscribe(data => { this.category = data });
    this.feedService.feed().subscribe(data => {
      this.feed = null;
      this.feed = data;
    });
  }

  // Check For Filter
  oncategorySelect(event: any) {
    if (event.target.checked)
      this.selectedcategory = event.target.value;
    else
      this.selectedcategory = "";
  }

  onCategoryFilter() {
    this.feedService.categoryFilterFeed(this.selectedcategory).subscribe(data => {
      this.feed = null;
      this.feed = data;
    });
  }

  navigate(id: string) {
    this.detailService.gameid = id;
    this.router.navigate(["/detail"])
  }
}
