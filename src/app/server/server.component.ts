//To create component
// Component is a typescript class.

//We add a decorator to distinguish component from the class.

import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {}
