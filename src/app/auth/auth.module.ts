import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AuthComponent } from './auth.component'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [AuthComponent],
  imports: [RouterModule, CommonModule, AuthRoutingModule, FontAwesomeModule, HttpClientModule]
})
export class AuthModule {}
