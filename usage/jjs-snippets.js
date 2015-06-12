// jvc
export default juno.ViewComponent.extend({

  is: 'path/to/component/ComponentName',



});

// jserv
export default juno.Service.extend({

  is: 'services/feed/Feed',

  base: 'https://your/base/url/path/',

  cache: 'client|server|all',


});

// jevt
events: {
  'eventName1':'eventHandler1',
  'eventName2':'eventHandler2'
},

// jdef
defaults() {
  return {
    key: 'value',
    key: 'value'
},

// jcre
create() {

  this.render();
},

// jpre
preRender() {

},

// jpost
postRender() {

},

// jpreup
preUpdate() {

},

// jpostup
postUpdate() {

},

// jset
this.set('stringKey', anythingValue);

// jbubb
this.bubble('event name', data);

// jwaterfall
this.waterfall('event name', data);

// jemit
juno.events.emit('event name', data);

// jnav
juno.router.navigate('/route/path');

