import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

import { InstrumentComponent } from './instrument/instrument.component';
import { ContentComponent } from './instrumente/content/content.component';
import { InstrumenteComponent } from './instrumente/instrumente.component';
import { SidenavComponent } from './instrumente/sidenav/sidenav.component';

@NgModule({
  declarations: [InstrumenteComponent, InstrumentComponent, SidenavComponent, ContentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    RouterModule.forChild([
      { path: 'instrumente', component: InstrumenteComponent },
      { path: 'instrumente/:id', component: InstrumentComponent }
    ])
  ]
})
export class InstrumenteModule {}
