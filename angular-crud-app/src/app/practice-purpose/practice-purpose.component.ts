import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-purpose',
  templateUrl: './practice-purpose.component.html',
  styleUrls: ['./practice-purpose.component.css']
})
export class PracticePurposeComponent implements OnInit {


  form : any


  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl(),
      address: new FormControl
    })

    skills : new FormArray([]);
  }

  ngOnInit(): void {
  }

  get Fullname(){
    return this.form.get('fullName');
  }

  get Email(){
    return this.form.get('email');
  }

  get Address(){
    return this.form.get('address');
  }

  addskills(skills:HTMLInputElement) {
    (this.form.get('skills') as FormArray).push(
      new FormControl(skills.value)
    )
    console.log(this.form.val)
  }



  onsubmit1() {
    console.log(this.form.value);
  }
  
  onsubmit(f: NgForm) {
    console.log(f.value);
  }

  getValue(val: any) {
    console.log(val.value);
  }

}
