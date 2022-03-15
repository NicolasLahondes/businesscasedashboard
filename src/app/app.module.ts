import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayChartComponent } from './components/display-chart/display-chart.component';
import { DisplayNumberComponent } from './components/display-number/display-number.component';
import { DisplayType2Component } from './components/display-type2/display-type2.component';
import { FirstPanelComponent } from './components/first-panel/first-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoDisplayComponent } from './components/info-display/info-display.component';
import { ProductLineRankingComponent } from './components/product-line-ranking/product-line-ranking.component';
import { DashboardMainComponent } from './views/dashboard-main/dashboard-main.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardMainComponent,

    FirstPanelComponent,
    DisplayNumberComponent,
    InfoDisplayComponent,
    DisplayChartComponent,
    ProductLineRankingComponent,
    FooterComponent,
    DisplayType2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
