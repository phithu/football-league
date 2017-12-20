import {
  Pipe,
  PipeTransform
} from '@angular/core';

const TYPE_PLAYER = {
  FOREIGN: 'foreign',
  NATIVE: 'native',
};

@Pipe({
  name: 'typePlayer'
})
export class TypePlayerPipe implements PipeTransform {
  transform(typeUser: string): string {
    return typeUser === TYPE_PLAYER.NATIVE ? 'Trong nước' : 'Nước ngoài';
  }
}
