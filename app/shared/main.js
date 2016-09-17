import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs';

import { MainModule } from './main.module';

export default () => {
    console.log("Running the main method.");
    platformBrowserDynamic().bootstrapModule(MainModule);
}