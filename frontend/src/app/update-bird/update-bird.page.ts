import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BirdService } from '../services/bird.service';

@Component({
  selector: 'app-update-bird',
  templateUrl: './update-bird.page.html',
  styleUrls: ['./update-bird.page.scss'],
})
export class UpdateBirdPage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(
    private birdService: BirdService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.fetchBird(this.id);
    this.updateUserFg = this.formBuilder.group({
      name      : [''],
      power     : [''],
      genre     : [''],
      size      : [''],
      scope     : [''],
      color     : ['']
    })
  }

  fetchBird(id) {
    this.birdService.getBird(id).subscribe((data) => {
      this.updateUserFg.setValue({
        name    : data['name'],
        power   : data['power'],
        genre   : data['genre'],
        size    : data['size'],
        scope   : data['scope'],
        color   : data['color'],
      });
    });
  }


  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.birdService.updateBird(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}
