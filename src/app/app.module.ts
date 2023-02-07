import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavigationComponent,
    ProductCardComponent,
    ProductViewComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
