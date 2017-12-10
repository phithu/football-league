import {
  Component,
  Inject
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['profile-dialog.component.scss']
})
export class ProfileDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
