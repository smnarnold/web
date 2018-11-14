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
      articles: document.querySelectorAll('.js-jira'),
      sections: document.querySelectorAll('.section'),
      toggles: document.querySelectorAll('[data-toggle-ref]'),
      togglesT: document.querySelectorAll('[data-toggle-refs]'),
      submit: document.forms.jira.submit,
      output: document.forms.jira.output,
      generalCopy: document.querySelector('.general-copy')
    };
  }

  _createClass(Checklist, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.dom.cbRole.forEach(function (cbRole) {
        cbRole.addEventListener('change', function (e) {
          return _this.setRole(e);
        });
      });
      this.dom.toggles.forEach(function (toggle) {
        return _this.initToggle(toggle);
      });
      this.dom.submit.addEventListener('click', function (e) {
        return _this.setJira(e);
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
    value: function getNode(selector) {
      if (selector.startsWith('.') || selector.startsWith('#')) {
        return document.forms.jira.querySelectorAll(selector);
      } else {
        return document.forms.jira[selector];
      }
    }
  }, {
    key: "initToggle",
    value: function initToggle(toggle) {
      var _this2 = this;

      var inputName = toggle.getAttribute('data-toggle-ref');
      var inputs = this.getNode(inputName);
      var isArr = inputs.length;
      if (!isArr) inputs = [inputs];
      var type = inputs[0].type;

      if (type === 'radio') {
        (function () {
          var value = toggle.getAttribute('data-toggle-visible');

          if (value !== null) {
            value = value.split('||');
          }

          var _loop = function _loop(x) {
            var input = inputs[x];

            _this2.setToggleRadio(toggle, input, value);

            input.addEventListener('change', function () {
              return _this2.setToggleRadio(toggle, input, value);
            });
          };

          for (var x = 0; x < inputs.length; x++) {
            _loop(x);
          }
        })();
      } else if (type === 'checkbox') {
        (function () {
          var min = toggle.getAttribute('data-toggle-min');

          if (min !== null) {
            _this2.setToggleMinCheckbox(toggle, inputs, min);

            for (var x = 0; x < inputs.length; x++) {
              var input = inputs[x];
              input.addEventListener('change', function () {
                return _this2.setToggleMinCheckbox(toggle, inputs, min);
              });
            }
          } else {
            var _loop2 = function _loop2(_x) {
              var input = inputs[_x];

              _this2.setToggleCheckbox(toggle, input);

              input.addEventListener('change', function () {
                return _this2.setToggleCheckbox(toggle, input);
              });
            };

            for (var _x = 0; _x < inputs.length; _x++) {
              _loop2(_x);
            }
          }
        })();
      }
    }
  }, {
    key: "setToggleRadio",
    value: function setToggleRadio(toggle, input, value) {
      if (input.checked && value.indexOf(input.value) !== -1) {
        toggle.style.display = '';
        toggle.classList.remove('js-dont-output');
      } else {
        toggle.style.display = 'none';
        toggle.classList.add('js-dont-output');
      }
    }
  }, {
    key: "setToggleMinCheckbox",
    value: function setToggleMinCheckbox(toggle, inputs, min) {
      var nbrChecked = 0;

      for (var x = 0; x < inputs.length; x++) {
        if (inputs[x].checked) nbrChecked++;
      }

      if (nbrChecked >= parseInt(min)) {
        toggle.style.display = '';
        toggle.classList.remove('js-dont-output');
      } else {
        toggle.style.display = 'none';
        toggle.classList.add('js-dont-output');
      }
    }
  }, {
    key: "setToggleCheckbox",
    value: function setToggleCheckbox(toggle, input) {
      if (input.checked) {
        toggle.style.display = '';
        toggle.classList.remove('js-dont-output');
      } else {
        toggle.style.display = 'none';
        toggle.classList.add('js-dont-output');
      }
    }
  }, {
    key: "setJira",
    value: function setJira(e) {
      var _this3 = this;

      e.preventDefault();
      var html = this.getArticles();
      this.copyStringToClipboard(html);
      this.dom.output.value = html;
      this.dom.generalCopy.classList.add('flipin');
      this.dom.generalCopy.addEventListener('animationend', function () {
        return _this3.dom.generalCopy.classList.remove('flipin');
      });
    }
  }, {
    key: "getArticles",
    value: function getArticles() {
      var html = '';

      for (var x = 0; x < this.dom.articles.length; x++) {
        var article = this.dom.articles[x];
        var content = this.getSections(article);

        if (content !== '') {
          var title = article.querySelector('h2').innerText;
          html += "h2. ".concat(title, "\n");
          html += content;
          html += '\n----';
        }
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
          var title = section.querySelector('h3').innerText;

          if (title !== '') {
            html += "h3. ".concat(title, "\n");
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
      var value = document.forms.jira[name].value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwidG9nZ2xlcyIsInRvZ2dsZXNUIiwic3VibWl0IiwiZm9ybXMiLCJqaXJhIiwib3V0cHV0IiwiZ2VuZXJhbENvcHkiLCJxdWVyeVNlbGVjdG9yIiwiYmluZEV2ZW50cyIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldFJvbGUiLCJ0b2dnbGUiLCJpbml0VG9nZ2xlIiwic2V0SmlyYSIsInJvbGUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJib2R5IiwiY2xhc3NMaXN0IiwiY2hlY2tlZCIsInNlbGVjdG9yIiwic3RhcnRzV2l0aCIsImlucHV0TmFtZSIsImlucHV0cyIsImdldE5vZGUiLCJpc0FyciIsImxlbmd0aCIsInR5cGUiLCJ2YWx1ZSIsInNwbGl0IiwieCIsImlucHV0Iiwic2V0VG9nZ2xlUmFkaW8iLCJtaW4iLCJzZXRUb2dnbGVNaW5DaGVja2JveCIsInNldFRvZ2dsZUNoZWNrYm94IiwiaW5kZXhPZiIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSIsImFkZCIsIm5ickNoZWNrZWQiLCJwYXJzZUludCIsInByZXZlbnREZWZhdWx0IiwiaHRtbCIsImdldEFydGljbGVzIiwiY29weVN0cmluZ1RvQ2xpcGJvYXJkIiwiYXJ0aWNsZSIsImNvbnRlbnQiLCJnZXRTZWN0aW9ucyIsInRpdGxlIiwiaW5uZXJUZXh0Iiwic2VjdGlvbiIsImdldFNlY3Rpb25UeXBlIiwiZ2V0TGlzdENvbnRlbnQiLCJpdGVtcyIsImFyciIsIml0ZW0iLCJvZmZzZXRQYXJlbnQiLCJ0ZXh0IiwiZ2V0SW5wdXQiLCJwdXNoIiwicHJlZml4Iiwiam9pbiIsIm5vZGUiLCJzZWxlY3QiLCJ0ZXh0YXJlYSIsImdldFVybCIsImdldERhdGUiLCJnZXRSYWRpbyIsImdldENoZWNrYm94IiwiZ2V0U2VsZWN0IiwiZ2V0VGV4dGFyZWEiLCJnZXRUZXh0Iiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJzdWZmaXgiLCJ1cmwiLCJuYW1lIiwic3RyIiwiaW5uZXJIVE1MIiwicmVwbGFjZUltZyIsInN0cmlwVGFncyIsInRyaW0iLCJyZXBsYWNlIiwibmV3U3RyIiwibWF0Y2giLCJwMSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwiZXhlY0NvbW1hbmQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tsaXN0IiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZNQSxTOzs7QUFDSix1QkFBYztBQUFBOztB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LFFBQUUsQ0FBQzdGLGdCQUFILENBQW9CLGlCQUFwQixFQUF1Q1ksT0FBdkMsQ0FBK0MsVUFBQUUsQ0FBQztBQUFBLGVBQzlDQSxDQUFDLENBQUNpRixVQUFGLENBQWFDLFdBQWIsQ0FBeUJsRixDQUF6QixDQUQ4QztBQUFBLE9BQWhEO0FBR0FzRSxTQUFHLEdBQUdTLEVBQUUsQ0FBQ3JDLFNBQVQ7QUFDQSxhQUFPNEIsR0FBUDtBQUNEOzs7MENBRXFCQSxHLEVBQUs7QUFDekIsVUFBSVMsRUFBRSxHQUFHOUYsUUFBUSxDQUFDK0YsYUFBVCxDQUF1QixVQUF2QixDQUFUO0FBQ0FELFFBQUUsQ0FBQzVELEtBQUgsR0FBV21ELEdBQVg7QUFDQVMsUUFBRSxDQUFDSSxZQUFILENBQWdCLFVBQWhCLEVBQTRCLEVBQTVCO0FBQ0FKLFFBQUUsQ0FBQ25ELEtBQUgsR0FBVztBQUFFd0QsZ0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxZQUFJLEVBQUU7QUFBOUIsT0FBWDtBQUNBcEcsY0FBUSxDQUFDdUIsSUFBVCxDQUFjOEUsV0FBZCxDQUEwQlAsRUFBMUI7QUFDQUEsUUFBRSxDQUFDdkIsTUFBSDtBQUNBdkUsY0FBUSxDQUFDc0csV0FBVCxDQUFxQixNQUFyQjtBQUNBdEcsY0FBUSxDQUFDdUIsSUFBVCxDQUFjMEUsV0FBZCxDQUEwQkgsRUFBMUI7QUFDQVMsYUFBTyxDQUFDQyxHQUFSLENBQVluQixHQUFaO0FBQ0Q7Ozs7OztBQUdILElBQUlvQixTQUFTLEdBQUcsSUFBSTVHLFNBQUosRUFBaEI7QUFDQTRHLFNBQVMsQ0FBQ0MsSUFBVixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2FwcC5qc1wiKTtcbiIsImNsYXNzIENoZWNrbGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgY2JSb2xlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2V0LXJvbGUnKSxcbiAgICAgIGFydGljbGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtamlyYScpLFxuICAgICAgc2VjdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyksXG4gICAgICB0b2dnbGVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGUtcmVmXScpLFxuICAgICAgdG9nZ2xlc1Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1yZWZzXScpLFxuICAgICAgc3VibWl0OiBkb2N1bWVudC5mb3Jtcy5qaXJhLnN1Ym1pdCxcbiAgICAgIG91dHB1dDogZG9jdW1lbnQuZm9ybXMuamlyYS5vdXRwdXQsXG4gICAgICBnZW5lcmFsQ29weTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbmVyYWwtY29weScpXG4gICAgfTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuZG9tLmNiUm9sZS5mb3JFYWNoKGNiUm9sZSA9PiB7XG4gICAgICBjYlJvbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB0aGlzLnNldFJvbGUoZSkpO1xuICAgIH0pO1xuICAgIHRoaXMuZG9tLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdGhpcy5pbml0VG9nZ2xlKHRvZ2dsZSkpO1xuICAgIHRoaXMuZG9tLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5zZXRKaXJhKGUpKTtcbiAgfVxuXG4gIHNldFJvbGUoZSkge1xuICAgIGxldCByb2xlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJvbGUnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShgc2hvdy0ke3JvbGV9YCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gIH1cblxuICBnZXROb2RlKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoJy4nKSB8fCBzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5mb3Jtcy5qaXJhLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZm9ybXMuamlyYVtzZWxlY3Rvcl07XG4gICAgfVxuICB9XG5cbiAgaW5pdFRvZ2dsZSh0b2dnbGUpIHtcbiAgICBsZXQgaW5wdXROYW1lID0gdG9nZ2xlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtcmVmJyk7XG4gICAgbGV0IGlucHV0cyA9IHRoaXMuZ2V0Tm9kZShpbnB1dE5hbWUpO1xuICAgIGxldCBpc0FyciA9IGlucHV0cy5sZW5ndGg7XG4gICAgaWYgKCFpc0FycikgaW5wdXRzID0gW2lucHV0c107XG4gICAgbGV0IHR5cGUgPSBpbnB1dHNbMF0udHlwZTtcblxuICAgIGlmICh0eXBlID09PSAncmFkaW8nKSB7XG4gICAgICBsZXQgdmFsdWUgPSB0b2dnbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS12aXNpYmxlJyk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCd8fCcpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGlucHV0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgaW5wdXQgPSBpbnB1dHNbeF07XG5cbiAgICAgICAgdGhpcy5zZXRUb2dnbGVSYWRpbyh0b2dnbGUsIGlucHV0LCB2YWx1ZSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgdGhpcy5zZXRUb2dnbGVSYWRpbyh0b2dnbGUsIGlucHV0LCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGxldCBtaW4gPSB0b2dnbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS1taW4nKTtcblxuICAgICAgaWYgKG1pbiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFRvZ2dsZU1pbkNoZWNrYm94KHRvZ2dsZSwgaW5wdXRzLCBtaW4pO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaW5wdXRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgbGV0IGlucHV0ID0gaW5wdXRzW3hdO1xuICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgICB0aGlzLnNldFRvZ2dsZU1pbkNoZWNrYm94KHRvZ2dsZSwgaW5wdXRzLCBtaW4pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpbnB1dHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICBsZXQgaW5wdXQgPSBpbnB1dHNbeF07XG5cbiAgICAgICAgICB0aGlzLnNldFRvZ2dsZUNoZWNrYm94KHRvZ2dsZSwgaW5wdXQpO1xuICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgICB0aGlzLnNldFRvZ2dsZUNoZWNrYm94KHRvZ2dsZSwgaW5wdXQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRvZ2dsZVJhZGlvKHRvZ2dsZSwgaW5wdXQsIHZhbHVlKSB7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQgJiYgdmFsdWUuaW5kZXhPZihpbnB1dC52YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0b2dnbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9nZ2xlTWluQ2hlY2tib3godG9nZ2xlLCBpbnB1dHMsIG1pbikge1xuICAgIGxldCBuYnJDaGVja2VkID0gMDtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaW5wdXRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoaW5wdXRzW3hdLmNoZWNrZWQpIG5ickNoZWNrZWQrKztcbiAgICB9XG5cbiAgICBpZiAobmJyQ2hlY2tlZCA+PSBwYXJzZUludChtaW4pKSB7XG4gICAgICB0b2dnbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9nZ2xlQ2hlY2tib3godG9nZ2xlLCBpbnB1dCkge1xuICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICB0b2dnbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SmlyYShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBodG1sID0gdGhpcy5nZXRBcnRpY2xlcygpO1xuICAgIHRoaXMuY29weVN0cmluZ1RvQ2xpcGJvYXJkKGh0bWwpO1xuICAgIHRoaXMuZG9tLm91dHB1dC52YWx1ZSA9IGh0bWw7XG4gICAgdGhpcy5kb20uZ2VuZXJhbENvcHkuY2xhc3NMaXN0LmFkZCgnZmxpcGluJyk7XG4gICAgdGhpcy5kb20uZ2VuZXJhbENvcHkuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4gdGhpcy5kb20uZ2VuZXJhbENvcHkuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcGluJykpXG4gIH1cblxuICBnZXRBcnRpY2xlcygpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmRvbS5hcnRpY2xlcy5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IGFydGljbGUgPSB0aGlzLmRvbS5hcnRpY2xlc1t4XTtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRTZWN0aW9ucyhhcnRpY2xlKTtcblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGFydGljbGUucXVlcnlTZWxlY3RvcignaDInKS5pbm5lclRleHQ7XG4gICAgICAgIGh0bWwgKz0gYGgyLiAke3RpdGxlfVxcbmA7XG4gICAgICAgIGh0bWwgKz0gY29udGVudDtcbiAgICAgICAgaHRtbCArPSAnXFxuLS0tLSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9ucyhhcnRpY2xlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgc2VjdGlvbnMgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlY3Rpb25zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zW3hdO1xuICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldFNlY3Rpb25UeXBlKHNlY3Rpb24pO1xuICAgICAgbGV0IGNvbnRlbnQgPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09ICd1bCcgfHwgdHlwZSA9PT0gJ29sJykge1xuICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignaDMnKS5pbm5lclRleHQ7XG4gICAgICAgIGlmICh0aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICBodG1sICs9IGBoMy4gJHt0aXRsZX1cXG5gO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gYCR7Y29udGVudH1cXG5cXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0U2VjdGlvblR5cGUoc2VjdGlvbikge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuXG4gICAgaWYgKHNlY3Rpb24ucXVlcnlTZWxlY3Rvcignb2wnKSkge1xuICAgICAgdHlwZSA9ICdvbCc7XG4gICAgfSBlbHNlIGlmIChzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3VsJykpIHtcbiAgICAgIHR5cGUgPSAndWwnO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0TGlzdENvbnRlbnQoc2VjdGlvbiwgdHlwZSkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgbGV0IGl0ZW1zID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBpdGVtID0gaXRlbXNbeF07XG5cbiAgICAgIGlmIChpdGVtLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBMJ8OpbMOpbWVudCBlc3QgdmlzaWJsZVxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZ2V0SW5wdXQoaXRlbSk7XG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgICAgIGFyci5wdXNoKHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdHlwZSA9PT0gJ3VsJyA/ICcqJyA6ICcjJztcbiAgICAgIGh0bWwgPSBwcmVmaXggKyAnICcgKyBhcnIuam9pbihgXFxuJHtwcmVmaXh9IGApO1xuICAgIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaHRtbCA9IGFyclswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldElucHV0KG5vZGUpIHtcbiAgICBsZXQgaW5wdXQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgbGV0IHNlbGVjdCA9IG5vZGUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgbGV0IHRleHRhcmVhID0gbm9kZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBpZiAoaW5wdXQgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldFVybChub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldERhdGUobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0UmFkaW8obm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0Q2hlY2tib3gobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ICE9PSBudWxsKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRTZWxlY3Qobm9kZSwgc2VsZWN0KTtcbiAgICB9IGVsc2UgaWYgKHRleHRhcmVhICE9PSBudWxsKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRUZXh0YXJlYShub2RlLCB0ZXh0YXJlYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRUZXh0YXJlYShub2RlLCB0ZXh0YXJlYSkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKHRleHRhcmVhLnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHByZWZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChwcmVmaXggIT09ICcnKSBwcmVmaXggKz0gJzogJztcbiAgICAgIGh0bWwgPSBgJHtwcmVmaXh9JHt0ZXh0YXJlYS52YWx1ZX1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlbGVjdChub2RlLCBzZWxlY3QpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWUgIT09ICcnKSB7XG4gICAgICBodG1sID0gYCR7dGhpcy5nZXRUZXh0KG5vZGUpfSAke1xuICAgICAgICBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxuICAgICAgfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0RGF0ZShub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHN1ZmZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChzdWZmaXggIT09ICcnKSBzdWZmaXggPSBgOiAke3N1ZmZpeH1gO1xuICAgICAgaHRtbCA9IGAqJHtpbnB1dC52YWx1ZX0qJHtzdWZmaXh9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRVcmwobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGxldCB1cmwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIHVybCA9IGBbJHt1cmx9XWA7XG4gICAgICB9XG5cbiAgICAgIGh0bWwgPSBgKiR7dGhpcy5nZXRUZXh0KG5vZGUpfSo6ICR7dXJsfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0UmFkaW8obm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBuYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHZhbHVlID0gZG9jdW1lbnQuZm9ybXMuamlyYVtuYW1lXS52YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHByZWZpeCAhPT0gJycpIHByZWZpeCArPSAnOiAnO1xuICAgICAgaHRtbCA9IGAke3ByZWZpeH0qJHt2YWx1ZX0qYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRDaGVja2JveChub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGV4dChub2RlKSB7XG4gICAgbGV0IHN0ciA9IG5vZGUuaW5uZXJIVE1MO1xuICAgIHN0ciA9IHRoaXMucmVwbGFjZUltZyhzdHIpO1xuICAgIHN0ciA9IHRoaXMuc3RyaXBUYWdzKHN0cik7XG4gICAgc3RyID0gc3RyLnRyaW0oKTsgLy8gcmVtb3ZlIHN0YXJ0IGFuZCBlbmQgd2hpdGVzcGFjZXM7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICcnKTsgLy8gc3RyaXAgbGluZWJyZWFrcztcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvICsoPz0gKS9nLCAnJyk7IC8vIHN0cmlwIG11bHRpcGxlIHdoaXRlIHNwYWNlcztcblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXBsYWNlSW1nKHN0cikge1xuICAgIGxldCBuZXdTdHIgPSBzdHIucmVwbGFjZShcbiAgICAgIC88aW1nIHNyY1xccyo9XFxzKlsnXFxcIl0oW14nXFxcIl0qPylbJ1xcXCJdW14+XSo/Pi9nLFxuICAgICAgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICAgIHJldHVybiBgISR7cDF9IWA7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBuZXdTdHI7XG4gIH1cblxuICBzdHJpcFRhZ3Moc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kb250LW91dHB1dCcpLmZvckVhY2goZSA9PlxuICAgICAgZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpXG4gICAgKTtcbiAgICBzdHIgPSBlbC5pbm5lclRleHQ7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNvcHlTdHJpbmdUb0NsaXBib2FyZChzdHIpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVsLnZhbHVlID0gc3RyO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgZWwuc3R5bGUgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTk5OTlweCcgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICBlbC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIGNvbnNvbGUubG9nKHN0cik7XG4gIH1cbn1cblxubGV0IGNoZWNrbGlzdCA9IG5ldyBDaGVja2xpc3QoKTtcbmNoZWNrbGlzdC5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9