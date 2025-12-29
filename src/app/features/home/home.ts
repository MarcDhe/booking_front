import { Component, signal } from '@angular/core';
import { Greeting } from "../../shared/components/test/greeting/greeting";
import { Counter } from '../../shared/components/test/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {
  message= signal("Hello world ")
  testMessage = signal<string | null>(null); // TYPE UNIQUEMENT SI PEUT ETRE NUL AU D2BUT

    keyUpHandler(event?: KeyboardEvent) { // Attention angular 21 event Peut être Event | undefined
      console.log(event?.key);
    }
}
