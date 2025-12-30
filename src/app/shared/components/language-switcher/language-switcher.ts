import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

interface Language {
  code: string;
  imagePath: string;
}
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule, SelectModule, FormsModule],
  template: `
    <div class="language-switcher">
      <p-select
        [options]="languages"
        [(ngModel)]="selectedLanguage"
        (ngModelChange)="onLanguageChange($event)"
        optionLabel="name"
        class="w-auto"
      >
        <ng-template #selectedItem let-selectedOption>
          <div class="flex items-center gap-2">
            <img
              [src]="selectedOption.imagePath"
              [class]="'flag flag-' + selectedOption.code.toUpperCase()"
              style="width: 18px"
              [alt]="selectedOption.code + 'flag'"
            />
            <div>{{ selectedOption.code.toUpperCase() }}</div>
          </div>
        </ng-template>
        <ng-template let-language #item>
          <!-- We declare the variable "language" here -->
          <div class="flex items-center gap-2">
            <img
              [src]="language.imagePath"
              [class]="'flag flag-' + language.code.toLowerCase()"
              style="width: 18px"
              [alt]="language.code + 'flag'"
            />
            <div>{{ language.code.toUpperCase() }}</div>
          </div>
        </ng-template>
        <ng-template #header>
          <div class="font-medium p-3">{{ 'language.availableLanguage' | translate }}</div>
        </ng-template>
      </p-select>
    </div>
  `,
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  private translateService = inject(TranslateService);
  private langChangeSubscription?: Subscription;
  languages: Language[] = [
    { code: 'fr', imagePath: './assets/icons/flags/french-flag.svg' },
    { code: 'en', imagePath: './assets/icons/flags/english-flag.svg' },
  ];
  selectedLanguage?: Language;
  onLanguageChange(language: Language) {
    this.selectedLanguage = language;
    this.translateService.use(language.code);
  }
  /**
   * S'abonne aux changements de langue pour mettre à jour l'interface
   * Cette méthode permet de réagir automatiquement quand l'utilisateur change de langue
   */
  ngOnInit() {
    const currentLang = this.translateService.getCurrentLang();
    const matchLanguage = this.languages.find((language) => language.code === currentLang);
    console.log('matchLanguage => ', matchLanguage);
    this.selectedLanguage = matchLanguage ?? this.languages[0];
    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event) => {
      const matchLanguage = this.languages.find((language) => language.code === event.lang);
      if (matchLanguage) {
        this.selectedLanguage = matchLanguage;
        console.log('Langue changée vers :', event.lang);
      } else {
        console.log('Impossibl de changer la langue  vers :', event.lang);
      }
    });
  }

  ngOnDestroy() {
    this.langChangeSubscription?.unsubscribe();
  }
}
