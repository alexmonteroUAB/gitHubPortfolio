import { Component, OnInit } from '@angular/core';

import { InfoService } from 'src/app/services/info.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  infopag: any = ''

  fecha = new Date().getFullYear();

  


  constructor(private infoservice: InfoService) { 
    


  }

  ngOnInit(): void {

    this.infoservice.getInfoPagina()
    .subscribe((resp: any) => {
      
      this.infopag = resp;
    });
    
  }

}
