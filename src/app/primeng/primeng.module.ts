import { NgModule } from '@angular/core';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';

@NgModule({
  exports: [PanelMenuModule, MenuModule],
})
export class PrimengModule {}
