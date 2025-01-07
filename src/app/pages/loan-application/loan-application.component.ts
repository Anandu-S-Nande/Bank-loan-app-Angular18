import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Application, Loan } from '../../model/application.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class LoanApplicationComponent {

  application: Application = new Application();
  loan: Loan = new Loan();

  constructor(private cd:ChangeDetectorRef){}

  addLoan(){
    this.application.Loans.push(this.loan);
    this.cd.markForCheck();
  }
}
