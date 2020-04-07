'use strict';



;define("tasks-audio/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _jsonApi.default;
    }
  });
});
;define("tasks-audio/app", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/createSuper", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/defineProperty", "ember-resolver", "ember-load-initializers", "tasks-audio/config/environment"], function (_exports, _classCallCheck2, _assertThisInitialized2, _createSuper2, _inherits2, _defineProperty2, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var App = /*#__PURE__*/function (_EmberApplication) {
    (0, _inherits2.default)(App, _EmberApplication);

    var _super = (0, _createSuper2.default)(App);

    function App() {
      var _this;

      (0, _classCallCheck2.default)(this, App);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "modulePrefix", _environment.default.modulePrefix);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "podModulePrefix", _environment.default.podModulePrefix);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "Resolver", _emberResolver.default);
      return _this;
    }

    return App;
  }(Ember.Application);

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("tasks-audio/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberComponentManager.default;
    }
  });
});
;define("tasks-audio/components/bulma-button", ["exports", "ember-bulma/components/bulma-button"], function (_exports, _bulmaButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaButton.default;
    }
  });
});
;define("tasks-audio/components/bulma-checkbox", ["exports", "ember-bulma/components/bulma-checkbox"], function (_exports, _bulmaCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaCheckbox.default;
    }
  });
});
;define("tasks-audio/components/bulma-column", ["exports", "ember-bulma/components/bulma-column"], function (_exports, _bulmaColumn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaColumn.default;
    }
  });
});
;define("tasks-audio/components/bulma-columns", ["exports", "ember-bulma/components/bulma-columns"], function (_exports, _bulmaColumns) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaColumns.default;
    }
  });
});
;define("tasks-audio/components/bulma-container", ["exports", "ember-bulma/components/bulma-container"], function (_exports, _bulmaContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaContainer.default;
    }
  });
});
;define("tasks-audio/components/bulma-control", ["exports", "ember-bulma/components/bulma-control"], function (_exports, _bulmaControl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaControl.default;
    }
  });
});
;define("tasks-audio/components/bulma-footer", ["exports", "ember-bulma/components/bulma-footer"], function (_exports, _bulmaFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaFooter.default;
    }
  });
});
;define("tasks-audio/components/bulma-form", ["exports", "ember-bulma/components/bulma-form"], function (_exports, _bulmaForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaForm.default;
    }
  });
});
;define("tasks-audio/components/bulma-header-menu", ["exports", "ember-bulma/components/bulma-header-menu"], function (_exports, _bulmaHeaderMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaHeaderMenu.default;
    }
  });
});
;define("tasks-audio/components/bulma-header", ["exports", "ember-bulma/components/bulma-header"], function (_exports, _bulmaHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaHeader.default;
    }
  });
});
;define("tasks-audio/components/bulma-hero-content", ["exports", "ember-bulma/components/bulma-hero-content"], function (_exports, _bulmaHeroContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaHeroContent.default;
    }
  });
});
;define("tasks-audio/components/bulma-hero-footer", ["exports", "ember-bulma/components/bulma-hero-footer"], function (_exports, _bulmaHeroFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaHeroFooter.default;
    }
  });
});
;define("tasks-audio/components/bulma-hero-header", ["exports", "ember-bulma/components/bulma-hero-header"], function (_exports, _bulmaHeroHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaHeroHeader.default;
    }
  });
});
;define("tasks-audio/components/bulma-hero", ["exports", "ember-bulma/components/bulma-hero"], function (_exports, _bulmaHero) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaHero.default;
    }
  });
});
;define("tasks-audio/components/bulma-input", ["exports", "ember-bulma/components/bulma-input"], function (_exports, _bulmaInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaInput.default;
    }
  });
});
;define("tasks-audio/components/bulma-menu-list", ["exports", "ember-bulma/components/bulma-menu-list"], function (_exports, _bulmaMenuList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaMenuList.default;
    }
  });
});
;define("tasks-audio/components/bulma-menu", ["exports", "ember-bulma/components/bulma-menu"], function (_exports, _bulmaMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaMenu.default;
    }
  });
});
;define("tasks-audio/components/bulma-message-body", ["exports", "ember-bulma/components/bulma-message-body"], function (_exports, _bulmaMessageBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaMessageBody.default;
    }
  });
});
;define("tasks-audio/components/bulma-message-header", ["exports", "ember-bulma/components/bulma-message-header"], function (_exports, _bulmaMessageHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaMessageHeader.default;
    }
  });
});
;define("tasks-audio/components/bulma-message", ["exports", "ember-bulma/components/bulma-message"], function (_exports, _bulmaMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaMessage.default;
    }
  });
});
;define("tasks-audio/components/bulma-modal-background", ["exports", "ember-bulma/components/bulma-modal-background"], function (_exports, _bulmaModalBackground) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaModalBackground.default;
    }
  });
});
;define("tasks-audio/components/bulma-modal-close", ["exports", "ember-bulma/components/bulma-modal-close"], function (_exports, _bulmaModalClose) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaModalClose.default;
    }
  });
});
;define("tasks-audio/components/bulma-modal", ["exports", "ember-bulma/components/bulma-modal"], function (_exports, _bulmaModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaModal.default;
    }
  });
});
;define("tasks-audio/components/bulma-nav-center", ["exports", "ember-bulma/components/bulma-nav-center"], function (_exports, _bulmaNavCenter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaNavCenter.default;
    }
  });
});
;define("tasks-audio/components/bulma-nav-left", ["exports", "ember-bulma/components/bulma-nav-left"], function (_exports, _bulmaNavLeft) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaNavLeft.default;
    }
  });
});
;define("tasks-audio/components/bulma-nav-right", ["exports", "ember-bulma/components/bulma-nav-right"], function (_exports, _bulmaNavRight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaNavRight.default;
    }
  });
});
;define("tasks-audio/components/bulma-nav-toggle", ["exports", "ember-bulma/components/bulma-nav-toggle"], function (_exports, _bulmaNavToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaNavToggle.default;
    }
  });
});
;define("tasks-audio/components/bulma-nav", ["exports", "ember-bulma/components/bulma-nav"], function (_exports, _bulmaNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaNav.default;
    }
  });
});
;define("tasks-audio/components/bulma-notification", ["exports", "ember-bulma/components/bulma-notification"], function (_exports, _bulmaNotification) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaNotification.default;
    }
  });
});
;define("tasks-audio/components/bulma-panel-block", ["exports", "ember-bulma/components/bulma-panel-block"], function (_exports, _bulmaPanelBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaPanelBlock.default;
    }
  });
});
;define("tasks-audio/components/bulma-panel-tabs", ["exports", "ember-bulma/components/bulma-panel-tabs"], function (_exports, _bulmaPanelTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaPanelTabs.default;
    }
  });
});
;define("tasks-audio/components/bulma-panel", ["exports", "ember-bulma/components/bulma-panel"], function (_exports, _bulmaPanel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaPanel.default;
    }
  });
});
;define("tasks-audio/components/bulma-progress", ["exports", "ember-bulma/components/bulma-progress"], function (_exports, _bulmaProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaProgress.default;
    }
  });
});
;define("tasks-audio/components/bulma-radio", ["exports", "ember-bulma/components/bulma-radio"], function (_exports, _bulmaRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaRadio.default;
    }
  });
});
;define("tasks-audio/components/bulma-section", ["exports", "ember-bulma/components/bulma-section"], function (_exports, _bulmaSection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaSection.default;
    }
  });
});
;define("tasks-audio/components/bulma-select", ["exports", "ember-bulma/components/bulma-select"], function (_exports, _bulmaSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaSelect.default;
    }
  });
});
;define("tasks-audio/components/bulma-table", ["exports", "ember-bulma/components/bulma-table"], function (_exports, _bulmaTable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaTable.default;
    }
  });
});
;define("tasks-audio/components/bulma-tabs", ["exports", "ember-bulma/components/bulma-tabs"], function (_exports, _bulmaTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaTabs.default;
    }
  });
});
;define("tasks-audio/components/bulma-tag", ["exports", "ember-bulma/components/bulma-tag"], function (_exports, _bulmaTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaTag.default;
    }
  });
});
;define("tasks-audio/components/bulma-textarea", ["exports", "ember-bulma/components/bulma-textarea"], function (_exports, _bulmaTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bulmaTextarea.default;
    }
  });
});
;define("tasks-audio/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _faIcon.default;
    }
  });
});
;define("tasks-audio/components/play-button", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/createSuper", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@glimmer/component"], function (_exports, _classCallCheck2, _createClass2, _createSuper2, _inherits2, _applyDecoratedDescriptor2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main class="card {{this.color}}">
      <p class="title">{{ @taskName }}</p>
      <p><span class="is-bold">frequency:</span> {{@frequency}}</p>
      <p><span class="is-bold">type:</span> {{@type}}</p>
      <button class="button is-link is-outlined" type="button" {{on "click" this.play}}>
          <span>Play</span>
          <span class="icon is-small">
              <FaIcon @icon="play" />
          </span>
      </button>
  </main>
  */
  {
    id: "xGa4f8o4",
    block: "{\"symbols\":[\"@taskName\",\"@frequency\",\"@type\"],\"statements\":[[7,\"main\",true],[11,\"class\",[29,[\"card \",[23,0,[\"color\"]]]]],[8],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"title\"],[8],[1,[23,1,[]],false],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[7,\"span\",true],[10,\"class\",\"is-bold\"],[8],[0,\"frequency:\"],[9],[0,\" \"],[1,[23,2,[]],false],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[7,\"span\",true],[10,\"class\",\"is-bold\"],[8],[0,\"type:\"],[9],[0,\" \"],[1,[23,3,[]],false],[9],[0,\"\\n    \"],[7,\"button\",false],[12,\"class\",\"button is-link is-outlined\"],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[23,0,[\"play\"]]]],[8],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"Play\"],[9],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"icon is-small\"],[8],[0,\"\\n            \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"play\"]]],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "tasks-audio/components/play-button.hbs"
    }
  });

  var PlayButtonComponent = (_class = /*#__PURE__*/function (_Component) {
    (0, _inherits2.default)(PlayButtonComponent, _Component);

    var _super = (0, _createSuper2.default)(PlayButtonComponent);

    function PlayButtonComponent() {
      (0, _classCallCheck2.default)(this, PlayButtonComponent);
      return _super.apply(this, arguments);
    }

    (0, _createClass2.default)(PlayButtonComponent, [{
      key: "play",
      value: function play() {
        var context = new AudioContext();
        var o = context.createOscillator();
        var g = context.createGain();
        o.type = this.args.type;
        o.connect(g);
        o.frequency.setValueAtTime(this.args.frequency, 0);
        g.connect(context.destination);
        o.start();
        o.stop(context.currentTime + 0.4);
      }
    }]);
    return PlayButtonComponent;
  }(_component.default), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "play", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "play"), _class.prototype)), _class);
  _exports.default = PlayButtonComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PlayButtonComponent);
});
;define("tasks-audio/components/playground", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/createSuper", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component"], function (_exports, _initializerDefineProperty2, _classCallCheck2, _createClass2, _assertThisInitialized2, _createSuper2, _inherits2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
        <main class="card-playground">
          <h1 class="title">Playground</h1>
          <div class="field">
              <span class="label">frequency:</span>
              <div class="control control-frequency">
                  <Input class="input is-info is-large" type="number" @value={{this.frequency}} id="frequency" />
              </div>
          </div>
          <div class="field">
              <span class="label">type:</span>
              <div class="control">
                  <div class="select is-info is-large">
                      <select {{on "change" this.changeType}} id="type" aria-label="change type">
                          {{#each this.typeOptions as |type|}}
                              <option value={{type}}>{{type}}</option>
                          {{/each}}
                      </select>
                  </div>
              </div>
          </div>
          <button class="button is-danger is-outlined" type="button" {{on "click" this.play}}>
              <span>Play</span>
              <span class="icon is-small">
                  <FaIcon @icon="play" />
              </span>
          </button>
      </main>
  */
  {
    id: "qiDdQ3Hc",
    block: "{\"symbols\":[\"type\"],\"statements\":[[0,\"    \"],[7,\"main\",true],[10,\"class\",\"card-playground\"],[8],[0,\"\\n        \"],[7,\"h1\",true],[10,\"class\",\"title\"],[8],[0,\"Playground\"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"field\"],[8],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"label\"],[8],[0,\"frequency:\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"control control-frequency\"],[8],[0,\"\\n                \"],[5,\"input\",[[12,\"class\",\"input is-info is-large\"],[12,\"id\",\"frequency\"],[12,\"type\",\"number\"]],[[\"@value\"],[[23,0,[\"frequency\"]]]]],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"field\"],[8],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"label\"],[8],[0,\"type:\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"control\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"select is-info is-large\"],[8],[0,\"\\n                    \"],[7,\"select\",false],[12,\"id\",\"type\"],[12,\"aria-label\",\"change type\"],[3,\"on\",[\"change\",[23,0,[\"changeType\"]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"typeOptions\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"option\",true],[11,\"value\",[23,1,[]]],[8],[1,[23,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"button\",false],[12,\"class\",\"button is-danger is-outlined\"],[12,\"type\",\"button\"],[3,\"on\",[\"click\",[23,0,[\"play\"]]]],[8],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Play\"],[9],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"icon is-small\"],[8],[0,\"\\n                \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"play\"]]],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "tasks-audio/components/playground.hbs"
    }
  });

  var PlaygroundComponent = (_class = (_temp = /*#__PURE__*/function (_Component) {
    (0, _inherits2.default)(PlaygroundComponent, _Component);

    var _super = (0, _createSuper2.default)(PlaygroundComponent);

    function PlaygroundComponent() {
      var _this;

      (0, _classCallCheck2.default)(this, PlaygroundComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _initializerDefineProperty2.default)((0, _assertThisInitialized2.default)(_this), "frequency", _descriptor, (0, _assertThisInitialized2.default)(_this));
      (0, _initializerDefineProperty2.default)((0, _assertThisInitialized2.default)(_this), "type", _descriptor2, (0, _assertThisInitialized2.default)(_this));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "typeOptions", ['triangle', 'square', 'sine', 'sawtooth']);
      return _this;
    }

    (0, _createClass2.default)(PlaygroundComponent, [{
      key: "changeType",
      value: function changeType(context) {
        this.type = context.target.value;
      }
    }, {
      key: "play",
      value: function play() {
        var context = new AudioContext();
        var o = context.createOscillator();
        var g = context.createGain();
        o.type = this.type;
        o.connect(g);
        o.frequency.setValueAtTime(this.frequency, 0);
        g.connect(context.destination);
        o.start();
        o.stop(context.currentTime + 0.4);
      }
    }]);
    return PlaygroundComponent;
  }(_component.default), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "frequency", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 200;
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "type", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 'triangle';
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "changeType", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "changeType"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "play", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "play"), _class.prototype)), _class);
  _exports.default = PlaygroundComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PlaygroundComponent);
});
;define("tasks-audio/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _welcomePage.default;
    }
  });
});
;define("tasks-audio/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _debug.default;
    }
  });
});
;define("tasks-audio/helpers/app-version", ["exports", "tasks-audio/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;
    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("tasks-audio/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("tasks-audio/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("tasks-audio/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "tasks-audio/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("tasks-audio/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("tasks-audio/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _setup.default;
    }
  });
});
;define("tasks-audio/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("tasks-audio/initializers/export-application-global", ["exports", "tasks-audio/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("tasks-audio/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("tasks-audio/router", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/createSuper", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/defineProperty", "tasks-audio/config/environment"], function (_exports, _classCallCheck2, _assertThisInitialized2, _createSuper2, _inherits2, _defineProperty2, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var Router = /*#__PURE__*/function (_EmberRouter) {
    (0, _inherits2.default)(Router, _EmberRouter);

    var _super = (0, _createSuper2.default)(Router);

    function Router() {
      var _this;

      (0, _classCallCheck2.default)(this, Router);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "location", _environment.default.locationType);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "rootURL", _environment.default.rootURL);
      return _this;
    }

    return Router;
  }(Ember.Router);

  _exports.default = Router;
  Router.map(function () {});
});
;define("tasks-audio/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _json.default;
    }
  });
});
;define("tasks-audio/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _jsonApi.default;
    }
  });
});
;define("tasks-audio/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _rest.default;
    }
  });
});
;define("tasks-audio/services/grid-bindings", ["exports", "ember-bulma/services/grid-bindings"], function (_exports, _gridBindings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gridBindings.default;
    }
  });
});
;define("tasks-audio/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _store.default;
    }
  });
});
;define("tasks-audio/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aQvYDLCP",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\",true],[10,\"class\",\"content section container\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"Behavioral Tasks Initialization Sounds\"],[9],[0,\"\\n    \"],[7,\"main\",true],[10,\"class\",\"container\"],[8],[0,\"\\n        \"],[5,\"play-button\",[],[[\"@taskName\",\"@frequency\",\"@type\"],[\"Provocation\",400,\"sine\"]]],[0,\"\\n        \"],[5,\"play-button\",[],[[\"@taskName\",\"@frequency\",\"@type\"],[\"Beads\",500,\"sine\"]]],[0,\"\\n        \"],[5,\"play-button\",[],[[\"@taskName\",\"@frequency\",\"@type\"],[\"Resting State\",300,\"sine\"]]],[0,\"\\n        \"],[5,\"play-button\",[],[[\"@taskName\",\"@frequency\",\"@type\"],[\"MSIT\",200,\"sine\"]]],[0,\"\\n        \"],[5,\"play-button\",[],[[\"@taskName\",\"@frequency\",\"@type\"],[\"Programming\",600,\"sine\"]]],[0,\"\\n        \"],[5,\"play-button\",[],[[\"@taskName\",\"@frequency\",\"@type\"],[\"TSST\",700,\"sine\"]]],[0,\"\\n        \"],[5,\"play-button\",[],[[\"@taskName\",\"@frequency\",\"@type\"],[\"Interview\",800,\"sine\"]]],[0,\"\\n         \"],[5,\"playground\",[],[[],[]]],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tasks-audio/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("tasks-audio/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _private.BooleanTransform;
    }
  });
});
;define("tasks-audio/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _private.DateTransform;
    }
  });
});
;define("tasks-audio/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _private.NumberTransform;
    }
  });
});
;define("tasks-audio/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _private.StringTransform;
    }
  });
});
;

;define('tasks-audio/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("tasks-audio/app")["default"].create({"name":"tasks-audio","version":"0.0.0+4c38f5e0"});
          }
        
//# sourceMappingURL=tasks-audio.map
