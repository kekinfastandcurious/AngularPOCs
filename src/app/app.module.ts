import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { POC1Component } from './poc1/poc1.component';
import { UsersComponent } from './poc1/users.component';
import { POC2Component } from './poc2/poc2.component';
import { POC3Component } from './poc3/poc3.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WellListComponent } from './poc2/well-list.component';
import { WellComponent } from './poc2/well.component';
import { TestComponent } from './poc3/test/test.component';
import { DynamicLoaderDirective } from './poc3/dynamic-loader.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    POC1Component,
    POC2Component,
    POC3Component,
    UsersComponent,
    WellListComponent,
    WellComponent,
    TestComponent,
    DynamicLoaderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
