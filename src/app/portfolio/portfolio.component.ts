import { Component, OnInit } from '@angular/core';
import { Project } from '../portfolio';
import { PortfolioService } from '../portfolio.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: Project[];
  constructor(
private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.getPortfolio();
    this.filterPortfolio();
  }
  getPortfolio(): void {
    this.portfolioService.getPortfolio()
    .subscribe(portfolio => this.portfolio = portfolio);
  }

  filterPortfolio(): void {
    this.portfolioService.filterPortfolio(['C#']);
  }

}
