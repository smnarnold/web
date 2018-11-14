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

        _this3.setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr);

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
      var shouldBeVisible = radio.checked && acceptableRadiosValuesArr.indexOf(radio.value) !== -1;
      element.style.display = shouldBeVisible ? '' : 'none';
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
      element.style.display = checkbox.checked ? '' : 'none';
    }
  }, {
    key: "setElementToggledByCheckboxMinVisibility",
    value: function setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min) {
      var nbrChecked = 0;

      for (var x = 0; x < checkboxesArr.length; x++) {
        if (checkboxesArr[x].checked) nbrChecked++;
      }

      var shouldBeVisible = nbrChecked >= parseInt(min);
      element.style.display = shouldBeVisible ? '' : 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwidG9nZ2xlcyIsInN1YnMiLCJnZW5lcmFsQ29weSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwidG9nZ2xlIiwiaW5pdEVsZW1lbnRUb2dnbGVkIiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0Um9sZSIsInN1YiIsImluaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXQiLCJ0YXJnZXQiLCJmb3JtIiwiY2xvc2VzdCIsImNvcGllZE1zZyIsIm91dHB1dCIsImh0bWwiLCJnZXRBcnRpY2xlcyIsImNvcHlTdHJpbmdUb0NsaXBib2FyZCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicm9sZSIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJjaGVja2VkIiwic2VsZWN0b3IiLCJzdGFydHNXaXRoIiwiZWxlbWVudCIsImNvbnRleHQiLCJpbnB1dHNBcnIiLCJnZXROb2RlIiwibGVuZ3RoIiwidHlwZSIsImluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8iLCJpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94Iiwic3RyIiwiYXJyIiwic3BsaXQiLCJyYWRpb3NBcnIiLCJhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyIiwiZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyIsIngiLCJyYWRpbyIsInNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkiLCJzaG91bGRCZVZpc2libGUiLCJpbmRleE9mIiwic3R5bGUiLCJkaXNwbGF5IiwiY2hlY2tib3hlc0FyciIsIm1pbiIsInNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkiLCJjaGVja2JveCIsInNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkiLCJuYnJDaGVja2VkIiwicGFyc2VJbnQiLCJjb250ZW50IiwiZ2V0U2VjdGlvbnMiLCJ0aXRsZSIsImlubmVyVGV4dCIsImFydGljbGUiLCJzZWN0aW9uIiwiZ2V0U2VjdGlvblR5cGUiLCJnZXRMaXN0Q29udGVudCIsImgzIiwiaXRlbXMiLCJpdGVtIiwib2Zmc2V0UGFyZW50IiwidGV4dCIsImdldElucHV0IiwicHVzaCIsInByZWZpeCIsImpvaW4iLCJub2RlIiwiaW5wdXQiLCJzZWxlY3QiLCJ0ZXh0YXJlYSIsImdldFVybCIsImdldERhdGUiLCJnZXRSYWRpbyIsImdldENoZWNrYm94IiwiZ2V0U2VsZWN0IiwiZ2V0VGV4dGFyZWEiLCJnZXRUZXh0Iiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJzdWZmaXgiLCJ1cmwiLCJuYW1lIiwiaW5uZXJIVE1MIiwicmVwbGFjZUltZyIsInN0cmlwVGFncyIsInRyaW0iLCJyZXBsYWNlIiwibmV3U3RyIiwibWF0Y2giLCJwMSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwiZXhlY0NvbW1hbmQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tsaXN0IiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtB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ciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2FwcC5qc1wiKTtcbiIsImNsYXNzIENoZWNrbGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgY2JSb2xlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2V0LXJvbGUnKSxcbiAgICAgIGFydGljbGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYXJ0aWNsZScpLFxuICAgICAgc2VjdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyksXG4gICAgICB0b2dnbGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGUtcmVmXScpLFxuICAgICAgc3ViczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgZ2VuZXJhbENvcHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsLWNvcHknKVxuICAgIH07XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZG9tLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdGhpcy5pbml0RWxlbWVudFRvZ2dsZWQodG9nZ2xlKSk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuZG9tLmNiUm9sZS5mb3JFYWNoKGNiUm9sZSA9PlxuICAgICAgY2JSb2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gdGhpcy5zZXRSb2xlKGUpKVxuICAgICk7XG4gICAgdGhpcy5kb20uc3Vicy5mb3JFYWNoKHN1YiA9PlxuICAgICAgc3ViLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmluaXRGb3JtKGUpKVxuICAgICk7XG4gIH1cblxuICBpbml0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBzdWJtaXQgPSBlLnRhcmdldDtcbiAgICBsZXQgZm9ybSA9IHN1Ym1pdC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgbGV0IGNvcGllZE1zZyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNvcGllZC1tc2cnKTtcbiAgICBsZXQgb3V0cHV0ID0gZm9ybS5vdXRwdXQ7XG5cbiAgICBsZXQgaHRtbCA9IHRoaXMuZ2V0QXJ0aWNsZXMoZm9ybSk7XG4gICAgdGhpcy5jb3B5U3RyaW5nVG9DbGlwYm9hcmQoaHRtbCk7XG4gICAgb3V0cHV0LnZhbHVlID0gaHRtbDtcbiAgICBjb3BpZWRNc2cuY2xhc3NMaXN0LmFkZCgnZmxpcGluJyk7XG4gICAgY29waWVkTXNnLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+XG4gICAgICBjb3BpZWRNc2cuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcGluJylcbiAgICApO1xuICB9XG5cbiAgc2V0Um9sZShlKSB7XG4gICAgbGV0IHJvbGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm9sZScpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGBzaG93LSR7cm9sZX1gLCBlLnRhcmdldC5jaGVja2VkKTtcbiAgfVxuXG4gIGdldE5vZGUoc2VsZWN0b3IsIGZvcm0pIHtcbiAgICBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aCgnLicpIHx8IHNlbGVjdG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmb3JtW3NlbGVjdG9yXTtcbiAgICB9XG4gIH1cblxuICBpbml0RWxlbWVudFRvZ2dsZWQoZWxlbWVudCkge1xuICAgIGxldCBjb250ZXh0ID0gZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlLXJlZicpO1xuICAgIGxldCBpbnB1dHNBcnIgPSB0aGlzLmdldE5vZGUoc2VsZWN0b3IsIGNvbnRleHQpO1xuICAgIGlmICghaW5wdXRzQXJyLmxlbmd0aCkgaW5wdXRzQXJyID0gW2lucHV0c0Fycl07IC8vIEZvcmNlIGlucHV0cyB0byBiZSBhbiBhcnJheSBldmVuIGlmIHRoZXJlIGlzIG9ubHkgMSB2YWx1ZVxuICAgIGxldCB0eXBlID0gaW5wdXRzQXJyWzBdLnR5cGU7IC8vIHJhZGlvLCBjaGVja2JveCwgZXRjLlxuXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgdGhpcy5pbml0RWxlbWVudFRvZ2dsZWRCeVJhZGlvKGVsZW1lbnQsIGlucHV0c0Fycik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICB0aGlzLmluaXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3goZWxlbWVudCwgaW5wdXRzQXJyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyhlbGVtZW50KSB7XG4gICAgbGV0IHN0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS12aXNpYmxlJyk7XG4gICAgbGV0IGFyciA9IHN0ciA9PT0gbnVsbCA/IFtdIDogc3RyLnNwbGl0KCd8fCcpO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8oZWxlbWVudCwgcmFkaW9zQXJyKSB7XG4gICAgbGV0IGFjY2VwdGFibGVSYWRpb3NWYWx1ZXNBcnIgPSB0aGlzLmdldEFjY2VwdGFibGVSYWRpb3NWYWx1ZXMoZWxlbWVudCk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHJhZGlvc0Fyci5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IHJhZGlvID0gcmFkaW9zQXJyW3hdO1xuXG4gICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkoZWxlbWVudCwgcmFkaW8sIGFjY2VwdGFibGVSYWRpb3NWYWx1ZXNBcnIpO1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW9WaXNpYmlsaXR5KGVsZW1lbnQsIHJhZGlvLCBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW9WaXNpYmlsaXR5KGVsZW1lbnQsIHJhZGlvLCBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyKSB7XG4gICAgbGV0IHNob3VsZEJlVmlzaWJsZSA9IHJhZGlvLmNoZWNrZWQgJiYgYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0Fyci5pbmRleE9mKHJhZGlvLnZhbHVlKSAhPT0gLTE7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2hvdWxkQmVWaXNpYmxlID8gJycgOiAnbm9uZSc7XG4gIH1cblxuICBpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIpIHtcbiAgICBsZXQgbWluID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlLW1pbicpO1xuXG4gICAgaWYgKG1pbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIsIG1pbik7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2hlY2tib3hlc0Fyci5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgY2hlY2tib3ggPSBjaGVja2JveGVzQXJyW3hdO1xuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIsIG1pbilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjaGVja2JveCA9IGNoZWNrYm94ZXNBcnJbeF07XG5cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hWaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94KTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3gpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94VmlzaWJpbGl0eShlbGVtZW50LCBjaGVja2JveCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnJyA6ICdub25lJztcbiAgfVxuXG4gIHNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3hlc0FyciwgbWluKSB7XG4gICAgbGV0IG5ickNoZWNrZWQgPSAwO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoY2hlY2tib3hlc0Fyclt4XS5jaGVja2VkKSBuYnJDaGVja2VkKys7XG4gICAgfVxuXG4gICAgbGV0IHNob3VsZEJlVmlzaWJsZSA9IG5ickNoZWNrZWQgPj0gcGFyc2VJbnQobWluKTtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzaG91bGRCZVZpc2libGUgPyAnJyA6ICdub25lJztcbiAgfVxuXG4gIGdldEFydGljbGVzKGZvcm0pIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRTZWN0aW9ucyhmb3JtKTtcblxuICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgbGV0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dDtcbiAgICAgIGh0bWwgKz0gYGgyLiAke3RpdGxlfVxcbmA7XG4gICAgICBodG1sICs9IGNvbnRlbnQ7XG4gICAgICBodG1sICs9ICdcXG4tLS0tJztcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlY3Rpb25zKGFydGljbGUpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBzZWN0aW9ucyA9IGFydGljbGUucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2VjdGlvbnMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnNbeF07XG4gICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0U2VjdGlvblR5cGUoc2VjdGlvbik7XG4gICAgICBsZXQgY29udGVudCA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3VsJyB8fCB0eXBlID09PSAnb2wnKSB7XG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldExpc3RDb250ZW50KHNlY3Rpb24sIHR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gJyc7XG4gICAgICAgIGxldCBoMyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignaDMnKTtcbiAgICAgICAgaWYgKGgzICE9PSBudWxsKSB7XG4gICAgICAgICAgdGl0bGUgPSBoMy5pbm5lclRleHQ7XG4gICAgICAgICAgaWYgKHRpdGxlICE9PSAnJykge1xuICAgICAgICAgICAgaHRtbCArPSBgaDMuICR7dGl0bGV9XFxuYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBodG1sICs9IGAke2NvbnRlbnR9XFxuXFxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlY3Rpb25UeXBlKHNlY3Rpb24pIHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcblxuICAgIGlmIChzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ29sJykpIHtcbiAgICAgIHR5cGUgPSAnb2wnO1xuICAgIH0gZWxzZSBpZiAoc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCd1bCcpKSB7XG4gICAgICB0eXBlID0gJ3VsJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldExpc3RDb250ZW50KHNlY3Rpb24sIHR5cGUpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBpdGVtcyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGl0ZW1zW3hdO1xuXG4gICAgICBpZiAoaXRlbS5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gTCfDqWzDqW1lbnQgZXN0IHZpc2libGVcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLmdldElucHV0KGl0ZW0pO1xuICAgICAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgICAgICBhcnIucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcnIubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHByZWZpeCA9IHR5cGUgPT09ICd1bCcgPyAnKicgOiAnIyc7XG4gICAgICBodG1sID0gcHJlZml4ICsgJyAnICsgYXJyLmpvaW4oYFxcbiR7cHJlZml4fSBgKTtcbiAgICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgIGh0bWwgPSBhcnJbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRJbnB1dChub2RlKSB7XG4gICAgbGV0IGlucHV0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGxldCBzZWxlY3QgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgIGxldCB0ZXh0YXJlYSA9IG5vZGUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgaWYgKGlucHV0ICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKGlucHV0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXRVcmwobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXREYXRlKG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldFJhZGlvKG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldENoZWNrYm94KG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdCAhPT0gbnVsbCkge1xuICAgICAgaHRtbCA9IHRoaXMuZ2V0U2VsZWN0KG5vZGUsIHNlbGVjdCk7XG4gICAgfSBlbHNlIGlmICh0ZXh0YXJlYSAhPT0gbnVsbCkge1xuICAgICAgaHRtbCA9IHRoaXMuZ2V0VGV4dGFyZWEobm9kZSwgdGV4dGFyZWEpO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEobm9kZSwgdGV4dGFyZWEpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmICh0ZXh0YXJlYS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgICBpZiAocHJlZml4ICE9PSAnJykgcHJlZml4ICs9ICc6ICc7XG4gICAgICBodG1sID0gYCR7cHJlZml4fSR7dGV4dGFyZWEudmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWxlY3Qobm9kZSwgc2VsZWN0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlICE9PSAnJykge1xuICAgICAgaHRtbCA9IGAke3RoaXMuZ2V0VGV4dChub2RlKX0gJHtcbiAgICAgICAgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHRcbiAgICAgIH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldERhdGUobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGxldCBzdWZmaXggPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgICBpZiAoc3VmZml4ICE9PSAnJykgc3VmZml4ID0gYDogJHtzdWZmaXh9YDtcbiAgICAgIGh0bWwgPSBgKiR7aW5wdXQudmFsdWV9KiR7c3VmZml4fWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VXJsKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgdXJsID0gaW5wdXQudmFsdWU7XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICB1cmwgPSBgWyR7dXJsfV1gO1xuICAgICAgfVxuXG4gICAgICBodG1sID0gYCoke3RoaXMuZ2V0VGV4dChub2RlKX0qOiAke3VybH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFJhZGlvKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgbmFtZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBmb3JtID0gaW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0Tm9kZShuYW1lLCBmb3JtKS52YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHByZWZpeCAhPT0gJycpIHByZWZpeCArPSAnOiAnO1xuICAgICAgaHRtbCA9IGAke3ByZWZpeH0qJHt2YWx1ZX0qYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRDaGVja2JveChub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGV4dChub2RlKSB7XG4gICAgbGV0IHN0ciA9IG5vZGUuaW5uZXJIVE1MO1xuICAgIHN0ciA9IHRoaXMucmVwbGFjZUltZyhzdHIpO1xuICAgIHN0ciA9IHRoaXMuc3RyaXBUYWdzKHN0cik7XG4gICAgc3RyID0gc3RyLnRyaW0oKTsgLy8gcmVtb3ZlIHN0YXJ0IGFuZCBlbmQgd2hpdGVzcGFjZXM7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICcnKTsgLy8gc3RyaXAgbGluZWJyZWFrcztcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvICsoPz0gKS9nLCAnJyk7IC8vIHN0cmlwIG11bHRpcGxlIHdoaXRlIHNwYWNlcztcblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXBsYWNlSW1nKHN0cikge1xuICAgIGxldCBuZXdTdHIgPSBzdHIucmVwbGFjZShcbiAgICAgIC88aW1nIHNyY1xccyo9XFxzKlsnXFxcIl0oW14nXFxcIl0qPylbJ1xcXCJdW14+XSo/Pi9nLFxuICAgICAgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICAgIHJldHVybiBgISR7cDF9IWA7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBuZXdTdHI7XG4gIH1cblxuICBzdHJpcFRhZ3Moc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kb250LW91dHB1dCcpLmZvckVhY2goZSA9PlxuICAgICAgZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpXG4gICAgKTtcbiAgICBzdHIgPSBlbC5pbm5lclRleHQ7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNvcHlTdHJpbmdUb0NsaXBib2FyZChzdHIpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVsLnZhbHVlID0gc3RyO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgZWwuc3R5bGUgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTk5OTlweCcgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICBlbC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIGNvbnNvbGUubG9nKHN0cik7XG4gIH1cbn1cblxubGV0IGNoZWNrbGlzdCA9IG5ldyBDaGVja2xpc3QoKTtcbmNoZWNrbGlzdC5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9