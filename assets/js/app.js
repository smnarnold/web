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
      var input = node.querySelectorAll('input');
      var select = node.querySelector('select');
      var textarea = node.querySelector('textarea');
      var html = '';

      if (input.length) {
        switch (input[0].type) {
          case 'url':
            html = this.getUrl(node, input[0]);
            break;

          case 'date':
            html = this.getDate(node, input[0]);
            break;

          case 'radio':
            html = this.getRadio(node, input[0]);
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
    value: function getCheckbox(node, inputs) {
      var html = '';

      if (inputs.length === 1) {
        if (inputs[0].checked) {
          html = this.getText(node);
        }
      } else if (inputs.length > 1) {
        html = this.getTextWithoutInput(node);
        var checkboxesChecked = Array.from(inputs).filter(function (input) {
          return input.checked;
        });

        for (var x = 0; x < checkboxesChecked.length; x++) {
          var checkbox = checkboxesChecked[x];
          var prefix = ', ';
          if (x === 0) prefix = ' *';else if (x === checkboxesChecked.length - 1) prefix = ' et ';
          html += "".concat(prefix).concat(checkbox.value);
        }

        html += '*';
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
    key: "getTextWithoutInput",
    value: function getTextWithoutInput(node) {
      var str = node.innerHTML;
      str = this.replaceImg(str);
      str = this.stripInputs(str);
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
    key: "stripInputs",
    value: function stripInputs(str) {
      var el = document.createElement('div');
      el.innerHTML = str;
      el.querySelectorAll('.js-dont-output').forEach(function (e) {
        return e.parentNode.removeChild(e);
      });
      el.querySelectorAll('input, textarea, select').forEach(function (e) {
        return e.closest('label').remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwidG9nZ2xlcyIsInN1YnMiLCJnZW5lcmFsQ29weSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwidG9nZ2xlIiwiaW5pdEVsZW1lbnRUb2dnbGVkIiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0Um9sZSIsInN1YiIsImluaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXQiLCJ0YXJnZXQiLCJmb3JtIiwiY2xvc2VzdCIsImNvcGllZE1zZyIsIm91dHB1dCIsImh0bWwiLCJnZXRBcnRpY2xlcyIsImNvcHlTdHJpbmdUb0NsaXBib2FyZCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicm9sZSIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJjaGVja2VkIiwic2VsZWN0b3IiLCJzdGFydHNXaXRoIiwiZWxlbWVudCIsImNvbnRleHQiLCJpbnB1dHNBcnIiLCJnZXROb2RlIiwibGVuZ3RoIiwidHlwZSIsImluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8iLCJpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94Iiwic3RyIiwiYXJyIiwic3BsaXQiLCJyYWRpb3NBcnIiLCJhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyIiwiZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyIsIngiLCJyYWRpbyIsInNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkiLCJpc1JhZGlvVmlzaWJsZSIsIm9mZnNldFBhcmVudCIsImlzQWNjZXB0YWJsZSIsImluZGV4T2YiLCJzaG91bGRCZVZpc2libGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjaGVja0NoaWxkcmVuSW5wdXRzIiwiY2hlY2tib3hlc0FyciIsIm1pbiIsInNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkiLCJjaGVja2JveCIsInNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkiLCJpc0NoZWNrYm94VmlzaWJsZSIsIm5ickNoZWNrZWQiLCJhcmVDaGVja2JveGVzVmlzaWJsZXMiLCJwYXJzZUludCIsInBhcmVudCIsImlucHV0IiwiZWxlbWVudHMiLCJuYW1lIiwiY29udGVudCIsImdldFNlY3Rpb25zIiwidGl0bGUiLCJpbm5lclRleHQiLCJhcnRpY2xlIiwic2VjdGlvbiIsImdldFNlY3Rpb25UeXBlIiwiZ2V0TGlzdENvbnRlbnQiLCJoMyIsIml0ZW1zIiwiaXRlbSIsInRleHQiLCJnZXRJbnB1dCIsInB1c2giLCJwcmVmaXgiLCJqb2luIiwibm9kZSIsInNlbGVjdCIsInRleHRhcmVhIiwiZ2V0VXJsIiwiZ2V0RGF0ZSIsImdldFJhZGlvIiwiZ2V0Q2hlY2tib3giLCJnZXRTZWxlY3QiLCJnZXRUZXh0YXJlYSIsImdldFRleHQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInN1ZmZpeCIsInVybCIsImlucHV0cyIsImdldFRleHRXaXRob3V0SW5wdXQiLCJjaGVja2JveGVzQ2hlY2tlZCIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsImlubmVySFRNTCIsInJlcGxhY2VJbWciLCJzdHJpcFRhZ3MiLCJ0cmltIiwicmVwbGFjZSIsInN0cmlwSW5wdXRzIiwibmV3U3RyIiwibWF0Y2giLCJwMSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwiZXhlY0NvbW1hbmQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tsaXN0IiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QVEsQ0FBQ2lDLElBQVQsQ0FBYzBGLFdBQWQsQ0FBMEJILEVBQTFCO0FBQ0FTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZckYsR0FBWjtBQUNEOzs7Ozs7QUFHSCxJQUFJc0YsU0FBUyxHQUFHLElBQUl0SSxTQUFKLEVBQWhCO0FBQ0FzSSxTQUFTLENBQUNDLElBQVYsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCJjbGFzcyBDaGVja2xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIGNiUm9sZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNldC1yb2xlJyksXG4gICAgICBhcnRpY2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFydGljbGUnKSxcbiAgICAgIHNlY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpLFxuICAgICAgdG9nZ2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLXJlZl0nKSxcbiAgICAgIHN1YnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgIGdlbmVyYWxDb3B5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuZXJhbC1jb3B5JylcbiAgICB9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRvbS50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRoaXMuaW5pdEVsZW1lbnRUb2dnbGVkKHRvZ2dsZSkpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmRvbS5jYlJvbGUuZm9yRWFjaChjYlJvbGUgPT5cbiAgICAgIGNiUm9sZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHRoaXMuc2V0Um9sZShlKSlcbiAgICApO1xuICAgIHRoaXMuZG9tLnN1YnMuZm9yRWFjaChzdWIgPT5cbiAgICAgIHN1Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5pbml0Rm9ybShlKSlcbiAgICApO1xuICB9XG5cbiAgaW5pdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc3VibWl0ID0gZS50YXJnZXQ7XG4gICAgbGV0IGZvcm0gPSBzdWJtaXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBjb3BpZWRNc2cgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jb3BpZWQtbXNnJyk7XG4gICAgbGV0IG91dHB1dCA9IGZvcm0ub3V0cHV0O1xuXG4gICAgbGV0IGh0bWwgPSB0aGlzLmdldEFydGljbGVzKGZvcm0pO1xuICAgIHRoaXMuY29weVN0cmluZ1RvQ2xpcGJvYXJkKGh0bWwpO1xuICAgIG91dHB1dC52YWx1ZSA9IGh0bWw7XG4gICAgY29waWVkTXNnLmNsYXNzTGlzdC5hZGQoJ2ZsaXBpbicpO1xuICAgIGNvcGllZE1zZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PlxuICAgICAgY29waWVkTXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBpbicpXG4gICAgKTtcbiAgfVxuXG4gIHNldFJvbGUoZSkge1xuICAgIGxldCByb2xlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJvbGUnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShgc2hvdy0ke3JvbGV9YCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gIH1cblxuICBnZXROb2RlKHNlbGVjdG9yLCBmb3JtKSB7XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoJy4nKSB8fCBzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ybVtzZWxlY3Rvcl07XG4gICAgfVxuICB9XG5cbiAgaW5pdEVsZW1lbnRUb2dnbGVkKGVsZW1lbnQpIHtcbiAgICBsZXQgY29udGV4dCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS1yZWYnKTtcbiAgICBsZXQgaW5wdXRzQXJyID0gdGhpcy5nZXROb2RlKHNlbGVjdG9yLCBjb250ZXh0KTtcblxuICAgIGlmICghaW5wdXRzQXJyLmxlbmd0aCkgaW5wdXRzQXJyID0gW2lucHV0c0Fycl07IC8vIEZvcmNlIGlucHV0cyB0byBiZSBhbiBhcnJheSBldmVuIGlmIHRoZXJlIGlzIG9ubHkgMSB2YWx1ZVxuICAgIGxldCB0eXBlID0gaW5wdXRzQXJyWzBdLnR5cGU7IC8vIHJhZGlvLCBjaGVja2JveCwgZXRjLlxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHRoaXMuaW5pdEVsZW1lbnRUb2dnbGVkQnlSYWRpbyhlbGVtZW50LCBpbnB1dHNBcnIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgdGhpcy5pbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94KGVsZW1lbnQsIGlucHV0c0Fycik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldEFjY2VwdGFibGVSYWRpb3NWYWx1ZXMoZWxlbWVudCkge1xuICAgIGxldCBzdHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtdmlzaWJsZScpO1xuICAgIGxldCBhcnIgPSBzdHIgPT09IG51bGwgPyBbXSA6IHN0ci5zcGxpdCgnfHwnKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBpbml0RWxlbWVudFRvZ2dsZWRCeVJhZGlvKGVsZW1lbnQsIHJhZGlvc0Fycikge1xuICAgIGxldCBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyID0gdGhpcy5nZXRBY2NlcHRhYmxlUmFkaW9zVmFsdWVzKGVsZW1lbnQpO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCByYWRpb3NBcnIubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCByYWRpbyA9IHJhZGlvc0Fyclt4XTtcblxuICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW9WaXNpYmlsaXR5KFxuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgcmFkaW8sXG4gICAgICAgICAgYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0FyclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkoXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICByYWRpbyxcbiAgICAgICAgICBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudFRvZ2dsZWRCeVJhZGlvVmlzaWJpbGl0eShcbiAgICBlbGVtZW50LFxuICAgIHJhZGlvLFxuICAgIGFjY2VwdGFibGVSYWRpb3NWYWx1ZXNBcnJcbiAgKSB7XG4gICAgbGV0IGlzUmFkaW9WaXNpYmxlID0gcmFkaW8ub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICAgIGxldCBpc0FjY2VwdGFibGUgPSBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyLmluZGV4T2YocmFkaW8udmFsdWUpICE9PSAtMTtcbiAgICBsZXQgc2hvdWxkQmVWaXNpYmxlID0gcmFkaW8uY2hlY2tlZCAmJiBpc0FjY2VwdGFibGUgJiYgaXNSYWRpb1Zpc2libGU7XG5cbiAgICBpZiAoc2hvdWxkQmVWaXNpYmxlKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIHRoaXMuY2hlY2tDaGlsZHJlbklucHV0cyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIGluaXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3goZWxlbWVudCwgY2hlY2tib3hlc0Fycikge1xuICAgIGxldCBtaW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtbWluJyk7XG5cbiAgICBpZiAobWluICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkoXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGNoZWNrYm94ZXNBcnIsXG4gICAgICAgIG1pblxuICAgICAgKTtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjaGVja2JveCA9IGNoZWNrYm94ZXNBcnJbeF07XG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkoXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgY2hlY2tib3hlc0FycixcbiAgICAgICAgICAgIG1pblxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjaGVja2JveCA9IGNoZWNrYm94ZXNBcnJbeF07XG5cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hWaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94KTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3gpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94VmlzaWJpbGl0eShlbGVtZW50LCBjaGVja2JveCkge1xuICAgIGxldCBpc0NoZWNrYm94VmlzaWJsZSA9IGNoZWNrYm94Lm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICBpZiAoY2hlY2tib3guY2hlY2tlZCAmJiBpc0NoZWNrYm94VmlzaWJsZSkge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICB0aGlzLmNoZWNrQ2hpbGRyZW5JbnB1dHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICBzZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIsIG1pbikge1xuICAgIGxldCBuYnJDaGVja2VkID0gMDtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2hlY2tib3hlc0Fyci5sZW5ndGg7IHgrKykge1xuICAgICAgaWYgKGNoZWNrYm94ZXNBcnJbeF0uY2hlY2tlZCkgbmJyQ2hlY2tlZCsrO1xuICAgIH1cblxuICAgIGxldCBhcmVDaGVja2JveGVzVmlzaWJsZXMgPSBjaGVja2JveGVzQXJyWzBdLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcbiAgICBsZXQgc2hvdWxkQmVWaXNpYmxlID0gbmJyQ2hlY2tlZCA+PSBwYXJzZUludChtaW4pICYmIGFyZUNoZWNrYm94ZXNWaXNpYmxlcztcblxuICAgIGlmIChzaG91bGRCZVZpc2libGUpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuSW5wdXRzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDaGlsZHJlbklucHV0cyhwYXJlbnQpIHtcbiAgICBsZXQgaW5wdXQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignaW5wdXQ6Y2hlY2tlZCcpO1xuXG4gICAgaWYgKGlucHV0ICE9PSBudWxsKSB7XG4gICAgICBsZXQgdHlwZSA9IGlucHV0LnR5cGU7IC8vIHJhZGlvLCBjaGVja2JveCwgZXRjLlxuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgYFtkYXRhLXRvZ2dsZS1yZWY9XCIke2lucHV0Lm5hbWV9XCJdYFxuICAgICAgKTtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBlbGVtZW50cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW3hdO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFRvZ2dsZWRCeVJhZGlvVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgIHRoaXMuZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyhlbGVtZW50KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94VmlzaWJpbGl0eShlbGVtZW50LCBpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFydGljbGVzKGZvcm0pIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRTZWN0aW9ucyhmb3JtKTtcblxuICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgbGV0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dDtcbiAgICAgIGh0bWwgKz0gYGgyLiAke3RpdGxlfVxcbmA7XG4gICAgICBodG1sICs9IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9ucyhhcnRpY2xlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgc2VjdGlvbnMgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlY3Rpb25zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zW3hdO1xuICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldFNlY3Rpb25UeXBlKHNlY3Rpb24pO1xuICAgICAgbGV0IGNvbnRlbnQgPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09ICd1bCcgfHwgdHlwZSA9PT0gJ29sJykge1xuICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9ICcnO1xuICAgICAgICBsZXQgaDMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgICAgIGlmIChoMyAhPT0gbnVsbCkge1xuICAgICAgICAgIHRpdGxlID0gaDMuaW5uZXJUZXh0O1xuICAgICAgICAgIGlmICh0aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGh0bWwgKz0gYGgzLiAke3RpdGxlfVxcbmA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSBgJHtjb250ZW50fVxcblxcbmA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9uVHlwZShzZWN0aW9uKSB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG5cbiAgICBpZiAoc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdvbCcpKSB7XG4gICAgICB0eXBlID0gJ29sJztcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24ucXVlcnlTZWxlY3RvcigndWwnKSkge1xuICAgICAgdHlwZSA9ICd1bCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgaXRlbXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtcy5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IGl0ZW0gPSBpdGVtc1t4XTtcblxuICAgICAgaWYgKGl0ZW0ub2Zmc2V0UGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEwnw6lsw6ltZW50IGVzdCB2aXNpYmxlXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5nZXRJbnB1dChpdGVtKTtcbiAgICAgICAgaWYgKHRleHQgIT09ICcnKSB7XG4gICAgICAgICAgYXJyLnB1c2godGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0eXBlID09PSAndWwnID8gJyonIDogJyMnO1xuICAgICAgaHRtbCA9IHByZWZpeCArICcgJyArIGFyci5qb2luKGBcXG4ke3ByZWZpeH0gYCk7XG4gICAgfSBlbHNlIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICBodG1sID0gYXJyWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0SW5wdXQobm9kZSkge1xuICAgIGxldCBpbnB1dCA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBsZXQgc2VsZWN0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICBsZXQgdGV4dGFyZWEgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGlmIChpbnB1dC5sZW5ndGgpIHtcbiAgICAgIHN3aXRjaCAoaW5wdXRbMF0udHlwZSkge1xuICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldFVybChub2RlLCBpbnB1dFswXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldERhdGUobm9kZSwgaW5wdXRbMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0UmFkaW8obm9kZSwgaW5wdXRbMF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0Q2hlY2tib3gobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ICE9PSBudWxsKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRTZWxlY3Qobm9kZSwgc2VsZWN0KTtcbiAgICB9IGVsc2UgaWYgKHRleHRhcmVhICE9PSBudWxsKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRUZXh0YXJlYShub2RlLCB0ZXh0YXJlYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRUZXh0YXJlYShub2RlLCB0ZXh0YXJlYSkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKHRleHRhcmVhLnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHByZWZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChwcmVmaXggIT09ICcnKSBwcmVmaXggKz0gJzogJztcbiAgICAgIGh0bWwgPSBgJHtwcmVmaXh9JHt0ZXh0YXJlYS52YWx1ZX1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlbGVjdChub2RlLCBzZWxlY3QpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWUgIT09ICcnKSB7XG4gICAgICBodG1sID0gYCR7dGhpcy5nZXRUZXh0KG5vZGUpfSAke1xuICAgICAgICBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxuICAgICAgfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0RGF0ZShub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHN1ZmZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChzdWZmaXggIT09ICcnKSBzdWZmaXggPSBgOiAke3N1ZmZpeH1gO1xuICAgICAgaHRtbCA9IGAqJHtpbnB1dC52YWx1ZX0qJHtzdWZmaXh9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRVcmwobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGxldCB1cmwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIHVybCA9IGBbJHt1cmx9XWA7XG4gICAgICB9XG5cbiAgICAgIGh0bWwgPSBgKiR7dGhpcy5nZXRUZXh0KG5vZGUpfSo6ICR7dXJsfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0UmFkaW8obm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBuYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IGZvcm0gPSBpbnB1dC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXROb2RlKG5hbWUsIGZvcm0pLnZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHByZWZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChwcmVmaXggIT09ICcnKSBwcmVmaXggKz0gJzogJztcbiAgICAgIGh0bWwgPSBgJHtwcmVmaXh9KiR7dmFsdWV9KmA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0Q2hlY2tib3gobm9kZSwgaW5wdXRzKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAoaW5wdXRzWzBdLmNoZWNrZWQpIHtcbiAgICAgICAgaHRtbCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlucHV0cy5sZW5ndGggPiAxKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRUZXh0V2l0aG91dElucHV0KG5vZGUpO1xuXG4gICAgICBsZXQgY2hlY2tib3hlc0NoZWNrZWQgPSBBcnJheS5mcm9tKGlucHV0cykuZmlsdGVyKGlucHV0ID0+IGlucHV0LmNoZWNrZWQpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQ2hlY2tlZC5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgY2hlY2tib3ggPSBjaGVja2JveGVzQ2hlY2tlZFt4XTtcbiAgICAgICAgbGV0IHByZWZpeCA9ICcsICc7XG5cbiAgICAgICAgaWYgKHggPT09IDApIHByZWZpeCA9ICcgKic7XG4gICAgICAgIGVsc2UgaWYgKHggPT09IGNoZWNrYm94ZXNDaGVja2VkLmxlbmd0aCAtIDEpIHByZWZpeCA9ICcgZXQgJztcblxuICAgICAgICBodG1sICs9IGAke3ByZWZpeH0ke2NoZWNrYm94LnZhbHVlfWA7XG4gICAgICB9XG4gICAgICBodG1sICs9ICcqJztcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRleHQobm9kZSkge1xuICAgIGxldCBzdHIgPSBub2RlLmlubmVySFRNTDtcbiAgICBzdHIgPSB0aGlzLnJlcGxhY2VJbWcoc3RyKTtcbiAgICBzdHIgPSB0aGlzLnN0cmlwVGFncyhzdHIpO1xuICAgIHN0ciA9IHN0ci50cmltKCk7IC8vIHJlbW92ZSBzdGFydCBhbmQgZW5kIHdoaXRlc3BhY2VzO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnJyk7IC8vIHN0cmlwIGxpbmVicmVha3M7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyArKD89ICkvZywgJycpOyAvLyBzdHJpcCBtdWx0aXBsZSB3aGl0ZSBzcGFjZXM7XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZ2V0VGV4dFdpdGhvdXRJbnB1dChub2RlKSB7XG4gICAgbGV0IHN0ciA9IG5vZGUuaW5uZXJIVE1MO1xuICAgIHN0ciA9IHRoaXMucmVwbGFjZUltZyhzdHIpO1xuICAgIHN0ciA9IHRoaXMuc3RyaXBJbnB1dHMoc3RyKTtcbiAgICBzdHIgPSBzdHIudHJpbSgpOyAvLyByZW1vdmUgc3RhcnQgYW5kIGVuZCB3aGl0ZXNwYWNlcztcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgJycpOyAvLyBzdHJpcCBsaW5lYnJlYWtzO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8gKyg/PSApL2csICcnKTsgLy8gc3RyaXAgbXVsdGlwbGUgd2hpdGUgc3BhY2VzO1xuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHJlcGxhY2VJbWcoc3RyKSB7XG4gICAgbGV0IG5ld1N0ciA9IHN0ci5yZXBsYWNlKFxuICAgICAgLzxpbWcgc3JjXFxzKj1cXHMqWydcXFwiXShbXidcXFwiXSo/KVsnXFxcIl1bXj5dKj8+L2csXG4gICAgICBmdW5jdGlvbihtYXRjaCwgcDEpIHtcbiAgICAgICAgcmV0dXJuIGAhJHtwMX0hYDtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIG5ld1N0cjtcbiAgfVxuXG4gIHN0cmlwVGFncyhzdHIpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5pbm5lckhUTUwgPSBzdHI7XG4gICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLWRvbnQtb3V0cHV0JykuZm9yRWFjaChlID0+XG4gICAgICBlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSlcbiAgICApO1xuICAgIHN0ciA9IGVsLmlubmVyVGV4dDtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgc3RyaXBJbnB1dHMoc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kb250LW91dHB1dCcpLmZvckVhY2goZSA9PlxuICAgICAgZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpXG4gICAgKTtcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpLmZvckVhY2goZSA9PlxuICAgICAgZS5jbG9zZXN0KCdsYWJlbCcpLnJlbW92ZSgpXG4gICAgKTtcbiAgICBzdHIgPSBlbC5pbm5lclRleHQ7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNvcHlTdHJpbmdUb0NsaXBib2FyZChzdHIpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVsLnZhbHVlID0gc3RyO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgZWwuc3R5bGUgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTk5OTlweCcgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICBlbC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIGNvbnNvbGUubG9nKHN0cik7XG4gIH1cbn1cblxubGV0IGNoZWNrbGlzdCA9IG5ldyBDaGVja2xpc3QoKTtcbmNoZWNrbGlzdC5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9