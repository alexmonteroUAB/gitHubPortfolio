import { Component, OnInit } from '@angular/core';

import { InfoService } from '../../../services/info.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any = [];

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {

    this.infoService.getInfoEquipo()
    .subscribe((resp: any) => {
      console.log(resp);
      this.equipo = resp;

    }
    )
  }

}
