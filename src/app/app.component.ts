import { Component } from '@angular/core';
import { NgbdDropdownComponent } from './components/ngbd-dropdown/ngbd-dropdown.component';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'news-app';
  enableApply = false;
  newsArticles : Array<any>;
  filters : Array<any>;
  newsSources : Array<any>;
  filterValues : Array<any>;
  constructor(private newsApi : NewsApiService){
    console.log("News app");
  }
  ngOnInit(){
    this.newsApi.initArticles().subscribe(data=>this.newsArticles = data['articles']);
    this.newsApi.initSources().subscribe(data => this.newsSources = data['sources']);
    this.filterValues = [{
      "title" : "Politics",
      "id" : 1,
      "isChecked" : false
    },
    {
      "title" : "Bollywood",
      "id" : 2,
      "isChecked" : false
    },
    {
      "title" : "Hollywood",
      "id" : 3,
      "isChecked" : false

    },
    {
      "title" : "Business",
      "id" : 4,
      "isChecked" : false
    },
    {
      "title" : "Sports",
      "id" : 5,
      "isChecked" : false
    },
    {
      "title" : "Technology",
      "id" : 6,
      "isChecked" : false
    },
    {
      "title" : "Entertainment",
      "id" : 7,
      "isChecked" : false
    },
    {
      "title" : "Travel",
      "id" : 8,
      "isChecked" : false
    },
    {
      "title" : "Science",
      "id" : 9,
      "isChecked" : false
    },
    {
      "title" : "Fashion",
      "id" : 10,
      "isChecked" : false
    }]
  }
  searchArticlesBySource(sourceValue){
    this.newsApi.getArticlesByID(sourceValue).subscribe(data=> this.newsArticles = data['articles']);
  }
  onCheck(filter){
    filter.isChecked = !filter.isChecked;
    this.enableApply = true;
  }
  onFilterApply(filter){
    //this.filters.push(filter);
    this.filters = [];
    for (let entry of this.filterValues) {
      
      if(entry.isChecked){
        this.filters.push(entry);
      }
    }
    console.log(this.filters);
  
  }
  clearFilter(){
    this.filters = [];
  }
}
