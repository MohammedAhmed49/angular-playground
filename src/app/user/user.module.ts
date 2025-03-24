import { NgModule } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent],
  imports: [SharedModule], // Import the CardComponent from the shared module
  exports: [UserComponent],
})
export class UserModule {}
