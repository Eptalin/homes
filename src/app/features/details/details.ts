import { Component } from '@angular/core';
import { HousingData } from '../../core/services/housing-data';
import { Housing } from '../../core/models/housing';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  housing: Housing | undefined;

  // Inject Housing Service and fetch Housing by ID
  constructor(private housingData: HousingData, private route: ActivatedRoute) {}
  ngOnInit() {
    const housingId = Number(this.route.snapshot.params['id']);
    this.housing = this.housingData.getHousingById(housingId);
  }
}
