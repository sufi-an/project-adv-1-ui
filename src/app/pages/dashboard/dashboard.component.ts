import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  users:any[]=[]
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserInfo()
    .subscribe(res=>{
      console.log(res.results)
      this.user=res.results;
    })

    this.userService.getRandomNames()
    .subscribe(res=>{
      console.log(res.contents);
      console.log(res.success);
      this.users=res.contents;

    })

  }

}
