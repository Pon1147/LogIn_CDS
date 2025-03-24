import { Component } from '@angular/core';
import { SharedModule } from '../share/shared.module';
import { LogInComponent } from "../components/log-in/log-in.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, LogInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LogIn-CDS';
}
