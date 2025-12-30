import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // Injection du service de traduction pour accéder aux traductions dans le service
  private translateService = inject(TranslateService);

  /**
   * Affiche un message de succès traduit
   * Cette méthode récupère la traduction de la clé 'common.success' et l'affiche
   */
  showSuccess(): void {
    this.translateService.get('common.success').subscribe((translation: string) => {
      console.log(translation); // Affiche "Opération réussie" en français ou "Operation successful" en anglais
    });
  }

  /**
   * Récupère une traduction avec des paramètres
   * @param key - La clé de traduction
   * @param params - Les paramètres à insérer dans la traduction
   * @returns Un Observable contenant la traduction
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getTranslation(key: string, params?: any): Observable<string> {
    return this.translateService.get(key, params);
  }
}
