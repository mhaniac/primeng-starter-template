import { NgModule } from '@angular/core';

import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [
    MainSidebarComponent,
    MainHeaderComponent,
    MainFooterComponent,
  ],
  imports: [PrimengModule],
  exports: [MainSidebarComponent, MainHeaderComponent, MainFooterComponent],
})
export class SharedModule {}
