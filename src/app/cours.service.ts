import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CoursService {

  private cours = new BehaviorSubject<any>(['Angular', 'C#', 'Magento 2']);
  cour = this.cours.asObservable();

  constructor() {
  }

}
