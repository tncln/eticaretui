import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import * as $ from 'jquery';
import { ajax, css } from "jquery";
import { Product } from 'src/app/contracts/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  /**
   *
   */
  constructor(spinner : NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);

  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallSpinClockWiseFadeRotating);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    this.httpClientService.post({
      controller: "products"
    },{
      name: "kağıt",
      stock : 1500,
      price: 11
    }).subscribe();
  }
}
