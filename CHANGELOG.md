<a name="1.1.30"></a>

# [1.1.30] (2018-10-07)

### NgRx
- **Action** Replace and simplify actions
- **Effects** Implementation of effects to synchronize local store with firebase
- **Reducer** Use of adapter to manage store state
- **Selector** Better selectors implementation
- **Module** Use of `StoreModule.forFeature` and `EffectsModule.forFeature`
- **Component** Use store selectors instead of service functions
- **Service** Focus service to only query firebase

### Performance Improvements
- **Modules** Modules loading changes from eager to lazy ([app.module](https://github.com/BorisObreIllaret/cv/blob/master/src/app/core/app.module.ts))
- **Dependencies** Update all dependencies to latest version ([package.config](https://github.com/BorisObreIllaret/cv/blob/master/package.json))