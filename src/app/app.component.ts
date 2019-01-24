import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { ReviewModel, Reviews } from './data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Demo';
  p = 1;
  reviewResponse: Subscription;
  companyReviews: ReviewModel;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getReviewDetails();
  }

  public getReviewDetails() {
    this.reviewResponse = this.dataService.getReviews().subscribe(response => {
      console.log(response);
      this.companyReviews = response;
    });
  }

  ngOnDestroy() {
    if (this.reviewResponse) {
      this.reviewResponse.unsubscribe();
    }
  }
}
