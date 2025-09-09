import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./components/tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent,
        UserComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, 
        RouterModule,
        CommonModule,
        SharedModule,
        TasksModule
    ]
})
export class AppModule {
    
}