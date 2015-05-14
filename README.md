protractor-ionic-locator
===

Adds a locators to a protractor instance that find ionic specific elements, such as collection-repeat.

## Installation

`$ npm install protractor-ionic-locator`

## Usage

```javascript
onPrepare: function () {
  // Your other stuff.
  require('protractor-ionic-locator')(protractor);
}
```

The following locators will be availble in your specs;

###by.collRepeater`

Find elements inside an ng-repeat.

#### Example

```xhtml
<div collection-repeat="cat in pets">
  <span>{{cat.name}}</span>
  <span>{{cat.age}}</span>
</div>
```

```javascript
// Returns a promise that resolves to an array of WebElements containing
// all top level elements repeated by the Ionic collection-repeat repeater. 
// For 2 pets rows resolves to an array of 2 elements.
var rows = element.all(by.collRepeater('cat in pets'));
```

#### Params

Param            | Type
---------------- | -------------
repeatDescriptor | string

## Credit

Base code for adding locators to Protractor was taken from [Fernando Martinez's](https://github.com/crzrcn) great [protractor-uisref-locator package](https://github.com/crzrcn/protractor-uisref-locator)... thanks man!