import { Component, Input,  } from '@angular/core';
import { Housing } from '../../../../core/models/housing';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-housing-card',
  imports: [RouterLink],
  templateUrl: './housing-card.html',
  styleUrl: './housing-card.scss',
})
export class HousingCard {
  
  // Allows us to add arguments to the <app-housing-card> HTML element
  // to use in housing-cards.html
  @Input() housing!: Housing;

}
