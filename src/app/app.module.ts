import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TaskComponent } from "./components/tasks/task/task.component";
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";


@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent,
        UserComponent,
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, 
        RouterModule,
        FormsModule,
        CommonModule,
        SharedModule,
    ]
})
export class AppModule {
    
}