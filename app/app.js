'use strict';

var angular = require('angular');
require('angular-spinner');

angular.module('todoListApp', ['angularSpinner']);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');
