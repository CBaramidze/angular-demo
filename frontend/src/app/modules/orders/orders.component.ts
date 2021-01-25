import { state } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BeginGetOrders } from 'src/app/actions/order.actions';
import { Order } from 'src/app/models/orders.model';
import { getOrders } from 'src/app/reducers/order.reducer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$ = this.store.pipe(select(getOrders));;

  constructor(private store: Store<{ orders: Order[], loaded: boolean }>) {
  }

  ngOnInit() {
    this.store.dispatch(BeginGetOrders());
  }

}