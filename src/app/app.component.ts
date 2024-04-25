import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatbot-app';


  showChatbot: boolean = false;
  constructor(private router: Router, private fb: FormBuilder) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }


  

  toggleChatbot(): void {
    this.showChatbot = !this.showChatbot;
  }


  chatForm!: FormGroup;
  messages: { text: string, type: 'sent' | 'received' }[] = [
    { text: 'Hello! How can I assist you today?', type: 'received' }
  ];



  ngOnInit(): void {
    this.chatForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  sendMessage(): void {
    if (this.chatForm.valid) {
      const messageText = this.chatForm.get('message')?.value;
      this.messages.push({ text: messageText, type: 'sent' });
      this.chatForm.reset();
      
      // Simulating a received message (You can replace this with actual chatbot logic)
      setTimeout(() => {
        this.messages.push({ text: 'I got your message!', type: 'received' });
      }, 1000);
    }
  }
}
