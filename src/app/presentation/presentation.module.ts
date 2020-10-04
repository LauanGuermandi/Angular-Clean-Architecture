import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule
  ],
  declarations: [
    StudentListComponent,
    MainHeaderComponent
  ],
  exports: [
    StudentListComponent,
    MainHeaderComponent
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PresentationModule {}
