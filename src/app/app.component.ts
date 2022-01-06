import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomSentence = lorem.sentence();
  typedText = '';
  onUserTypeText(event: Event) {
    const typedText = (<HTMLInputElement>event.target).value;
    this.typedText = typedText;
  }
  isSuccessMessageShown() {
    console.log(this.typedText);
    return this.randomSentence === this.typedText;
  }
  compareForHighlighting(randomLetter: string, typedLetter: string) {
    if (!typedLetter) {
      return 'pending';
    }
    return randomLetter === typedLetter ? 'correct' : 'incorrect';
  }
}
