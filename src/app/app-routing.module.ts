import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './Composants/accueil/accueil.component';
import { FibonacciComponent } from './Composants/fibonacci/fibonacci.component';
import { HuffmanComponent } from './Composants/huffman/huffman.component';
import { ExpressionArithmetiqueComponent } from './Composants/expression-arithmetique/expression-arithmetique.component';
import { MinmaxComponent } from './Composants/minmax/minmax.component';
import {CoursComponent } from './Composants/cours/cours.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'huffman', component: HuffmanComponent },
  { path: 'expression-arithmetique', component: ExpressionArithmetiqueComponent },
  { path: 'minmax', component: MinmaxComponent},
  { path: 'cours', component: CoursComponent},
  { path: '**', redirectTo: '/accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
