import { Component } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'tnr-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css'],
  providers: [HttpService]
})
export class SubheaderComponent {

  constructor(private httpService: HttpService) { }

  onSubmit(name: string, email: string) {
    this.httpService.sendData({name: name, email: email})
      .subscribe(
        data => console.log(data)
      );
  }

}
