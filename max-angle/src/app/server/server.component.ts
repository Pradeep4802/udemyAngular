import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    standalone: true,
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: String = 'offline';

    getServerStatus() {
      return this.serverStatus;
    }
}