/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Checklist =
/*#__PURE__*/
function () {
  function Checklist() {
    _classCallCheck(this, Checklist);

    this.dom = {
      cbRole: document.querySelectorAll('.js-set-role'),
      articles: document.querySelectorAll('.js-article'),
      sections: document.querySelectorAll('.section'),
      toggles: document.querySelectorAll('[data-toggle-ref]'),
      subs: document.querySelectorAll('input[type="submit"]'),
      generalCopy: document.querySelector('.general-copy')
    };
  }

  _createClass(Checklist, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.dom.toggles.forEach(function (toggle) {
        return _this.initElementToggled(toggle);
      });
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.dom.cbRole.forEach(function (cbRole) {
        return cbRole.addEventListener('change', function (e) {
          return _this2.setRole(e);
        });
      });
      this.dom.subs.forEach(function (sub) {
        return sub.addEventListener('click', function (e) {
          return _this2.initForm(e);
        });
      });
    }
  }, {
    key: "initForm",
    value: function initForm(e) {
      e.preventDefault();
      var submit = e.target;
      var form = submit.closest('form');
      var copiedMsg = form.querySelector('.copied-msg');
      var output = form.output;
      var html = this.getArticles(form);
      this.copyStringToClipboard(html);
      output.value = html;
      copiedMsg.classList.add('flipin');
      copiedMsg.addEventListener('animationend', function () {
        return copiedMsg.classList.remove('flipin');
      });
    }
  }, {
    key: "setRole",
    value: function setRole(e) {
      var role = e.target.getAttribute('data-role');
      document.body.classList.toggle("show-".concat(role), e.target.checked);
    }
  }, {
    key: "getNode",
    value: function getNode(selector, form) {
      if (selector.startsWith('.') || selector.startsWith('#')) {
        return form.querySelectorAll(selector);
      } else {
        return form[selector];
      }
    }
  }, {
    key: "initElementToggled",
    value: function initElementToggled(element) {
      var context = element.closest('form');
      var selector = element.getAttribute('data-toggle-ref');
      var inputsArr = this.getNode(selector, context);
      if (!inputsArr.length) inputsArr = [inputsArr]; // Force inputs to be an array even if there is only 1 value

      var type = inputsArr[0].type; // radio, checkbox, etc.

      switch (type) {
        case 'radio':
          this.initElementToggledByRadio(element, inputsArr);
          break;

        case 'checkbox':
          this.initElementToggledByCheckbox(element, inputsArr);
          break;
      }
    }
  }, {
    key: "getAcceptableRadiosValues",
    value: function getAcceptableRadiosValues(element) {
      var str = element.getAttribute('data-toggle-visible');
      var arr = str === null ? [] : str.split('||');
      return arr;
    }
  }, {
    key: "initElementToggledByRadio",
    value: function initElementToggledByRadio(element, radiosArr) {
      var _this3 = this;

      var acceptableRadiosValuesArr = this.getAcceptableRadiosValues(element);

      var _loop = function _loop(x) {
        var radio = radiosArr[x];

        if (radio.checked) {
          _this3.setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr);
        }

        radio.addEventListener('change', function () {
          return _this3.setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr);
        });
      };

      for (var x = 0; x < radiosArr.length; x++) {
        _loop(x);
      }
    }
  }, {
    key: "setElementToggledByRadioVisibility",
    value: function setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr) {
      var isRadioVisible = radio.offsetParent !== null;
      var isAcceptable = acceptableRadiosValuesArr.indexOf(radio.value) !== -1;
      var shouldBeVisible = radio.checked && isAcceptable && isRadioVisible;

      if (shouldBeVisible) {
        element.style.display = '';
        this.checkChildrenInputs(element);
      } else {
        element.style.display = 'none';
      }
    }
  }, {
    key: "initElementToggledByCheckbox",
    value: function initElementToggledByCheckbox(element, checkboxesArr) {
      var _this4 = this;

      var min = element.getAttribute('data-toggle-min');

      if (min !== null) {
        this.setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min);

        for (var x = 0; x < checkboxesArr.length; x++) {
          var checkbox = checkboxesArr[x];
          checkbox.addEventListener('change', function () {
            return _this4.setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min);
          });
        }
      } else {
        var _loop2 = function _loop2(_x) {
          var checkbox = checkboxesArr[_x];

          _this4.setElementToggledByCheckboxVisibility(element, checkbox);

          checkbox.addEventListener('change', function () {
            return _this4.setElementToggledByCheckboxVisibility(element, checkbox);
          });
        };

        for (var _x = 0; _x < checkboxesArr.length; _x++) {
          _loop2(_x);
        }
      }
    }
  }, {
    key: "setElementToggledByCheckboxVisibility",
    value: function setElementToggledByCheckboxVisibility(element, checkbox) {
      var isCheckboxVisible = checkbox.offsetParent !== null;

      if (checkbox.checked && isCheckboxVisible) {
        element.style.display = '';
        this.checkChildrenInputs(element);
      } else {
        element.style.display = 'none';
      }
    }
  }, {
    key: "setElementToggledByCheckboxMinVisibility",
    value: function setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min) {
      var nbrChecked = 0;

      for (var x = 0; x < checkboxesArr.length; x++) {
        if (checkboxesArr[x].checked) nbrChecked++;
      }

      var areCheckboxesVisibles = checkboxesArr[0].offsetParent !== null;
      var shouldBeVisible = nbrChecked >= parseInt(min) && areCheckboxesVisibles;

      if (shouldBeVisible) {
        element.style.display = '';
        this.checkChildrenInputs(element);
      } else {
        element.style.display = 'none';
      }
    }
  }, {
    key: "checkChildrenInputs",
    value: function checkChildrenInputs(parent) {
      var input = parent.querySelector('input:checked');

      if (input !== null) {
        var type = input.type; // radio, checkbox, etc.

        var elements = document.querySelectorAll("[data-toggle-ref=\"".concat(input.name, "\"]"));

        for (var x = 0; x < elements.length; x++) {
          var element = elements[x];

          switch (type) {
            case 'radio':
              this.setElementToggledByRadioVisibility(element, input, this.getAcceptableRadiosValues(element));
              break;

            case 'checkbox':
              this.setElementToggledByCheckboxVisibility(element, input);
              break;
          }
        }
      }
    }
  }, {
    key: "getArticles",
    value: function getArticles(form) {
      var html = '';
      var content = this.getSections(form);

      if (content !== '') {
        var title = form.querySelector('h2').innerText;
        html += "h2. ".concat(title, "\n");
        html += content;
        html += '\n----';
      }

      return html;
    }
  }, {
    key: "getSections",
    value: function getSections(article) {
      var html = '';
      var sections = article.querySelectorAll('.section');

      for (var x = 0; x < sections.length; x++) {
        var section = sections[x];
        var type = this.getSectionType(section);
        var content = '';

        if (type === 'ul' || type === 'ol') {
          content = this.getListContent(section, type);
        }

        if (content !== '') {
          var title = '';
          var h3 = section.querySelector('h3');

          if (h3 !== null) {
            title = h3.innerText;

            if (title !== '') {
              html += "h3. ".concat(title, "\n");
            }
          }

          html += "".concat(content, "\n\n");
        }
      }

      return html;
    }
  }, {
    key: "getSectionType",
    value: function getSectionType(section) {
      var type = 'text';

      if (section.querySelector('ol')) {
        type = 'ol';
      } else if (section.querySelector('ul')) {
        type = 'ul';
      }

      return type;
    }
  }, {
    key: "getListContent",
    value: function getListContent(section, type) {
      var html = '';
      var items = section.querySelectorAll('li');
      var arr = [];

      for (var x = 0; x < items.length; x++) {
        var item = items[x];

        if (item.offsetParent !== null) {
          // L'élément est visible
          var text = this.getInput(item);

          if (text !== '') {
            arr.push(text);
          }
        }
      }

      if (arr.length > 1) {
        var prefix = type === 'ul' ? '*' : '#';
        html = prefix + ' ' + arr.join("\n".concat(prefix, " "));
      } else if (arr.length === 1) {
        html = arr[0];
      }

      return html;
    }
  }, {
    key: "getInput",
    value: function getInput(node) {
      var input = node.querySelector('input');
      var select = node.querySelector('select');
      var textarea = node.querySelector('textarea');
      var html = '';

      if (input !== null) {
        switch (input.type) {
          case 'url':
            html = this.getUrl(node, input);
            break;

          case 'date':
            html = this.getDate(node, input);
            break;

          case 'radio':
            html = this.getRadio(node, input);
            break;

          case 'checkbox':
            html = this.getCheckbox(node, input);
            break;
        }
      } else if (select !== null) {
        html = this.getSelect(node, select);
      } else if (textarea !== null) {
        html = this.getTextarea(node, textarea);
      }

      return html;
    }
  }, {
    key: "getTextarea",
    value: function getTextarea(node, textarea) {
      var html = '';

      if (textarea.value !== '') {
        var prefix = this.getText(node);
        if (prefix !== '') prefix += ': ';
        html = "".concat(prefix).concat(textarea.value);
      }

      return html;
    }
  }, {
    key: "getSelect",
    value: function getSelect(node, select) {
      var html = '';

      if (select.options[select.selectedIndex].value !== '') {
        html = "".concat(this.getText(node), " ").concat(select.options[select.selectedIndex].text);
      }

      return html;
    }
  }, {
    key: "getDate",
    value: function getDate(node, input) {
      var html = '';

      if (input.value !== '') {
        var suffix = this.getText(node);
        if (suffix !== '') suffix = ": ".concat(suffix);
        html = "*".concat(input.value, "*").concat(suffix);
      }

      return html;
    }
  }, {
    key: "getUrl",
    value: function getUrl(node, input) {
      var html = '';

      if (input.value !== '') {
        var url = input.value;

        if (url.startsWith('http')) {
          url = "[".concat(url, "]");
        }

        html = "*".concat(this.getText(node), "*: ").concat(url);
      }

      return html;
    }
  }, {
    key: "getRadio",
    value: function getRadio(node, input) {
      var html = '';
      var name = input.getAttribute('name');
      var form = input.closest('form');
      var value = this.getNode(name, form).value;

      if (value !== '') {
        var prefix = this.getText(node);
        if (prefix !== '') prefix += ': ';
        html = "".concat(prefix, "*").concat(value, "*");
      }

      return html;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(node, input) {
      var html = '';

      if (input.checked) {
        html = this.getText(node);
      }

      return html;
    }
  }, {
    key: "getText",
    value: function getText(node) {
      var str = node.innerHTML;
      str = this.replaceImg(str);
      str = this.stripTags(str);
      str = str.trim(); // remove start and end whitespaces;

      str = str.replace(/\r?\n|\r/g, ''); // strip linebreaks;

      str = str.replace(/ +(?= )/g, ''); // strip multiple white spaces;

      return str;
    }
  }, {
    key: "replaceImg",
    value: function replaceImg(str) {
      var newStr = str.replace(/<img src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g, function (match, p1) {
        return "!".concat(p1, "!");
      });
      return newStr;
    }
  }, {
    key: "stripTags",
    value: function stripTags(str) {
      var el = document.createElement('div');
      el.innerHTML = str;
      el.querySelectorAll('.js-dont-output').forEach(function (e) {
        return e.parentNode.removeChild(e);
      });
      str = el.innerText;
      return str;
    }
  }, {
    key: "copyStringToClipboard",
    value: function copyStringToClipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style = {
        position: 'absolute',
        left: '-9999px'
      };
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      console.log(str);
    }
  }]);

  return Checklist;
}();

var checklist = new Checklist();
checklist.init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwidG9nZ2xlcyIsInN1YnMiLCJnZW5lcmFsQ29weSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwidG9nZ2xlIiwiaW5pdEVsZW1lbnRUb2dnbGVkIiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0Um9sZSIsInN1YiIsImluaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXQiLCJ0YXJnZXQiLCJmb3JtIiwiY2xvc2VzdCIsImNvcGllZE1zZyIsIm91dHB1dCIsImh0bWwiLCJnZXRBcnRpY2xlcyIsImNvcHlTdHJpbmdUb0NsaXBib2FyZCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicm9sZSIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJjaGVja2VkIiwic2VsZWN0b3IiLCJzdGFydHNXaXRoIiwiZWxlbWVudCIsImNvbnRleHQiLCJpbnB1dHNBcnIiLCJnZXROb2RlIiwibGVuZ3RoIiwidHlwZSIsImluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8iLCJpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94Iiwic3RyIiwiYXJyIiwic3BsaXQiLCJyYWRpb3NBcnIiLCJhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyIiwiZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyIsIngiLCJyYWRpbyIsInNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkiLCJpc1JhZGlvVmlzaWJsZSIsIm9mZnNldFBhcmVudCIsImlzQWNjZXB0YWJsZSIsImluZGV4T2YiLCJzaG91bGRCZVZpc2libGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjaGVja0NoaWxkcmVuSW5wdXRzIiwiY2hlY2tib3hlc0FyciIsIm1pbiIsInNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkiLCJjaGVja2JveCIsInNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkiLCJpc0NoZWNrYm94VmlzaWJsZSIsIm5ickNoZWNrZWQiLCJhcmVDaGVja2JveGVzVmlzaWJsZXMiLCJwYXJzZUludCIsInBhcmVudCIsImlucHV0IiwiZWxlbWVudHMiLCJuYW1lIiwiY29udGVudCIsImdldFNlY3Rpb25zIiwidGl0bGUiLCJpbm5lclRleHQiLCJhcnRpY2xlIiwic2VjdGlvbiIsImdldFNlY3Rpb25UeXBlIiwiZ2V0TGlzdENvbnRlbnQiLCJoMyIsIml0ZW1zIiwiaXRlbSIsInRleHQiLCJnZXRJbnB1dCIsInB1c2giLCJwcmVmaXgiLCJqb2luIiwibm9kZSIsInNlbGVjdCIsInRleHRhcmVhIiwiZ2V0VXJsIiwiZ2V0RGF0ZSIsImdldFJhZGlvIiwiZ2V0Q2hlY2tib3giLCJnZXRTZWxlY3QiLCJnZXRUZXh0YXJlYSIsImdldFRleHQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInN1ZmZpeCIsInVybCIsImlubmVySFRNTCIsInJlcGxhY2VJbWciLCJzdHJpcFRhZ3MiLCJ0cmltIiwicmVwbGFjZSIsIm5ld1N0ciIsIm1hdGNoIiwicDEiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJwb3NpdGlvbiIsImxlZnQiLCJhcHBlbmRDaGlsZCIsImV4ZWNDb21tYW5kIiwiY29uc29sZSIsImxvZyIsImNoZWNrbGlzdCIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNB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QUFRLEVBQUUsVUFBWjtBQUF3QkMsWUFBSSxFQUFFO0FBQTlCLE9BQVg7QUFDQXZILGNBQVEsQ0FBQ2lDLElBQVQsQ0FBY3VGLFdBQWQsQ0FBMEJQLEVBQTFCO0FBQ0FBLFFBQUUsQ0FBQ3JCLE1BQUg7QUFDQTVGLGNBQVEsQ0FBQ3lILFdBQVQsQ0FBcUIsTUFBckI7QUFDQXpILGNBQVEsQ0FBQ2lDLElBQVQsQ0FBY21GLFdBQWQsQ0FBMEJILEVBQTFCO0FBQ0FTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZOUUsR0FBWjtBQUNEOzs7Ozs7QUFHSCxJQUFJK0UsU0FBUyxHQUFHLElBQUkvSCxTQUFKLEVBQWhCO0FBQ0ErSCxTQUFTLENBQUNDLElBQVYsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCJjbGFzcyBDaGVja2xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIGNiUm9sZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNldC1yb2xlJyksXG4gICAgICBhcnRpY2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFydGljbGUnKSxcbiAgICAgIHNlY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpLFxuICAgICAgdG9nZ2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLXJlZl0nKSxcbiAgICAgIHN1YnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgIGdlbmVyYWxDb3B5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuZXJhbC1jb3B5JylcbiAgICB9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRvbS50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRoaXMuaW5pdEVsZW1lbnRUb2dnbGVkKHRvZ2dsZSkpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmRvbS5jYlJvbGUuZm9yRWFjaChjYlJvbGUgPT5cbiAgICAgIGNiUm9sZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHRoaXMuc2V0Um9sZShlKSlcbiAgICApO1xuICAgIHRoaXMuZG9tLnN1YnMuZm9yRWFjaChzdWIgPT5cbiAgICAgIHN1Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5pbml0Rm9ybShlKSlcbiAgICApO1xuICB9XG5cbiAgaW5pdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc3VibWl0ID0gZS50YXJnZXQ7XG4gICAgbGV0IGZvcm0gPSBzdWJtaXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBjb3BpZWRNc2cgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jb3BpZWQtbXNnJyk7XG4gICAgbGV0IG91dHB1dCA9IGZvcm0ub3V0cHV0O1xuXG4gICAgbGV0IGh0bWwgPSB0aGlzLmdldEFydGljbGVzKGZvcm0pO1xuICAgIHRoaXMuY29weVN0cmluZ1RvQ2xpcGJvYXJkKGh0bWwpO1xuICAgIG91dHB1dC52YWx1ZSA9IGh0bWw7XG4gICAgY29waWVkTXNnLmNsYXNzTGlzdC5hZGQoJ2ZsaXBpbicpO1xuICAgIGNvcGllZE1zZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PlxuICAgICAgY29waWVkTXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBpbicpXG4gICAgKTtcbiAgfVxuXG4gIHNldFJvbGUoZSkge1xuICAgIGxldCByb2xlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJvbGUnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShgc2hvdy0ke3JvbGV9YCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gIH1cblxuICBnZXROb2RlKHNlbGVjdG9yLCBmb3JtKSB7XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoJy4nKSB8fCBzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ybVtzZWxlY3Rvcl07XG4gICAgfVxuICB9XG5cbiAgaW5pdEVsZW1lbnRUb2dnbGVkKGVsZW1lbnQpIHtcbiAgICBsZXQgY29udGV4dCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS1yZWYnKTtcbiAgICBsZXQgaW5wdXRzQXJyID0gdGhpcy5nZXROb2RlKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICBpZiAoIWlucHV0c0Fyci5sZW5ndGgpIGlucHV0c0FyciA9IFtpbnB1dHNBcnJdOyAvLyBGb3JjZSBpbnB1dHMgdG8gYmUgYW4gYXJyYXkgZXZlbiBpZiB0aGVyZSBpcyBvbmx5IDEgdmFsdWVcbiAgICBsZXQgdHlwZSA9IGlucHV0c0FyclswXS50eXBlOyAvLyByYWRpbywgY2hlY2tib3gsIGV0Yy5cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB0aGlzLmluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8oZWxlbWVudCwgaW5wdXRzQXJyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHRoaXMuaW5pdEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveChlbGVtZW50LCBpbnB1dHNBcnIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRBY2NlcHRhYmxlUmFkaW9zVmFsdWVzKGVsZW1lbnQpIHtcbiAgICBsZXQgc3RyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlLXZpc2libGUnKTtcbiAgICBsZXQgYXJyID0gc3RyID09PSBudWxsID8gW10gOiBzdHIuc3BsaXQoJ3x8Jyk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgaW5pdEVsZW1lbnRUb2dnbGVkQnlSYWRpbyhlbGVtZW50LCByYWRpb3NBcnIpIHtcbiAgICBsZXQgYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0FyciA9IHRoaXMuZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyhlbGVtZW50KTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgcmFkaW9zQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSByYWRpb3NBcnJbeF07XG5cbiAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudFRvZ2dsZWRCeVJhZGlvVmlzaWJpbGl0eShcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHJhZGlvLFxuICAgICAgICAgIGFjY2VwdGFibGVSYWRpb3NWYWx1ZXNBcnJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW9WaXNpYmlsaXR5KFxuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgcmFkaW8sXG4gICAgICAgICAgYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0FyclxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkoXG4gICAgZWxlbWVudCxcbiAgICByYWRpbyxcbiAgICBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyXG4gICkge1xuICAgIGxldCBpc1JhZGlvVmlzaWJsZSA9IHJhZGlvLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICBsZXQgaXNBY2NlcHRhYmxlID0gYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0Fyci5pbmRleE9mKHJhZGlvLnZhbHVlKSAhPT0gLTE7XG4gICAgbGV0IHNob3VsZEJlVmlzaWJsZSA9IHJhZGlvLmNoZWNrZWQgJiYgaXNBY2NlcHRhYmxlICYmIGlzUmFkaW9WaXNpYmxlO1xuXG4gICAgaWYgKHNob3VsZEJlVmlzaWJsZSkge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICB0aGlzLmNoZWNrQ2hpbGRyZW5JbnB1dHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICBpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIpIHtcbiAgICBsZXQgbWluID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlLW1pbicpO1xuXG4gICAgaWYgKG1pbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5KFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBjaGVja2JveGVzQXJyLFxuICAgICAgICBtaW5cbiAgICAgICk7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2hlY2tib3hlc0Fyci5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgY2hlY2tib3ggPSBjaGVja2JveGVzQXJyW3hdO1xuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5KFxuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIGNoZWNrYm94ZXNBcnIsXG4gICAgICAgICAgICBtaW5cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2hlY2tib3hlc0Fyci5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgY2hlY2tib3ggPSBjaGVja2JveGVzQXJyW3hdO1xuXG4gICAgICAgIHRoaXMuc2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94VmlzaWJpbGl0eShlbGVtZW50LCBjaGVja2JveCk7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hWaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3gpIHtcbiAgICBsZXQgaXNDaGVja2JveFZpc2libGUgPSBjaGVja2JveC5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgJiYgaXNDaGVja2JveFZpc2libGUpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuSW5wdXRzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94TWluVmlzaWJpbGl0eShlbGVtZW50LCBjaGVja2JveGVzQXJyLCBtaW4pIHtcbiAgICBsZXQgbmJyQ2hlY2tlZCA9IDA7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNoZWNrYm94ZXNBcnIubGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChjaGVja2JveGVzQXJyW3hdLmNoZWNrZWQpIG5ickNoZWNrZWQrKztcbiAgICB9XG5cbiAgICBsZXQgYXJlQ2hlY2tib3hlc1Zpc2libGVzID0gY2hlY2tib3hlc0FyclswXS5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gICAgbGV0IHNob3VsZEJlVmlzaWJsZSA9IG5ickNoZWNrZWQgPj0gcGFyc2VJbnQobWluKSAmJiBhcmVDaGVja2JveGVzVmlzaWJsZXM7XG5cbiAgICBpZiAoc2hvdWxkQmVWaXNpYmxlKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIHRoaXMuY2hlY2tDaGlsZHJlbklucHV0cyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ2hpbGRyZW5JbnB1dHMocGFyZW50KSB7XG4gICAgbGV0IGlucHV0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmNoZWNrZWQnKTtcblxuICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgbGV0IHR5cGUgPSBpbnB1dC50eXBlOyAvLyByYWRpbywgY2hlY2tib3gsIGV0Yy5cbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGBbZGF0YS10b2dnbGUtcmVmPVwiJHtpbnB1dC5uYW1lfVwiXWBcbiAgICAgICk7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZWxlbWVudHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1t4XTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkoXG4gICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgICB0aGlzLmdldEFjY2VwdGFibGVSYWRpb3NWYWx1ZXMoZWxlbWVudClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkoZWxlbWVudCwgaW5wdXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBcnRpY2xlcyhmb3JtKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0U2VjdGlvbnMoZm9ybSk7XG5cbiAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgIGxldCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaDInKS5pbm5lclRleHQ7XG4gICAgICBodG1sICs9IGBoMi4gJHt0aXRsZX1cXG5gO1xuICAgICAgaHRtbCArPSBjb250ZW50O1xuICAgICAgaHRtbCArPSAnXFxuLS0tLSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9ucyhhcnRpY2xlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgc2VjdGlvbnMgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlY3Rpb25zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zW3hdO1xuICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldFNlY3Rpb25UeXBlKHNlY3Rpb24pO1xuICAgICAgbGV0IGNvbnRlbnQgPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09ICd1bCcgfHwgdHlwZSA9PT0gJ29sJykge1xuICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9ICcnO1xuICAgICAgICBsZXQgaDMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgICAgIGlmIChoMyAhPT0gbnVsbCkge1xuICAgICAgICAgIHRpdGxlID0gaDMuaW5uZXJUZXh0O1xuICAgICAgICAgIGlmICh0aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGh0bWwgKz0gYGgzLiAke3RpdGxlfVxcbmA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSBgJHtjb250ZW50fVxcblxcbmA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9uVHlwZShzZWN0aW9uKSB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG5cbiAgICBpZiAoc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdvbCcpKSB7XG4gICAgICB0eXBlID0gJ29sJztcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24ucXVlcnlTZWxlY3RvcigndWwnKSkge1xuICAgICAgdHlwZSA9ICd1bCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgaXRlbXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtcy5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IGl0ZW0gPSBpdGVtc1t4XTtcblxuICAgICAgaWYgKGl0ZW0ub2Zmc2V0UGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEwnw6lsw6ltZW50IGVzdCB2aXNpYmxlXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5nZXRJbnB1dChpdGVtKTtcbiAgICAgICAgaWYgKHRleHQgIT09ICcnKSB7XG4gICAgICAgICAgYXJyLnB1c2godGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0eXBlID09PSAndWwnID8gJyonIDogJyMnO1xuICAgICAgaHRtbCA9IHByZWZpeCArICcgJyArIGFyci5qb2luKGBcXG4ke3ByZWZpeH0gYCk7XG4gICAgfSBlbHNlIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICBodG1sID0gYXJyWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0SW5wdXQobm9kZSkge1xuICAgIGxldCBpbnB1dCA9IG5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBsZXQgc2VsZWN0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICBsZXQgdGV4dGFyZWEgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0VXJsKG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0RGF0ZShub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXRSYWRpbyhub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXRDaGVja2JveChub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWxlY3QgIT09IG51bGwpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFNlbGVjdChub2RlLCBzZWxlY3QpO1xuICAgIH0gZWxzZSBpZiAodGV4dGFyZWEgIT09IG51bGwpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFRleHRhcmVhKG5vZGUsIHRleHRhcmVhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRleHRhcmVhKG5vZGUsIHRleHRhcmVhKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAodGV4dGFyZWEudmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHByZWZpeCAhPT0gJycpIHByZWZpeCArPSAnOiAnO1xuICAgICAgaHRtbCA9IGAke3ByZWZpeH0ke3RleHRhcmVhLnZhbHVlfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0U2VsZWN0KG5vZGUsIHNlbGVjdCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGh0bWwgPSBgJHt0aGlzLmdldFRleHQobm9kZSl9ICR7XG4gICAgICAgIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XG4gICAgICB9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXREYXRlKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgc3VmZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHN1ZmZpeCAhPT0gJycpIHN1ZmZpeCA9IGA6ICR7c3VmZml4fWA7XG4gICAgICBodG1sID0gYCoke2lucHV0LnZhbHVlfSoke3N1ZmZpeH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFVybChub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHVybCA9IGlucHV0LnZhbHVlO1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgdXJsID0gYFske3VybH1dYDtcbiAgICAgIH1cblxuICAgICAgaHRtbCA9IGAqJHt0aGlzLmdldFRleHQobm9kZSl9KjogJHt1cmx9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRSYWRpbyhub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgbGV0IG5hbWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgZm9ybSA9IGlucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldE5vZGUobmFtZSwgZm9ybSkudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHByZWZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChwcmVmaXggIT09ICcnKSBwcmVmaXggKz0gJzogJztcbiAgICAgIGh0bWwgPSBgJHtwcmVmaXh9KiR7dmFsdWV9KmA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0Q2hlY2tib3gobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRleHQobm9kZSkge1xuICAgIGxldCBzdHIgPSBub2RlLmlubmVySFRNTDtcbiAgICBzdHIgPSB0aGlzLnJlcGxhY2VJbWcoc3RyKTtcbiAgICBzdHIgPSB0aGlzLnN0cmlwVGFncyhzdHIpO1xuICAgIHN0ciA9IHN0ci50cmltKCk7IC8vIHJlbW92ZSBzdGFydCBhbmQgZW5kIHdoaXRlc3BhY2VzO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnJyk7IC8vIHN0cmlwIGxpbmVicmVha3M7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyArKD89ICkvZywgJycpOyAvLyBzdHJpcCBtdWx0aXBsZSB3aGl0ZSBzcGFjZXM7XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmVwbGFjZUltZyhzdHIpIHtcbiAgICBsZXQgbmV3U3RyID0gc3RyLnJlcGxhY2UoXG4gICAgICAvPGltZyBzcmNcXHMqPVxccypbJ1xcXCJdKFteJ1xcXCJdKj8pWydcXFwiXVtePl0qPz4vZyxcbiAgICAgIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgICByZXR1cm4gYCEke3AxfSFgO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3U3RyO1xuICB9XG5cbiAgc3RyaXBUYWdzKHN0cikge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsLmlubmVySFRNTCA9IHN0cjtcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZG9udC1vdXRwdXQnKS5mb3JFYWNoKGUgPT5cbiAgICAgIGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKVxuICAgICk7XG4gICAgc3RyID0gZWwuaW5uZXJUZXh0O1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBjb3B5U3RyaW5nVG9DbGlwYm9hcmQoc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlbC52YWx1ZSA9IHN0cjtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgIGVsLnN0eWxlID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy05OTk5cHgnIH07XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgZWwuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xuICB9XG59XG5cbmxldCBjaGVja2xpc3QgPSBuZXcgQ2hlY2tsaXN0KCk7XG5jaGVja2xpc3QuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==