import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {

@Input()
public gifs: Gif[] = [];

}
