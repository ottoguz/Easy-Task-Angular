import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
    BrowserModule,
    UserComponent,
    TasksComponent,
    RouterModule
]
})
export class AppModule {
    
}