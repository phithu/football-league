import {
  Pipe,
  PipeTransform
} from '@angular/core';

const TYPE_USER = {
  ADMIN: 'admin',
  OWNER: 'owner'
};

@Pipe({
  name: 'typeUser'
})
export class TypeUserPipe implements PipeTransform {

  transform(typeUser: string): string {
    return typeUser === TYPE_USER.ADMIN ? 'Quản trị viên' : 'Quản lí';
  }

}
