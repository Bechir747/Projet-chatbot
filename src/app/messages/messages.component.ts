import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  chatForm!: FormGroup;
  messages: { text: string, type: 'sent' | 'received' }[] = [
    { text: 'Hello! How can I assist you today?', type: 'received' }
  ];

  constructor(private fb: FormBuilder) { }

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
