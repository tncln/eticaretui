import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
constructor(private alertify:AlertifyService){}
ngOnInit(): void {
//this.alertify.message("Merhaba",MessageType.Notify)
}
}
