import { Component } from '@angular/core';
import { PortfolioTeaser } from '../../components/portfolio-teaser/portfolio-teaser';
import { ComicSpotlight } from '../../components/comic-spotlight/comic-spotlight';
import { CtaBanner } from "../../components/cta-banner/cta-banner";

@Component({
  selector: 'app-home',
  
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [PortfolioTeaser, ComicSpotlight, CtaBanner],
})
export class Home {
}
