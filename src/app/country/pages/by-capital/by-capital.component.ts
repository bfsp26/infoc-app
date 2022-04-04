import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  capital: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  @Input() placeholder: string = 'Search country by capital name';

  constructor(private countryService: CountryService) { }

  search(capital: string) {
    this.error = false;
    this.capital = capital;
    this.countryService.searchByCapital(this.capital)
      .subscribe({
        next: countries => this.countries = countries,
        error: () => {
          this.error = true
          this.countries = [];
        }
      });
  }

  suggestions(term: string) {
    this.error = false;
    // TODO: create suggestions
    this.countryService.searchByCapital(term)
      .subscribe({
        next: countries => this.suggestedCountries = countries,
        error: () => this.suggestedCountries = []
      });
  }

}
