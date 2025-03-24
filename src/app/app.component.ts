import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ featherAirplay, heroUsers })]
})
export class AppComponent {
  title = 'LogIn-CDS';
}
