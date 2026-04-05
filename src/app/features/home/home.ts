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
  filteredHousingList: Housing[] = [];
  
  // Inject the Housing service and fetch Housing
  housingData: HousingData = inject(HousingData);
  ngOnInit() {
    this.housingList = this.housingData.getAllHousing();
    this.filteredHousingList = this.housingList;
  }

  /**
   * Filter results based on user input
   * @param text User input
   * @param event The submit event
   */
  filterResults(text: string, event: Event) {
    // Prevent page from reloading on submit
    event.preventDefault();

    if (!text) {
      this.filteredHousingList = this.housingList;
    } 
    this.filteredHousingList = this.housingList.filter(
      housing => housing?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
 
}
