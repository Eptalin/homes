import { Component, inject } from '@angular/core';
import { HousingData } from '../../core/services/housing-data';
import { Housing } from '../../core/models/housing';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  // Create a blank application form
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  /**
   * When form is submitted
   */
  onSubmit() {
    this.housingData.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );

  }

  housing: Housing | undefined;

  //Inject Housing Service and fetch Housing by ID
  housingData: HousingData = inject(HousingData);
  route: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    const housingId = Number(this.route.snapshot.params['id']);
    this.housing = this.housingData.getHousingById(housingId);
  }
}
