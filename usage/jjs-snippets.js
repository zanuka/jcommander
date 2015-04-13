// jvc
export default juno.ViewComponent.extend({
  is: 'path/to/component/ComponentName',



});

// japi
export default juno.APIComponent.extend({

  is: 'path/to/component/ComponentName',

  base: 'http://your.base.url',

  serverCache: true,

});

// jevt
events: {
  'eventName1':'eventHandler1',
  'eventName2':'eventHandler2'
},

// jpub
published: {
  'value1':'value1',
  'name2':'value2'
},

// jcreate
create(req){

},

// jpre
preRender(){

},

// jpost
postRender(){

},

// jpreup
preUpdate(){

},

// jpostup
postUpdate(){

},

// jset
this.set('stringKey', anythingValue);

// jget
this.get('stringKey');

// jbubb
this.bubble('event name', data);

// jwaterfall
this.waterfall('event name', data);

// jtrigger
juno.trigger('event name', data);

// jnav
juno.router.navigate('/route/path');

