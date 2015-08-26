// juno:view

export default juno.ViewComponent.extend({

  is: 'path/to/component/ComponentName',

});

// juno:service

export default juno.Service.extend({

  is: 'services/feed/Feed',

  base: 'https://your/base/url/path/',

  cache: 'client|server|all',

});

// juno:events

events: {
  'eventName1':'eventHandler1',
  'eventName2':'eventHandler2'
},

// juno:defaults

defaults() {
  return {
    key: 'value',
    key: 'value'
},

// juno:create

create() {

  this.render();
},

// juno:preRender

preRender() {

},

// juno:postRender

postRender() {

},

// juno:preUpdate

preUpdate() {

},

// juno:postUpdate

postUpdate() {

},

// juno:set

this.set('stringKey', anythingValue);

// juno:bubble

this.bubble('event name', data);

// juno:waterfall

this.waterfall('event name', data);

// juno:emit

juno.events.emit('event name', data);

// juno:navigate

juno.router.navigate('/route/path');

