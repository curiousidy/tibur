import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirdService } from '../services/bird.service';

@Component({
  selector: 'app-delete-and-list-bird',
  templateUrl: './delete-and-list-bird.page.html',
  styleUrls: ['./delete-and-list-bird.page.scss'],
})
export class DeleteAndListBirdPage implements OnInit {

  Birds: any = [];

  constructor(
    private birdService: BirdService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.birdService.getBirds().subscribe((response) => {
      this.Birds = response;
    })
  }

  removeBird(bird, i) {
    if (window.confirm('Are you sure')) {
      this.birdService.deleteBird(bird.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Bird is dead!')
        }
      )
    }
  }

}
