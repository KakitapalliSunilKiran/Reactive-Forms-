import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';
  name = new FormControl('SUNIL Kakt');

  profileForm = new FormGroup({
    firstName: new FormControl('Sunil Kiran'),
    lastName: new FormControl('Kakitapalli'),
  });

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
