// view

export default juno.ViewComponent.extend({

  is: 'path/to/component/ComponentName',

});

// service

export default juno.Service.extend({

  is: 'services/feed/Feed',

  base: 'https://your/base/url/path/',

  cache: 'client|server|all',

});

// events

events: {
  'eventName1':'eventHandler1',
  'eventName2':'eventHandler2'
},

// defaults

defaults() {
  return {
    key: 'value',
    key: 'value'
},

// create

create() {

  this.render();
},

// preRender

preRender() {

},

// postRender

postRender() {

},

// preUpdate

preUpdate() {

},

// postUpdate

postUpdate() {

},

// set

this.set('stringKey', anythingValue);

// bubble

this.bubble('event name', data);

// waterfall

this.waterfall('event name', data);

// emit

juno.events.emit('event name', data);

// navigate

juno.router.navigate('/route/path');

