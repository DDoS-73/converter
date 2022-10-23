import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "../../services/currency.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  eurToUah!: Observable<number>;
  usdToUah!: Observable<number>;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.eurToUah = this.currencyService.convert('EUR', 'UAH', 1);
    this.usdToUah = this.currencyService.convert('USD', 'UAH', 1);
  }

}
