import { Component, OnInit } from '@angular/core';
import { Component1Component } from "../home/component1/component1.component";
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [Component1Component,  NzAvatarModule,NzDividerModule]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
