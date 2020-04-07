'use strict';

define("tasks-audio/tests/integration/components/play-button-test", ["@babel/runtime/helpers/esm/asyncToGenerator", "qunit", "ember-qunit", "@ember/test-helpers"], function (_asyncToGenerator2, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | play-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PlayButton />
                */
                {
                  id: "okd1H81m",
                  block: "{\"symbols\":[],\"statements\":[[5,\"play-button\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PlayButton>
                        template block text
                      </PlayButton>
                    
                */
                {
                  id: "0oMHLiZh",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"play-button\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("tasks-audio/tests/integration/components/playground-test", ["@babel/runtime/helpers/esm/asyncToGenerator", "qunit", "ember-qunit", "@ember/test-helpers"], function (_asyncToGenerator2, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | playground', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Playground />
                */
                {
                  id: "XzyIma/f",
                  block: "{\"symbols\":[],\"statements\":[[5,\"playground\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <Playground>
                        template block text
                      </Playground>
                    
                */
                {
                  id: "8SCBjIa6",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"playground\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("tasks-audio/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/play-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/play-button.js should pass ESLint\n\n');
  });
  QUnit.test('components/playground.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/playground.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("tasks-audio/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('tasks-audio/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tasks-audio/templates/application.hbs should pass TemplateLint.\n\n');
  });
});
define("tasks-audio/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/play-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/play-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/playground-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/playground-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("tasks-audio/tests/test-helper", ["tasks-audio/app", "tasks-audio/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('tasks-audio/config/environment', [], function() {
  var prefix = 'tasks-audio';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('tasks-audio/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
