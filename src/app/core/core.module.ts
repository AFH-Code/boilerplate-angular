import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
      if(parentModule){
        throw new Error('CoreModule is already loaded.');
      }
    }
}
