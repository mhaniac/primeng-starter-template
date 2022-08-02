import { NgModule } from '@angular/core';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  exports: [PanelMenuModule, MenuModule, ButtonModule, SplitButtonModule],
})
export class PrimengModule {}
