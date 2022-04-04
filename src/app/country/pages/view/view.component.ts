import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country-interface';

/* eslint-disable */
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByCode(id))
      ).subscribe(country => {
        this.country = country[0];
      });

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.countryService.getCountryByCode(id)
    //       .subscribe(country => {
    //         console.log(country.name);
    //       });
    //   });
  }

}
