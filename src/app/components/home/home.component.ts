import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedcategory: string = "";

  constructor(private feedService: FeedService) { }
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
}
