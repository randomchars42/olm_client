import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ModuleRoutingModule } from './module-routing.module';

import { ModuleFormComponent } from './module-form.component';
import { ModuleCreateComponent } from './module-create.component';
import { ModuleEditComponent } from './module-edit.component';
import { ModuleListComponent } from './module-list.component';

@NgModule({
	imports: [
		SharedModule,
		ModuleRoutingModule,
	],
	declarations: [
		ModuleFormComponent,
		ModuleCreateComponent,
		ModuleEditComponent,
		ModuleListComponent,
	],
})

export class ModuleModule {}
