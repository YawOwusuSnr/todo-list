/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");

const content = document.getElementById('content')


const Project = (name, des) => {
    const getName = () => name   
    const getDes = () => des
    const togglePrompt = () => {
        document.getElementById("popup-1").classList.toggle("active");
    };

    const toDo = []
    
    const addTaskToProject = (task) => {
        toDo.push(task)
        console.log('done adding')
    }

    const renderTasks = () => {
        content.innerHTML = "";
        const list = document.createElement('div')
        list.classList.add('items')
    
        toDo.forEach((spec) => {
            const card = document.createElement('div')
            const head = document.createElement('div')
            const body = document.createElement('div')
            card.classList.add('card')
    
            head.textContent = `${spec.getTitle()}`
            body.textContent = `${spec.getDescription()}`

            card.appendChild(head)
            card.appendChild(body)
            
            list.appendChild(card)
        })
    
        const newTaskButton = document.createElement('button')
        newTaskButton.innerText = 'New Note'

        newTaskButton.addEventListener('click', () => {
            togglePrompt()
        })

        list.appendChild(newTaskButton)
        content.appendChild(list)
    }
    


    

    return {getName, getDes, addTaskToProject, toDo, renderTasks, togglePrompt}
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (title, description, dueDate, priority) => {
    const getTitle = () => title
    const getDescription  = () => description;
    const getDue = () => dueDate;
    const getPriority =() => priority

    return {getDescription, getDue, getPriority, getTitle}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



const newProjectButton = document.getElementById('new_project')
newProjectButton.addEventListener('click', () => {
    togglePrompt()
})


// Folder holds all projects
const folder = (() => {
    const header = document.getElementById('header')
    const li = document.getElementById('nav')
    header.appendChild(li)

    const projectsArray = []

    const listProjects = () => {
    projectsArray.forEach(project => {
        const projlistItem = document.createElement('li')
        const projbutton = document.createElement('button')
        projbutton.innerHTML = project.getName()
        projbutton.setAttribute('class', `projects`)
        projbutton.setAttribute('id', `${project.getName()}`)
        projlistItem.appendChild(projbutton)
        li.appendChild(projlistItem)
        console.log('listed')
    });
    }   

    const addProject = (proj) => {
        projectsArray.push(proj)
        listProjects()
    }

    return {projectsArray, addProject}
})();


const new_Task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Download odin', 'Make sure', 'Important', 'tomorrow')
const newProj = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Coding', 'Everything i need to code')


newProj.addTaskToProject(new_Task)

folder.addProject(newProj)


const projects = document.querySelectorAll('.projects')

projects.forEach((project) => {
    project.addEventListener('click', () => {
        folder.projectsArray[0].renderTasks();
    });
});

function newTask() {
    const form = document.getElementById('add_a_book')
    const new_title = form.elements[0].value
    const new_description = form.elements[1].value
    const new_due = form.elements[2].value
    
    const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new_title, new_description, new_due, 'important')
    newProj.addTaskToProject(task)
    newProj.renderTasks()
    newProj.togglePrompt()
    form.reset()
}

const submitTask = document.getElementById('add_book')
submitTask.addEventListener('click', newTask)

console.log(newProj.toDo)

function askForProject() {
    // const popup = document.createElement('div')
    // const overlay = document.createElement('div')
    // const form_content = document.createElement('div')

    // const greet = document.createElement('h1')
    // greet.textContent = 'Add Project'
    // const project_form = document.createElement('form')

    // const label1 = document.createElement('label')
    // const new_project_name = document.createElement()

    // const label2 = document.createElement('label')
    // const label3 = document.createElement('label')

    const form1 = document.getElementById('add_a_form')

    const new_title1 = form1.elements[0].value
    const new_description1 = form1.elements[1].value
    
    const task = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new_title1, new_description1)
    newProj.togglePrompt()
    form1.reset()
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDNUI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQsa0NBQWtDLHNCQUFzQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxZQUFZO0FBQ1o7OztBQUdBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0EsaUVBQWU7Ozs7OztVQ1JmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ007O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7OztBQUdELGlCQUFpQixvREFBSTtBQUNyQixnQkFBZ0IsdURBQU87OztBQUd2Qjs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBTztBQUN4QjtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG5cbmNvbnN0IFByb2plY3QgPSAobmFtZSwgZGVzKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWUgICBcbiAgICBjb25zdCBnZXREZXMgPSAoKSA9PiBkZXNcbiAgICBjb25zdCB0b2dnbGVQcm9tcHQgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXAtMVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b0RvID0gW11cbiAgICBcbiAgICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHRhc2spID0+IHtcbiAgICAgICAgdG9Eby5wdXNoKHRhc2spXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lIGFkZGluZycpXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnaXRlbXMnKVxuICAgIFxuICAgICAgICB0b0RvLmZvckVhY2goKHNwZWMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgXG4gICAgICAgICAgICBoZWFkLnRleHRDb250ZW50ID0gYCR7c3BlYy5nZXRUaXRsZSgpfWBcbiAgICAgICAgICAgIGJvZHkudGV4dENvbnRlbnQgPSBgJHtzcGVjLmdldERlc2NyaXB0aW9uKCl9YFxuXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWQpXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIG5ld1Rhc2tCdXR0b24uaW5uZXJUZXh0ID0gJ05ldyBOb3RlJ1xuXG4gICAgICAgIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVQcm9tcHQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbilcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0KVxuICAgIH1cbiAgICBcblxuXG4gICAgXG5cbiAgICByZXR1cm4ge2dldE5hbWUsIGdldERlcywgYWRkVGFza1RvUHJvamVjdCwgdG9EbywgcmVuZGVyVGFza3MsIHRvZ2dsZVByb21wdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0XG5cbiIsImNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGVcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiAgPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0oKSA9PiBwcmlvcml0eVxuXG4gICAgcmV0dXJuIHtnZXREZXNjcmlwdGlvbiwgZ2V0RHVlLCBnZXRQcmlvcml0eSwgZ2V0VGl0bGV9XG59XG5leHBvcnQgZGVmYXVsdCBUYXNrIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3X3Byb2plY3QnKVxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVQcm9tcHQoKVxufSlcblxuXG4vLyBGb2xkZXIgaG9sZHMgYWxsIHByb2plY3RzXG5jb25zdCBmb2xkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKVxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpKVxuXG4gICAgY29uc3QgcHJvamVjdHNBcnJheSA9IFtdXG5cbiAgICBjb25zdCBsaXN0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGNvbnN0IHByb2pidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBwcm9qYnV0dG9uLmlubmVySFRNTCA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICAgIHByb2pidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qZWN0c2ApXG4gICAgICAgIHByb2pidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3QuZ2V0TmFtZSgpfWApXG4gICAgICAgIHByb2psaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qYnV0dG9uKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChwcm9qbGlzdEl0ZW0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZWQnKVxuICAgIH0pO1xuICAgIH0gICBcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvaikgPT4ge1xuICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gocHJvailcbiAgICAgICAgbGlzdFByb2plY3RzKClcbiAgICB9XG5cbiAgICByZXR1cm4ge3Byb2plY3RzQXJyYXksIGFkZFByb2plY3R9XG59KSgpO1xuXG5cbmNvbnN0IG5ld19UYXNrID0gVGFzaygnRG93bmxvYWQgb2RpbicsICdNYWtlIHN1cmUnLCAnSW1wb3J0YW50JywgJ3RvbW9ycm93JylcbmNvbnN0IG5ld1Byb2ogPSBQcm9qZWN0KCdDb2RpbmcnLCAnRXZlcnl0aGluZyBpIG5lZWQgdG8gY29kZScpXG5cblxubmV3UHJvai5hZGRUYXNrVG9Qcm9qZWN0KG5ld19UYXNrKVxuXG5mb2xkZXIuYWRkUHJvamVjdChuZXdQcm9qKVxuXG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzJylcblxucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGZvbGRlci5wcm9qZWN0c0FycmF5WzBdLnJlbmRlclRhc2tzKCk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gbmV3VGFzaygpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9hX2Jvb2snKVxuICAgIGNvbnN0IG5ld190aXRsZSA9IGZvcm0uZWxlbWVudHNbMF0udmFsdWVcbiAgICBjb25zdCBuZXdfZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzWzFdLnZhbHVlXG4gICAgY29uc3QgbmV3X2R1ZSA9IGZvcm0uZWxlbWVudHNbMl0udmFsdWVcbiAgICBcbiAgICBjb25zdCB0YXNrID0gVGFzayhuZXdfdGl0bGUsIG5ld19kZXNjcmlwdGlvbiwgbmV3X2R1ZSwgJ2ltcG9ydGFudCcpXG4gICAgbmV3UHJvai5hZGRUYXNrVG9Qcm9qZWN0KHRhc2spXG4gICAgbmV3UHJvai5yZW5kZXJUYXNrcygpXG4gICAgbmV3UHJvai50b2dnbGVQcm9tcHQoKVxuICAgIGZvcm0ucmVzZXQoKVxufVxuXG5jb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ib29rJylcbnN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUYXNrKVxuXG5jb25zb2xlLmxvZyhuZXdQcm9qLnRvRG8pXG5cbmZ1bmN0aW9uIGFza0ZvclByb2plY3QoKSB7XG4gICAgLy8gY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vIGNvbnN0IGZvcm1fY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAvLyBjb25zdCBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAvLyBncmVldC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCdcbiAgICAvLyBjb25zdCBwcm9qZWN0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcblxuICAgIC8vIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAvLyBjb25zdCBuZXdfcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG5cbiAgICAvLyBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgLy8gY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXG4gICAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2FfZm9ybScpXG5cbiAgICBjb25zdCBuZXdfdGl0bGUxID0gZm9ybTEuZWxlbWVudHNbMF0udmFsdWVcbiAgICBjb25zdCBuZXdfZGVzY3JpcHRpb24xID0gZm9ybTEuZWxlbWVudHNbMV0udmFsdWVcbiAgICBcbiAgICBjb25zdCB0YXNrID0gUHJvamVjdChuZXdfdGl0bGUxLCBuZXdfZGVzY3JpcHRpb24xKVxuICAgIG5ld1Byb2oudG9nZ2xlUHJvbXB0KClcbiAgICBmb3JtMS5yZXNldCgpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9