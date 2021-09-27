import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedcategory: string[] = [];

  constructor() { }
  category: any = [
    { name: "All", isSelected: true },
    { name: "Action", isSelected: false },
    { name: "Racing", isSelected: false },
    { name: "Puzzle", isSelected: false }
  ];
  feed : any;
  
  ngOnInit(): void {
  }

  oncategorySelect(event: any) {
    if (event.target.checked) {
      if (event.target.value == "All") {
        this.selectedcategory = [];
        this.unCheckAll();
        this.selectedcategory.push(event.target.value);
      } else {
        const index = this.selectedcategory.indexOf("All");
        if (index > -1)
          this.selectedcategory.splice(index, 1);
        this.selectedcategory.push(event.target.value);
        this.category[0].isSelected = false;
        const idx = this.categoryIndex(event.target.value);
        this.category[idx].isSelected = true;
      }
    } else {
      const index = this.selectedcategory.indexOf(event.target.value);
      this.selectedcategory.splice(index, 1);
      this.category[0].isSelected = false
    }
    console.log(this.selectedcategory)
  }

  onCategoryFilter() {
  }

  private unCheckAll() {
    for (var i = 0; i < this.category.length; i++) {
      this.category[i].isSelected = false;
    }
    this.category[0].isSelected = true;
  }

  private categoryIndex(str: string): number {
    for (var i = 0; i < this.category.length; i++) {
      if (this.category[i].name == str)
        return i;
    }
    return -1
  }
}
