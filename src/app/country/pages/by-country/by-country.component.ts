import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  @Input() placeholder: string = 'Search country by common name';

  constructor(private countryService: CountryService) { }

  search(term: string) {
    this.error = false;
    this.term = term;
    this.countryService.searchByName(this.term)
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
    this.countryService.searchByName(term)
      .subscribe({
        next: countries => this.suggestedCountries = countries,
        error: () => this.suggestedCountries = []
      });
  }

}
