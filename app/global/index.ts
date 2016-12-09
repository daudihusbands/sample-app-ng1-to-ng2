import {ngmodule, loadNg1AppModule} from "../bootstrap/ngmodule";

import {AppConfig} from "./appConfig.service";
import {AuthService} from "./auth.service";
import {Contacts, Folders, Messages} from "./dataSources.service";
import {dialog} from "./dialog.directive";
import {DialogService} from "./dialog.service";
import {authHookRunBlock} from "./requiresAuth.hook";

const globalAppModule = {
  directives: {dialog},
  services: {AppConfig, AuthService, Contacts, Folders, Messages, DialogService},
  runBlocks: [authHookRunBlock]
};

// load the globalAppModule into the ngmodule (angular 1 module)
loadNg1AppModule(ngmodule, globalAppModule)
