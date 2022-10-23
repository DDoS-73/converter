import { Component, OnInit } from '@angular/core';
import { Observable, take } from "rxjs";
import { CurrencyService } from "../../services/currency.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  currencies!: Observable<string[]>

  amount1 = 0;
  currency1 = 'USD';
  amount2 = 0;
  currency2 = 'UAH';

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencies = this.currencyService.getCurrencies();
  }

  handleFirstInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.amount1 = +target.value;
    this.changeSecondAmount();
  }
  handleFirstSelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.currency1 = target.value;
    this.changeSecondAmount();
  }
  handleSecondInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.amount2 = +target.value;
    this.changeFirstAmount();
  }
  handleSecondSelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.currency2 = target.value;
    this.changeSecondAmount();
  }

  changeSecondAmount() {
    this.currencyService.convert(this.currency1, this.currency2, this.amount1)
      .pipe(take(1))
      .subscribe(res => this.amount2 = res);
  }
  changeFirstAmount() {
    this.currencyService.convert(this.currency2, this.currency1, this.amount2)
      .pipe(take(1))
      .subscribe(res => this.amount1 = res);
  }


}
