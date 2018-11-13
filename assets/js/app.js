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
      submit: document.forms.jira.submit
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
    key: "setJira",
    value: function setJira(e) {
      e.preventDefault();
      var html = this.getArticles();
      this.copyStringToClipboard(html);
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
        var text = this.getInput(item);

        if (text !== '') {
          arr.push(text);
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
        html = "*".concat(input.value, "*: ").concat(this.getText(node));
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
        html = "".concat(this.getText(node), ": *").concat(value, "*");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwic3VibWl0IiwiZm9ybXMiLCJqaXJhIiwiYmluZEV2ZW50cyIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldFJvbGUiLCJzZXRKaXJhIiwicm9sZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJodG1sIiwiZ2V0QXJ0aWNsZXMiLCJjb3B5U3RyaW5nVG9DbGlwYm9hcmQiLCJ4IiwibGVuZ3RoIiwiYXJ0aWNsZSIsImNvbnRlbnQiLCJnZXRTZWN0aW9ucyIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInNlY3Rpb24iLCJ0eXBlIiwiZ2V0U2VjdGlvblR5cGUiLCJnZXRMaXN0Q29udGVudCIsIml0ZW1zIiwiYXJyIiwiaXRlbSIsInRleHQiLCJnZXRJbnB1dCIsInB1c2giLCJwcmVmaXgiLCJqb2luIiwibm9kZSIsImlucHV0Iiwic2VsZWN0IiwiZ2V0VXJsIiwiZ2V0RGF0ZSIsImdldFJhZGlvIiwiZ2V0Q2hlY2tib3giLCJnZXRTZWxlY3QiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwiZ2V0VGV4dCIsInVybCIsInN0YXJ0c1dpdGgiLCJuYW1lIiwic3RyIiwiaW5uZXJIVE1MIiwicmVwbGFjZUltZyIsInN0cmlwVGFncyIsInRyaW0iLCJyZXBsYWNlIiwibmV3U3RyIiwibWF0Y2giLCJwMSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiYXBwZW5kQ2hpbGQiLCJleGVjQ29tbWFuZCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2xpc3QiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osU0FBS0MsR0FBTCxHQUFXO0FBQ1RDLFlBQU0sRUFBRUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixjQUExQixDQURDO0FBRVRDLGNBQVEsRUFBRUYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUZEO0FBR1RFLGNBQVEsRUFBRUgsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUhEO0FBSVRHLFlBQU0sRUFBRUosUUFBUSxDQUFDSyxLQUFULENBQWVDLElBQWYsQ0FBb0JGO0FBSm5CLEtBQVg7QUFNRDs7OzsyQkFFTTtBQUNMLFdBQUtHLFVBQUw7QUFDRDs7O2lDQUVZO0FBQUE7O0FBQ1gs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cUJBLEcsRUFBSztBQUN6QixVQUFJUyxFQUFFLEdBQUdwRSxRQUFRLENBQUNxRSxhQUFULENBQXVCLFVBQXZCLENBQVQ7QUFDQUQsUUFBRSxDQUFDZCxLQUFILEdBQVdLLEdBQVg7QUFDQVMsUUFBRSxDQUFDSSxZQUFILENBQWdCLFVBQWhCLEVBQTRCLEVBQTVCO0FBQ0FKLFFBQUUsQ0FBQ0ssS0FBSCxHQUFXO0FBQUVDLGdCQUFRLEVBQUUsVUFBWjtBQUF3QkMsWUFBSSxFQUFFO0FBQTlCLE9BQVg7QUFDQTNFLGNBQVEsQ0FBQ2dCLElBQVQsQ0FBYzRELFdBQWQsQ0FBMEJSLEVBQTFCO0FBQ0FBLFFBQUUsQ0FBQ3RCLE1BQUg7QUFDQTlDLGNBQVEsQ0FBQzZFLFdBQVQsQ0FBcUIsTUFBckI7QUFDQTdFLGNBQVEsQ0FBQ2dCLElBQVQsQ0FBY3VELFdBQWQsQ0FBMEJILEVBQTFCO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsR0FBWjtBQUNEOzs7Ozs7QUFHSCxJQUFJcUIsU0FBUyxHQUFHLElBQUluRixTQUFKLEVBQWhCO0FBQ0FtRixTQUFTLENBQUNDLElBQVYsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCJjbGFzcyBDaGVja2xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIGNiUm9sZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNldC1yb2xlJyksXG4gICAgICBhcnRpY2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWppcmEnKSxcbiAgICAgIHNlY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpLFxuICAgICAgc3VibWl0OiBkb2N1bWVudC5mb3Jtcy5qaXJhLnN1Ym1pdFxuICAgIH07XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmRvbS5jYlJvbGUuZm9yRWFjaChjYlJvbGUgPT4ge1xuICAgICAgY2JSb2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gdGhpcy5zZXRSb2xlKGUpKTtcbiAgICB9KTtcbiAgICB0aGlzLmRvbS5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuc2V0SmlyYShlKSk7XG4gIH1cblxuICBzZXRSb2xlKGUpIHtcbiAgICBsZXQgcm9sZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yb2xlJyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoYHNob3ctJHtyb2xlfWAsIGUudGFyZ2V0LmNoZWNrZWQpO1xuICB9XG5cbiAgc2V0SmlyYShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBodG1sID0gdGhpcy5nZXRBcnRpY2xlcygpO1xuICAgIHRoaXMuY29weVN0cmluZ1RvQ2xpcGJvYXJkKGh0bWwpO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZXMoKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5kb20uYXJ0aWNsZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBhcnRpY2xlID0gdGhpcy5kb20uYXJ0aWNsZXNbeF07XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0U2VjdGlvbnMoYXJ0aWNsZSk7XG5cbiAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgICBsZXQgdGl0bGUgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2gyJykuaW5uZXJUZXh0O1xuICAgICAgICBodG1sICs9IGBoMi4gJHt0aXRsZX1cXG5gO1xuICAgICAgICBodG1sICs9IGNvbnRlbnQ7XG4gICAgICAgIGh0bWwgKz0gJ1xcbi0tLS0nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0U2VjdGlvbnMoYXJ0aWNsZSkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgbGV0IHNlY3Rpb25zID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzZWN0aW9ucy5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IHNlY3Rpb24gPSBzZWN0aW9uc1t4XTtcbiAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRTZWN0aW9uVHlwZShzZWN0aW9uKTtcbiAgICAgIGxldCBjb250ZW50ID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSAndWwnIHx8IHR5cGUgPT09ICdvbCcpIHtcbiAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0TGlzdENvbnRlbnQoc2VjdGlvbiwgdHlwZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgICBsZXQgdGl0bGUgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2gzJykuaW5uZXJUZXh0O1xuICAgICAgICBpZih0aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICBodG1sICs9IGBoMy4gJHt0aXRsZX1cXG5gO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gYCR7Y29udGVudH1cXG5cXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0U2VjdGlvblR5cGUoc2VjdGlvbikge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuXG4gICAgaWYoc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdvbCcpKSB7XG4gICAgICB0eXBlID0gJ29sJztcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24ucXVlcnlTZWxlY3RvcigndWwnKSkge1xuICAgICAgdHlwZSA9ICd1bCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgaXRlbXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgZm9yKGxldCB4PTA7IHg8aXRlbXMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBpdGVtID0gaXRlbXNbeF07XG4gICAgICBsZXQgdGV4dCA9IHRoaXMuZ2V0SW5wdXQoaXRlbSk7XG4gICAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgICAgYXJyLnB1c2godGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0eXBlID09PSAndWwnID8gJyonIDogJyMnO1xuICAgICAgaHRtbCA9IHByZWZpeCArICcgJyArIGFyci5qb2luKGBcXG4ke3ByZWZpeH0gYCk7XG4gICAgfSBlbHNlIGlmKGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgIGh0bWwgPSBhcnJbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRJbnB1dChub2RlKSB7XG4gICAgbGV0IGlucHV0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGxldCBzZWxlY3QgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBpZiAoaW5wdXQgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldFVybChub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldERhdGUobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0UmFkaW8obm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0Q2hlY2tib3gobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihzZWxlY3QgIT09IG51bGwpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFNlbGVjdChub2RlLCBzZWxlY3QpO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0U2VsZWN0KG5vZGUsIHNlbGVjdCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGh0bWwgPSBgJHt0aGlzLmdldFRleHQobm9kZSl9ICR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXREYXRlKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBodG1sID0gYCoke2lucHV0LnZhbHVlfSo6ICR7dGhpcy5nZXRUZXh0KG5vZGUpfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VXJsKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgdXJsID0gaW5wdXQudmFsdWU7XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICB1cmwgPSBgWyR7dXJsfV1gO1xuICAgICAgfVxuXG4gICAgICBodG1sID0gYCoke3RoaXMuZ2V0VGV4dChub2RlKX0qOiAke3VybH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFJhZGlvKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgbmFtZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LmZvcm1zLmppcmFbbmFtZV0udmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgaHRtbCA9IGAke3RoaXMuZ2V0VGV4dChub2RlKX06ICoke3ZhbHVlfSpgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldENoZWNrYm94KG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgaHRtbCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRUZXh0KG5vZGUpIHtcbiAgICBsZXQgc3RyID0gbm9kZS5pbm5lckhUTUw7XG4gICAgc3RyID0gdGhpcy5yZXBsYWNlSW1nKHN0cik7XG4gICAgc3RyID0gdGhpcy5zdHJpcFRhZ3Moc3RyKTtcbiAgICBzdHIgPSBzdHIudHJpbSgpOyAvLyByZW1vdmUgc3RhcnQgYW5kIGVuZCB3aGl0ZXNwYWNlcztcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgJycpOyAvLyBzdHJpcCBsaW5lYnJlYWtzO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8gKyg/PSApL2csICcnKTsgLy8gc3RyaXAgbXVsdGlwbGUgd2hpdGUgc3BhY2VzO1xuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHJlcGxhY2VJbWcoc3RyKSB7XG4gICAgbGV0IG5ld1N0ciA9IHN0ci5yZXBsYWNlKC88aW1nIHNyY1xccyo9XFxzKlsnXFxcIl0oW14nXFxcIl0qPylbJ1xcXCJdW14+XSo/Pi9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgICByZXR1cm4gYCEke3AxfSFgO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1N0cjtcbiAgfVxuXG4gIHN0cmlwVGFncyhzdHIpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5pbm5lckhUTUwgPSBzdHI7XG4gICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLWRvbnQtb3V0cHV0JykuZm9yRWFjaChlID0+IGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSk7XG4gICAgc3RyID0gZWwuaW5uZXJUZXh0O1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBjb3B5U3RyaW5nVG9DbGlwYm9hcmQoc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlbC52YWx1ZSA9IHN0cjtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgIGVsLnN0eWxlID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy05OTk5cHgnIH07XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgZWwuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xuICB9XG59XG5cbmxldCBjaGVja2xpc3QgPSBuZXcgQ2hlY2tsaXN0KCk7XG5jaGVja2xpc3QuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==