import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './Composants/accueil/accueil.component';
import { FibonacciComponent } from './Composants/fibonacci/fibonacci.component';
import { HuffmanComponent } from './Composants/huffman/huffman.component';
import { ExpressionArithmetiqueComponent } from './Composants/expression-arithmetique/expression-arithmetique.component';
import { MinmaxComponent } from './Composants/minmax/minmax.component';
import { CoursComponent } from './Composants/cours/cours.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FibonacciComponent,
    HuffmanComponent,
    ExpressionArithmetiqueComponent,
    MinmaxComponent,
    CoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
