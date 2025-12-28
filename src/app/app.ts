import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, TranslateModule, LanguageSwitcherComponent], // Call TranslateModule to be available to use "translate" in the template
  template: `
    <div>
      <h1>{{ 'welcome.title' | translate }}</h1>
      <p>{{ 'welcome.message' | translate }}</p>
      <p>{{ 'welcome.description' | translate }}</p>
      <app-language-switcher />
    </div>
  `,
  // templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('angular-base');
  private translateService = inject(TranslateService);
  ngOnInit() {
    // Optionnel : détecter la langue du navigateur
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['fr', 'en'];
    const langToUse = supportedLangs.includes(browserLang) ? browserLang : 'fr';

    // Change la langue si différente de celle configurée par défaut
    this.translateService.use(langToUse);
  }
}
