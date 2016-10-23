import { Component, OnInit } from '@angular/core';
import { TopSpendersService } from '../../shared/services/top-spenders.service'

@Component({
  selector: 'tnr-top-spenders',
  templateUrl: './top-spenders.component.html',
  styleUrls: ['./top-spenders.component.css'],
  providers: [TopSpendersService]
})
export class TopSpendersComponent implements OnInit {
  spenders: any[] = [];

  constructor(private TopSpendersService: TopSpendersService) {
    this.TopSpendersService.getTopSpendersThisMonth().subscribe(
      data => this.spenders = data.reverse()
    );
  }

  ngOnInit() {
  }

}
