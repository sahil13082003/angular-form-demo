import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  standalone:true,
  styleUrl: './form.css'
})
export class Form {
  userForm !: FormGroup;
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit():void{
    this.userForm = this.fb.group(
      {
        name: ['',[Validators.required]],
        email:['',[Validators.required, Validators.email]] ,
        password:['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)]],
        gender:['',Validators.required],
        terms:['',Validators.requiredTrue]
      }
    )
  }

  onSubmit():void{
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
    else{
      this.userForm.markAllAsTouched();
      return;
    }
  }
}
