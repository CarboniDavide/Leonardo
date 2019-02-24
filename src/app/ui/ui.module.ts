import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, ContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
