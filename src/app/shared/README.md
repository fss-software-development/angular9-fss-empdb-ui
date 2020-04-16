 ##SharedModule
 SharedModule holds the common components, directives, and pipes and share them with the modules that need them.
 
 Do not specify app-wide singleton providers in a shared module.
 A lazy-loaded module that imports that shared module makes its own copy of the service.