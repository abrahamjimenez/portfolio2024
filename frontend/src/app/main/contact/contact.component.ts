import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private httpClient = inject(HttpClient)
  private destroyRef = inject(DestroyRef)

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    const enteredEmail = formData.form.value.email
    const enteredMessage = formData.form.value.message

    console.log(formData);
    console.log(enteredEmail, enteredMessage);

    const subscription = this.httpClient.post("http://localhost:3000/api/mail", {
      email: enteredEmail,
      message: enteredMessage
    }).subscribe({
      next: (resData) => {
        console.log(resData);
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }

  ngOnInit() {
    // const subscription = this.httpClient.get("http://localhost:3000/api/mail").subscribe({
    //   next: (resData) => {
    //     console.log(resData);
    //   }
    // })
    //
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe()
    // })
  }
}
