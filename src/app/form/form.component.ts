import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { URLService } from '../url.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;
  constructor(private URL:URLService,private router: Router) {
    this.form = new FormGroup({
      'URL': new FormControl("", Validators.required)
    })
  }


  ngOnInit(): void {
  }
  postURL() {
    if (this.form.valid) {
      this.URL.postURL(this.form.value).subscribe((url)=>{
         this.router.navigate([''])
      })
    }
  }


}
