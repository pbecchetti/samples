import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'journyhp';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    
    //change background color menu
    if (window.pageYOffset > 10){
      document.getElementById('navbar').style.backgroundColor="white"
      document.getElementById('navbar').style.color="black"
      document.getElementById('navbar').style.height="60px"
      document.getElementById('navbar').style["boxShadow"]="0px 0px 10px grey"
      document.getElementById('logo2').style.display="inline-block"
      document.getElementById('logo1').style.display="none"
    }else{
      document.getElementById('navbar').style.backgroundColor="transparent"
      document.getElementById('navbar').style.color="white"
      document.getElementById('navbar').style.height="80px"
      document.getElementById('navbar').style["boxShadow"]="none"
      document.getElementById('logo1').style.display="inline-block"
      document.getElementById('logo2').style.display="none"
    }
  }
}
