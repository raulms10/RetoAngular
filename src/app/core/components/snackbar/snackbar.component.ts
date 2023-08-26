import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

export class SnackBarComponent {
  public static abrirSnackBar(message: string, snackBar: MatSnackBar): MatSnackBarRef<SimpleSnackBar> {
    return snackBar.open(message, 'OK', {
      duration: 6000,
    });
  }
}