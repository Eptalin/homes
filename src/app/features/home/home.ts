import { Component, inject } from '@angular/core';
import { HousingCard } from './components/housing-card/housing-card';
import { Housing } from '../../core/models/housing';
import { HousingData } from '../../core/services/housing-data';


@Component({
  selector: 'app-home',
  imports: [HousingCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
  // Initialise empty array of Housing
  housingList: Housing[] = [];

  // Inject the Housing service and fetch Housing
  constructor(private housingData: HousingData) {}
  ngOnInit() {
    this.housingList = this.housingData.getAllHousing();
  }

  // Alternative - Okay for synchronous stuff, but not async.
  // Things within 'constructor() {HERE}' execute too early so may be undefined for Angular tools.
  //    housingData: HousingData = inject(HousingData);
  //    constructor() {this.housingList = this.housingData.getAllHousing()}
 
}
