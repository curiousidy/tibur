import { Component, OnInit } from '@angular/core';
import { BirdService } from '../services/bird.service';

@Component({
  selector: 'app-my-birds',
  templateUrl: './my-birds.page.html',
  styleUrls: ['./my-birds.page.scss'],
})
export class MyBirdsPage implements OnInit {

  birds: any = [];

  constructor(private birdsService: BirdService) { }

  ngOnInit() {
    this.getAllBirds();
  }

  getAllBirds() {
    this.birdsService.getBirds().subscribe(response => {
      this.birds = response;
    });
  }

}
