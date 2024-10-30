import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[
    {
      name: 'Trunk',
      power: 10
    }
  ]

  @Output()
  public onDelete: EventEmitter<string | undefined> = new EventEmitter();


  onDeleteCharacter(id: string | undefined):void{

    this.onDelete.emit(id);
  }
}
