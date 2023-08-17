import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router){}

  onBtnClick(): void {
    this.router.navigate(['/header'])
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  title = 'training-project';

}
