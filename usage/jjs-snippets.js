// trigger > jviewcomponent

require('component-dependencies');

module.exports = juno.ViewComponent('path/to/component/ComponentName', {

  events: {
    'eventName1':'eventHandler1',
    'eventName2':'eventHandler2'
  },

  published: {
    'name1':'value1',
    'name2':'value2'
  },

  create: function(){

  },

  preRender: function(){

  },

  postRender: function(){

  },

  postReRender: function(){

  },

  eventHandler1: function(){

  },

  eventHandler2: function(){

  }

});

