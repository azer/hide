var hide = require("./");
var select = require('select-dom');

beforeEach(function(){
  document.body.innerHTML = '<div style="background:red; width:200px; height: 200px;">yooo</div>';
});

it('hides the element matching specified selector', function(){
  hide('div');

  var div = select('div');
  expect(div.style.position).to.equal('absolute');
  expect(div.style.top).to.equal('-9999px');
  expect(div.style.left).to.equal('-9999px');
});

it('hides the given element', function(){
  var div = select('div');
  hide(div);
  expect(div.style.position).to.equal('absolute');
  expect(div.style.top).to.equal('-9999px');
  expect(div.style.left).to.equal('-9999px');
});
