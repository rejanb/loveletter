import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'love-calculator';
  isShown: boolean = false; // hidden by default
  isform: boolean = true;

  name = '';
  year = '';
  favColour = '';
  loveAbout = '';
  randomItem = '';

  clear() {
    (<HTMLInputElement>document.getElementById('name')).value = '';
    (<HTMLInputElement>document.getElementById('year')).value = '';
    (<HTMLInputElement>document.getElementById('favColour')).value = '';
    (<HTMLInputElement>document.getElementById('loveabout')).value = '';
  }

  toggleShow() {
    
      this.isShown = !this.isShown;
      this.isform = !this.isform;
      this.name = (<HTMLInputElement>document.getElementById('name')).value;
      this.year = (<HTMLInputElement>document.getElementById('year')).value;
      this.favColour = (<HTMLInputElement>(
        document.getElementById('favColour')
      )).value;
      this.loveAbout = (<HTMLInputElement>(
        document.getElementById('loveabout')
      )).value;

      //add the letters here
      var myArray = [
        'His ' +
          this.loveAbout +
          'is infectious, that is what I love bout You. ',
        // "Bananas"+ this.favColour, 
        // "Pears" +this.loveAbout
      ];
  }

  return() {
    this.isShown = !this.isShown;
    this.isform = !this.isform;
  }
}
