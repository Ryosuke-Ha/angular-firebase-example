import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  petIds = [...Array(10)].map((_, i) => i + 1);

  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: true,
    centeredSlides: true,
    slidesPerView: 3,
  };

  selectedPetIds = 0;

  form = this.formBuilder.group({
    name:['',[
      Validators.required,
      Validators.maxLength(40)
    ]],
    gender:['',[
      Validators.required,
      Validators.pattern(/male|female/)
    ]]
  });

  get nameControl(){
    return this.form.get('name') as FormControl;
  }

  get genderControl(){
    return this.form.get('gender') as FormControl;
  }

  constructor(
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
    console.log(this.selectedPetIds);
  }

}
