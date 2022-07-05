import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router:Router
  ){

  }
  btn1Name:string="Show output";
  counter:number=0;
  userList:string[]=[
    "user1",
    "user2",
    "user3",
    "user4"
  ]
  myFunc(str:string,name:string):void{
    // console.log(str)
    this.counter++;
    console.log(this.counter)
  }
  onClickHandler(str:string){
    console.log(str+" was clicked")
    this.router.navigate(['header'])
  }
  changeRoute(){
    this.router.navigate(['/contact'])
  }
}

/* ng generate component path/componentname */
/* ng g c path/componentName */
/* ng g m path/modulename --routing */
/* ctrl+shift+p */

/* 
for first commit/push
git status

git add . / git add foldername/filename

git commit -m"initial"
git branch -M main
git remote add origin reposetory link
git push -u origin main
*/

/* 
for commit/push to a existing repo
for first commit/push
git status

git add . / git add foldername/filename

git commit -m"initial"
git push
*/