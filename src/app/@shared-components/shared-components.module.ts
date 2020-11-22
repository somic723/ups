import { ArcModule } from '@arc.module/arc.module';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [

  ],
  imports: [

    MaterialModule,
    ArcModule
  ],
  exports: [
  ]
})

export class SharedComponentsModule { }
