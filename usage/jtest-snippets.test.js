// trigger > jtestcomponent
import {expect} from 'chai';
import JunoTest from 'global/JunoTest';
import ComponentName from 'path/to/component/ComponentName';


describe('ComponentName Type', () => {
  let data;
  beforeEach( () => {
    data = {};
  });

  it('should <expected behavior> when <expected precondition>', (done) => {
    JunoTest.loadComponent(ComponentName,data).then( () => {
    
    }).finish(done);
  });
});

