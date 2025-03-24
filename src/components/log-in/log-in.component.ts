import { Component } from '@angular/core';
import { SharedModule } from '../../share/shared.module';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  label1 = `IBMid`;
  label2 = `Forgot ID?`
  theme: "light" | "dark" = 'light';
  ibmid = '';

}
