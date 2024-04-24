'use strict';

// Source: https://github.com/twbs/examples/blob/main/vite/src/js/main.js

// Option A: Include all of Bootstrap
// import 'bootstrap';

// Include parts of Bootstrap
import {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip
} from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});
