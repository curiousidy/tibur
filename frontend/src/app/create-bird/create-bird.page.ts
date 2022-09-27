import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BirdService } from '../services/bird.service';

@Component({
  selector: 'app-create-bird',
  templateUrl: './create-bird.page.html',
  styleUrls: ['./create-bird.page.scss'],
})
export class CreateBirdPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private birdService: BirdService
  ) {
    this.userForm = this.formBuilder.group({
      name      : [''],
      power     : [''],
      genre     : [''],
      size      : [''],
      scope     : [''],
      color     : [''],
    })
   }

  ngOnInit() {}

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.birdService.createBird(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}
