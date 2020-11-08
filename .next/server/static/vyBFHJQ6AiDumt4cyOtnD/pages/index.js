module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/utils/getImageUrl.ts
const getImageUrl = url => `${""}${url}`;
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-media-query"
var external_styled_media_query_ = __webpack_require__("wqYh");
var external_styled_media_query_default = /*#__PURE__*/__webpack_require__.n(external_styled_media_query_);

// CONCATENATED MODULE: ./src/components/Logo/styles.ts


const LogoWrapper = external_styled_components_default.a.img.withConfig({
  displayName: "styles__LogoWrapper",
  componentId: "sc-31y4qz-0"
})(["width:22rem;", ""], external_styled_media_query_default.a.greaterThan('medium')`
    width: 24.5rem;
  `);
// CONCATENATED MODULE: ./src/components/Logo/index.tsx
var __jsx = external_react_default.a.createElement;




const Logo = ({
  alternativeText,
  url
}) => /*#__PURE__*/external_react_default.a.createElement(LogoWrapper, {
  src: getImageUrl(url),
  alt: alternativeText
});

/* harmony default export */ var components_Logo = (Logo);
// CONCATENATED MODULE: ./src/components/Button/styles.ts


const buttonModifiers = {
  withPrice: theme => Object(external_styled_components_["css"])(["display:flex;align-items:center;justify-content:space-between;padding:", ";"], theme.spacings.xsmall),
  wide: theme => Object(external_styled_components_["css"])(["padding:1.3rem ", ";", ""], theme.spacings.medium, external_styled_media_query_default.a.greaterThan('medium')`
      padding: 1.3rem ${theme.spacings.large};
    `)
};
const ButtonWrapper = external_styled_components_default.a.a.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-1dhp7ir-0"
})(["", ""], ({
  theme,
  wide,
  withPrice
}) => Object(external_styled_components_["css"])(["background:", ";border-radius:", ";color:", ";font-size:", ";text-decoration:none;text-align:center;white-space:nowrap;transition:background 0.3s ease-in-out;&:hover{background:", ";}", ";", ";"], theme.colors.primary, theme.border.radius, theme.colors.white, theme.font.sizes.xsmall, theme.colors.primaryHover, wide && buttonModifiers.wide(theme), withPrice && buttonModifiers.withPrice(theme)));
// CONCATENATED MODULE: ./src/components/Button/index.tsx
var Button_jsx = external_react_default.a.createElement;



const Button = ({
  children,
  wide,
  withPrice,
  href,
  onClick
}) => /*#__PURE__*/external_react_default.a.createElement(ButtonWrapper, {
  href: href,
  wide: wide,
  withPrice: withPrice,
  onClick: onClick
}, children);

/* harmony default export */ var components_Button = (Button);
// CONCATENATED MODULE: ./src/components/SectionHero/styles.ts


const Wrapper = external_styled_components_default.a.header.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-5jva66-0"
})(["text-align:center;", ""], external_styled_media_query_default.a.greaterThan('medium')`
    text-align: left;
    margin: auto;
  `);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-5jva66-1"
})(["display:flex;flex-direction:column;margin:4.6rem auto 0;", ""], external_styled_media_query_default.a.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 15rem auto;
  `);
const TextBlock = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TextBlock",
  componentId: "sc-5jva66-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;flex-direction:column;max-width:60rem;margin:auto;", ""], external_styled_media_query_default.a.greaterThan('medium')`
      margin: initial;
      padding-right: ${theme.spacings.medium};
    `));
const Title = external_styled_components_default.a.h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-5jva66-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:min(", ",5vw);font-weight:", ";", ""], theme.font.sizes.xxlarge, theme.font.bold, external_styled_media_query_default.a.lessThan('medium')`
      display: none;
    `));
const Description = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__Description",
  componentId: "sc-5jva66-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:2.2rem;line-height:3rem;font-weight:400;", ""], external_styled_media_query_default.a.greaterThan('medium')`
      font-size: min(${theme.font.sizes.xlarge}, 3vw);
      line-height: min(5rem, 4.5vw);
    `));
const styles_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-5jva66-5"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;padding-top:", ";margin:0 auto;", ""], theme.spacings.medium, external_styled_media_query_default.a.greaterThan('medium')`
      margin: 0;
      padding-right: ${theme.spacings.medium};
    `));
const Image = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-5jva66-6"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["margin:", " auto;width:min(34rem,100%);", ""], theme.spacings.large, external_styled_media_query_default.a.greaterThan('medium')`
      margin: 0;
      width: 42rem;
    `));
// CONCATENATED MODULE: ./src/utils/ga.ts
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = url => {
  window.gtag('config', "UA-58087941-2", {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const gaEvent = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
// CONCATENATED MODULE: ./src/components/Container/styles.ts


const Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "bxbhl0-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["max-width:", ";padding:", " calc(", " / 2);margin:0 auto;", ""], theme.grid.container, theme.spacings.large, theme.grid.gutter, external_styled_media_query_default.a.greaterThan('medium')`
      padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2);
    `));
// CONCATENATED MODULE: ./src/components/Container/index.tsx
var Container_jsx = external_react_default.a.createElement;



const Container_Container = ({
  children,
  id
}) => /*#__PURE__*/external_react_default.a.createElement(Container, {
  id: id
}, children);

/* harmony default export */ var components_Container = (Container_Container);
// CONCATENATED MODULE: ./src/components/SectionHero/index.tsx
var SectionHero_jsx = external_react_default.a.createElement;








const SectionHero_onClick = () => gaEvent({
  action: 'click',
  category: 'cta',
  label: 'hero button'
});

const SectionHero = ({
  logo,
  header
}) => /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(components_Logo, logo), /*#__PURE__*/external_react_default.a.createElement(Content, null, /*#__PURE__*/external_react_default.a.createElement(TextBlock, null, /*#__PURE__*/external_react_default.a.createElement(Title, null, header.title), /*#__PURE__*/external_react_default.a.createElement(Description, null, " ", header.description, " "), /*#__PURE__*/external_react_default.a.createElement(styles_ButtonWrapper, null, /*#__PURE__*/external_react_default.a.createElement(components_Button, {
  href: header.button.url,
  onClick: SectionHero_onClick,
  wide: true
}, header.button.label))), /*#__PURE__*/external_react_default.a.createElement(Image, {
  src: getImageUrl(header.image.url),
  alt: header.image.alternativeText
}))));

/* harmony default export */ var components_SectionHero = (SectionHero);
// CONCATENATED MODULE: ./src/components/Heading/styles.ts


const wrapperModifiers = {
  defaultColor: theme => Object(external_styled_components_["css"])(["color:", ";"], theme.colors.black),
  reverseColor: theme => Object(external_styled_components_["css"])(["color:", ";"], theme.colors.white),
  lineLeft: theme => Object(external_styled_components_["css"])(["border-left:7px solid ", ";"], theme.colors.secondary),
  lineBottom: theme => Object(external_styled_components_["css"])(["padding-left:0;position:relative;margin-bottom:", ";&::after{content:' ';border-bottom:5px solid ", ";width:5rem;position:absolute;left:0;bottom:-1rem;}"], theme.spacings.medium, theme.colors.primary)
};
const styles_Wrapper = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1rz2gsr-0"
})(["", ""], ({
  theme,
  reverseColor,
  lineBottom
}) => Object(external_styled_components_["css"])(["padding-left:1rem;font-size:", ";", " ", ";", ";", ";", ";"], theme.font.sizes.medium, external_styled_media_query_default.a.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `, !reverseColor && wrapperModifiers.defaultColor(theme), reverseColor && wrapperModifiers.reverseColor(theme), lineBottom && wrapperModifiers.lineBottom(theme), !lineBottom && wrapperModifiers.lineLeft(theme)));
// CONCATENATED MODULE: ./src/components/Heading/index.tsx
var Heading_jsx = external_react_default.a.createElement;



const Heading = ({
  reverseColor = false,
  lineBottom = false,
  children
}) => /*#__PURE__*/external_react_default.a.createElement(styles_Wrapper, {
  reverseColor: reverseColor,
  lineBottom: lineBottom
}, children);

/* harmony default export */ var components_Heading = (Heading);
// CONCATENATED MODULE: ./src/components/SectionAboutProject/styles.ts


const SectionAboutProject_styles_Wrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1p820ds-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;background:", ";transform:skewY(3deg);", ""], theme.colors.white, external_styled_media_query_default.a.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `));
const styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1p820ds-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:grid;grid-template-columns:1fr;grid-gap:", ";transform:skewY(-3deg);", ""], theme.spacings.medium, external_styled_media_query_default.a.greaterThan('large')`
    grid-template-columns: 1fr 1fr;
      padding: 0 ${theme.spacings.medium};
    `));
const styles_Image = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-1p820ds-2"
})(["display:block;max-width:min(60rem,100%);margin:0 auto;", ""], external_styled_media_query_default.a.lessThan('medium')`
      max-width: 100%;
`);
const Text = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1p820ds-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["margin-top:", ";p{color:", ";margin-bottom:", ";}strong{border-bottom:2px solid ", ";}"], theme.spacings.medium, theme.colors.texts, theme.spacings.small, theme.colors.primary));
// CONCATENATED MODULE: ./src/components/SectionAboutProject/index.tsx
var SectionAboutProject_jsx = external_react_default.a.createElement;






const SectionAboutProject = ({
  title,
  description,
  image
}) => /*#__PURE__*/external_react_default.a.createElement(SectionAboutProject_styles_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(styles_Container, null, /*#__PURE__*/external_react_default.a.createElement(styles_Image, {
  src: getImageUrl(image.url),
  alt: image.alternativeText,
  loading: "lazy"
}), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, null, title), /*#__PURE__*/external_react_default.a.createElement(Text, {
  dangerouslySetInnerHTML: {
    __html: description
  }
})))));

/* harmony default export */ var components_SectionAboutProject = (SectionAboutProject);
// CONCATENATED MODULE: ./src/components/SectionTech/styles.ts


const SectionTech_styles_Wrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Wrapper",
  componentId: "ak0mde-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["padding-top:", ";", ""], theme.spacings.large, external_styled_media_query_default.a.greaterThan('large')`
      flex-direction: row;
      padding: ${theme.spacings.xlarge} ${theme.spacings.medium} 0;
    `));
const IconsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__IconsContainer",
  componentId: "ak0mde-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:grid;grid-template-columns:1fr 1fr;text-align:center;column-gap:", ";row-gap:", ";margin-top:", ";", " ", ";"], theme.spacings.small, theme.spacings.medium, theme.spacings.large, external_styled_media_query_default.a.greaterThan('small')`
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    `, external_styled_media_query_default.a.greaterThan('medium')`
      column-gap: ${theme.spacings.xxlarge};
      row-gap: ${theme.spacings.large};
    `));
const Icon = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Icon",
  componentId: "ak0mde-2"
})([""]);
const Icons = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Icons",
  componentId: "ak0mde-3"
})(["width:7rem;height:7rem;transition:all 0.4s;", ""], external_styled_media_query_default.a.greaterThan('medium')`
    width: 12.8rem;
    height: 12.8rem;
  `);
const IconsName = external_styled_components_default.a.p.withConfig({
  displayName: "styles__IconsName",
  componentId: "ak0mde-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";margin-top:", ";", ""], theme.font.sizes.xsmall, theme.spacings.xxsmall, external_styled_media_query_default.a.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
    `));
// CONCATENATED MODULE: ./src/components/SectionTech/index.tsx
var SectionTech_jsx = external_react_default.a.createElement;






const SectionTech = ({
  title,
  techIcons
}) => /*#__PURE__*/external_react_default.a.createElement(SectionTech_styles_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  reverseColor: true
}, title), /*#__PURE__*/external_react_default.a.createElement(IconsContainer, null, techIcons.map(({
  title,
  icon
}) => /*#__PURE__*/external_react_default.a.createElement(Icon, {
  key: title
}, /*#__PURE__*/external_react_default.a.createElement(Icons, {
  src: getImageUrl(icon.url),
  alt: title,
  loading: "lazy"
}), /*#__PURE__*/external_react_default.a.createElement(IconsName, null, title))))));

/* harmony default export */ var components_SectionTech = (SectionTech);
// CONCATENATED MODULE: ./src/components/SectionConcepts/styles.ts


const Box = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Box",
  componentId: "weddeg-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["color:", ";background-color:", ";padding:", ";border-radius:", ";", ""], theme.colors.black, theme.colors.white, theme.spacings.small, theme.border.radius, external_styled_media_query_default.a.greaterThan('medium')`
      padding: ${theme.spacings.large};
    `));
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__List",
  componentId: "weddeg-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["padding:", " 0 0;", " ", ""], theme.spacings.small, external_styled_media_query_default.a.greaterThan('medium')`
      padding: ${theme.spacings.small} ${theme.spacings.xsmall} 0;
      column-count: 2;
    `, external_styled_media_query_default.a.greaterThan('large')`
      column-count: 3;
    `));
const Item = external_styled_components_default.a.li.withConfig({
  displayName: "styles__Item",
  componentId: "weddeg-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["position:relative;list-style:none;padding-left:", ";&::after{content:' ';position:absolute;width:0.9rem;height:0.9rem;top:0.9rem;left:0rem;border-radius:100%;background:", ";}&:not(:last-child){margin-bottom:", ";}"], theme.spacings.small, theme.colors.secondary, theme.spacings.xsmall));
// CONCATENATED MODULE: ./src/components/SectionConcepts/index.tsx
var SectionConcepts_jsx = external_react_default.a.createElement;





const SectionConcepts = ({
  title,
  concepts
}) => /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(Box, null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  lineBottom: true
}, title), /*#__PURE__*/external_react_default.a.createElement(List, null, concepts.map(item => /*#__PURE__*/external_react_default.a.createElement(Item, {
  key: item.title
}, item.title)))));

/* harmony default export */ var components_SectionConcepts = (SectionConcepts);
// CONCATENATED MODULE: ./src/components/CardModule/styles.ts

const Card = external_styled_components_default.a.article.withConfig({
  displayName: "styles__Card",
  componentId: "ywp6om-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["background-color:", ";padding:", ";color:", ";font-size:", ";border-radius:", ";"], theme.colors.white, theme.spacings.medium, theme.colors.texts, theme.font.sizes.xsmall, theme.border.radius));
const TitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TitleWrapper",
  componentId: "ywp6om-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["border-left:6px solid ", ";padding-left:", ";margin-bottom:", ";"], theme.colors.primary, theme.spacings.xsmall, theme.spacings.xsmall));
const styles_Title = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__Title",
  componentId: "ywp6om-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";font-weight:bold;"], theme.font.sizes.medium));
const SubTitle = external_styled_components_default.a.h4.withConfig({
  displayName: "styles__SubTitle",
  componentId: "ywp6om-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";font-weight:normal;color:", ";"], theme.font.sizes.xxsmall, theme.colors.gray));
const styles_Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "ywp6om-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["p + p{margin-top:", ";}"], theme.spacings.small));
// CONCATENATED MODULE: ./src/components/CardModule/index.tsx
var CardModule_jsx = external_react_default.a.createElement;



const CardModule = ({
  title,
  subTitle,
  children
}) => /*#__PURE__*/external_react_default.a.createElement(Card, null, /*#__PURE__*/external_react_default.a.createElement(TitleWrapper, null, /*#__PURE__*/external_react_default.a.createElement(styles_Title, null, title), /*#__PURE__*/external_react_default.a.createElement(SubTitle, null, subTitle)), /*#__PURE__*/external_react_default.a.createElement(styles_Content, null, children));

/* harmony default export */ var components_CardModule = (CardModule);
// CONCATENATED MODULE: ./src/components/SectionModules/styles.ts


const SectionModules_styles_Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1ns9kh6-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:grid;grid-template-columns:1fr;grid-gap:", ";margin-top:", ";", ""], theme.grid.gutter, theme.spacings.medium, external_styled_media_query_default.a.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
    `));
// CONCATENATED MODULE: ./src/components/SectionModules/index.tsx
var SectionModules_jsx = external_react_default.a.createElement;






const SectionModules = ({
  title,
  modules
}) => /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  reverseColor: true
}, title), /*#__PURE__*/external_react_default.a.createElement(SectionModules_styles_Content, null, modules.map(({
  title,
  subtitle,
  description
}, index) => /*#__PURE__*/external_react_default.a.createElement(components_CardModule, {
  key: index,
  title: title,
  subTitle: subtitle
}, /*#__PURE__*/external_react_default.a.createElement("div", {
  dangerouslySetInnerHTML: {
    __html: description
  }
})))));

/* harmony default export */ var components_SectionModules = (SectionModules);
// CONCATENATED MODULE: ./src/components/SectionAgenda/styles.ts


const styles_Text = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1nv4w9e-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:grid;grid-template-columns:1fr;grid-row-gap:", ";margin-top:", ";font-size:", ";", " strong{border-bottom:2px solid ", ";}"], theme.spacings.small, theme.spacings.medium, theme.font.sizes.small, external_styled_media_query_default.a.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      grid-gap: ${theme.spacings.medium};
    `, theme.colors.primary));
// CONCATENATED MODULE: ./src/components/SectionAgenda/index.tsx
var SectionAgenda_jsx = external_react_default.a.createElement;





const SectionAgenda = ({
  title,
  description
}) => /*#__PURE__*/external_react_default.a.createElement(components_Container, {
  id: "agenda"
}, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  reverseColor: true
}, title), /*#__PURE__*/external_react_default.a.createElement(styles_Text, {
  dangerouslySetInnerHTML: {
    __html: description
  }
}));

/* harmony default export */ var components_SectionAgenda = (SectionAgenda);
// CONCATENATED MODULE: ./src/components/PricingBox/styles.ts


const styles_Box = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Box",
  componentId: "wmx4wi-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["position:relative;display:flex;flex-direction:column;border-radius:0;background:", ";padding:", " calc(", " / 2);margin:0 auto ", ";", ""], theme.colors.white, theme.spacings.medium, theme.spacings.medium, theme.spacings.large, external_styled_media_query_default.a.greaterThan('medium')`
      max-width: 72rem;
      padding: ${theme.spacings.large} ${theme.spacings.xxlarge};
      margin: 0 auto ${theme.spacings.large};
      border-radius: ${theme.border.radius};
    `));
const Prices = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Prices",
  componentId: "wmx4wi-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:", ";", ""], theme.spacings.medium, external_styled_media_query_default.a.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
    `));
const FullPrice = external_styled_components_default.a.p.withConfig({
  displayName: "styles__FullPrice",
  componentId: "wmx4wi-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["color:", ";font-size:", ";font-weight:400;span{text-decoration:line-through;}"], theme.colors.gray, theme.font.sizes.large));
const DiscountPrice = external_styled_components_default.a.p.withConfig({
  displayName: "styles__DiscountPrice",
  componentId: "wmx4wi-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["color:", ";font-size:", ";font-weight:", ";span{color:", ";font-size:", ";}"], theme.colors.primary, theme.font.sizes.xxlarge, theme.font.bold, theme.colors.texts, theme.font.sizes.medium));
const BenefitsList = external_styled_components_default.a.div.withConfig({
  displayName: "styles__BenefitsList",
  componentId: "wmx4wi-4"
})(["ul{", "}li{", "}"], ({
  theme
}) => Object(external_styled_components_["css"])(["list-style:none;margin-bottom:", ";"], theme.spacings.large), ({
  theme
}) => Object(external_styled_components_["css"])(["color:", ";font-size:", ";position:relative;padding-left:", ";&::after{content:' ';position:absolute;width:0.9rem;height:0.9rem;top:0.9rem;left:0rem;border-radius:100%;background:", ";}&:not(:last-child){margin-bottom:", ";}"], theme.colors.black, theme.font.sizes.small, theme.spacings.small, theme.colors.secondary, theme.spacings.xsmall));
const ButtonFullPrice = external_styled_components_default.a.span.withConfig({
  displayName: "styles__ButtonFullPrice",
  componentId: "wmx4wi-5"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["text-decoration:line-through;opacity:0.9;margin-right:", ";font-size:", ";"], theme.spacings.xxsmall, theme.font.sizes.xsmall));
const ButtonDiscountPrice = external_styled_components_default.a.span.withConfig({
  displayName: "styles__ButtonDiscountPrice",
  componentId: "wmx4wi-6"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";"], theme.font.sizes.medium));
// CONCATENATED MODULE: ./src/components/PricingBox/index.tsx
var PricingBox_jsx = external_react_default.a.createElement;





const PricingBox_onClick = () => gaEvent({
  action: 'click',
  category: 'buy',
  label: 'pricing box button'
});

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstallment,
  benefis,
  button
}) => /*#__PURE__*/external_react_default.a.createElement(styles_Box, null, /*#__PURE__*/external_react_default.a.createElement(Prices, null, /*#__PURE__*/external_react_default.a.createElement(FullPrice, null, "De ", /*#__PURE__*/external_react_default.a.createElement("span", null, "R$", totalPrice), " por apenas"), /*#__PURE__*/external_react_default.a.createElement(DiscountPrice, null, /*#__PURE__*/external_react_default.a.createElement("span", null, numberInstallments, "x de"), " R$", priceInstallment)), /*#__PURE__*/external_react_default.a.createElement(BenefitsList, {
  dangerouslySetInnerHTML: {
    __html: benefis
  }
}), /*#__PURE__*/external_react_default.a.createElement(components_Button, {
  href: button.url,
  onClick: PricingBox_onClick,
  withPrice: true
}, /*#__PURE__*/external_react_default.a.createElement("p", null, button.label), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(ButtonFullPrice, null, "R$", totalPrice), /*#__PURE__*/external_react_default.a.createElement(ButtonDiscountPrice, null, "R$", numberInstallments * priceInstallment))));

/* harmony default export */ var components_PricingBox = (PricingBox);
// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__("SfhN");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/components/ProfileCard/styles.ts

const styles_Card = external_styled_components_default.a.article.withConfig({
  displayName: "styles__Card",
  componentId: "sc-11mo7td-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["border-radius:", ";background-color:", ";padding:", ";text-align:center;"], theme.border.radius, theme.colors.white, theme.spacings.medium));
const ProfileCard_styles_Image = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-11mo7td-1"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["width:12.5rem;height:12.5rem;border-radius:100%;margin:auto;margin-bottom:", ";"], theme.spacings.xsmall));
const Name = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Name",
  componentId: "sc-11mo7td-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";font-weight:", ";color:", ";"], theme.font.sizes.medium, theme.font.bold, theme.colors.black));
const Role = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Role",
  componentId: "sc-11mo7td-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";color:", ";margin-bottom:", ";"], theme.font.sizes.small, theme.colors.primary, theme.spacings.xxsmall));
const SocialLinks = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__SocialLinks",
  componentId: "sc-11mo7td-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:flex;justify-content:center;margin-bottom:", ";"], theme.spacings.xsmall));
const Link = external_styled_components_default.a.li.withConfig({
  displayName: "styles__Link",
  componentId: "sc-11mo7td-5"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:block;> a{padding:", ";color:", ";}svg{width:2rem;height:2rem;}"], theme.spacings.xxsmall, theme.colors.secondary));
const styles_Description = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Description",
  componentId: "sc-11mo7td-6"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";color:", ";"], theme.font.sizes.xxsmall, theme.colors.texts));
// CONCATENATED MODULE: ./src/components/ProfileCard/index.tsx
var ProfileCard_jsx = external_react_default.a.createElement;





const icons = {
  Twiter: /*#__PURE__*/external_react_default.a.createElement(fa_["FaTwitter"], null),
  Github: /*#__PURE__*/external_react_default.a.createElement(gr_["GrGithub"], null),
  Dribbble: /*#__PURE__*/external_react_default.a.createElement(fa_["FaDribbble"], null)
};

const ProfileCard = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => /*#__PURE__*/external_react_default.a.createElement(styles_Card, {
  key: name
}, /*#__PURE__*/external_react_default.a.createElement(ProfileCard_styles_Image, {
  src: getImageUrl(photo.url),
  alt: getImageUrl(photo.alternativeText)
}), /*#__PURE__*/external_react_default.a.createElement(Name, null, name), /*#__PURE__*/external_react_default.a.createElement(Role, null, role), /*#__PURE__*/external_react_default.a.createElement(SocialLinks, null, socialLinks.map(item => /*#__PURE__*/external_react_default.a.createElement(Link, {
  key: item.title
}, /*#__PURE__*/external_react_default.a.createElement("a", {
  href: item.url,
  title: item.title
}, icons[item.title])))), /*#__PURE__*/external_react_default.a.createElement(styles_Description, null, description));

/* harmony default export */ var components_ProfileCard = (ProfileCard);
// CONCATENATED MODULE: ./src/components/SectionAboutUs/styles.ts


const SectionAboutUs_styles_Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "a1p7vb-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:grid;gap:", ";grid-template-columns:1fr;margin-top:", ";", ""], theme.spacings.small, theme.spacings.medium, external_styled_media_query_default.a.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `));
// CONCATENATED MODULE: ./src/components/SectionAboutUs/index.tsx
var SectionAboutUs_jsx = external_react_default.a.createElement;






const SectionAboutUs = ({
  title,
  authors
}) => /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  reverseColor: true
}, title), /*#__PURE__*/external_react_default.a.createElement(SectionAboutUs_styles_Content, null, authors.map(profile => /*#__PURE__*/external_react_default.a.createElement(components_ProfileCard, {
  key: profile.name,
  name: profile.name,
  role: profile.role,
  photo: profile.photo,
  socialLinks: profile.socialLinks,
  description: profile.description
}))));

/* harmony default export */ var components_SectionAboutUs = (SectionAboutUs);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "resize-observer-polyfill"
var external_resize_observer_polyfill_ = __webpack_require__("ocwR");
var external_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_resize_observer_polyfill_);

// CONCATENATED MODULE: ./src/components/ReviewCard/styles.ts

const ReviewCard_styles_Card = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Card",
  componentId: "sc-1sbv9kl-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["color:", ";border-radius:", ";background-color:", ";padding:", ";margin:", " 1.2rem;min-height:26rem;"], theme.colors.texts, theme.border.radius, theme.colors.white, theme.spacings.medium, theme.spacings.medium));
const User = external_styled_components_default.a.div.withConfig({
  displayName: "styles__User",
  componentId: "sc-1sbv9kl-1"
})(["align-items:center;display:flex;"]);
const ReviewCard_styles_Image = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-1sbv9kl-2"
})(["width:5rem;height:5rem;border-radius:100%;"]);
const styles_Name = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Name",
  componentId: "sc-1sbv9kl-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["font-size:", ";font-weight:", ";margin-left:", ";"], theme.font.sizes.small, theme.font.bold, theme.spacings.xsmall));
const ReviewCard_styles_Text = external_styled_components_default.a.blockquote.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1sbv9kl-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:grid;justify-items:end;margin-top:", ";font-size:", ";line-height:", ";position:relative;input{opacity:0;position:absolute;pointer-events:none;&:checked + p{-webkit-line-clamp:unset;}}input:not(:checked) ~ p:not(.truncated) ~ label{display:none;}label{cursor:pointer;color:", ";float:right;margin-top:", ";}&::before{content:'\u201C';font-size:", ";color:", ";position:absolute;top:", ";left:0;}> p{padding-top:", ";display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}"], theme.spacings.xsmall, theme.font.sizes.xsmall, theme.font.sizes.medium, theme.colors.primary, theme.spacings.xxsmall, theme.font.sizes.xxlarge, theme.colors.secondary, theme.spacings.xsmall, theme.spacings.small));
// CONCATENATED MODULE: ./src/components/ReviewCard/index.tsx
var ReviewCard_jsx = external_react_default.a.createElement;





const ReviewCard = ({
  id,
  name,
  image,
  description
}) => {
  Object(external_react_["useEffect"])(() => {
    const texts = document.querySelectorAll('p.description');
    const observer = new external_resize_observer_polyfill_default.a(entries => {
      for (const entry of entries) {
        entry.target.classList[entry.target.scrollHeight > entry.contentRect.height + 25 ? 'add' : 'remove']('truncated');
      }
    });
    texts.forEach(text => observer.observe(text));
  });
  return /*#__PURE__*/external_react_default.a.createElement(ReviewCard_styles_Card, null, /*#__PURE__*/external_react_default.a.createElement(User, null, /*#__PURE__*/external_react_default.a.createElement(ReviewCard_styles_Image, {
    src: getImageUrl(image),
    alt: name,
    loading: "lazy"
  }), /*#__PURE__*/external_react_default.a.createElement(styles_Name, null, name)), /*#__PURE__*/external_react_default.a.createElement(ReviewCard_styles_Text, null, /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "checkbox",
    id: `review-${id}`
  }), /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "description"
  }, description), /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "label-more",
    htmlFor: `review-${id}`
  }, "Ver tudo")));
};

/* harmony default export */ var components_ReviewCard = (ReviewCard);
// CONCATENATED MODULE: ./src/components/SectionReviews/styles.ts

const SectionReviews_styles_Content = external_styled_components_default.a.section.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1bqmvfl-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])([".slick-list,.slick-slider,.slick-track{position:relative;display:block;}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden;}.slick-slider{box-sizing:border-box;user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.slick-list{overflow:hidden;margin:0;padding:0;}.slick-list:focus{outline:0;}.slick-list.dragging{cursor:pointer;cursor:hand;}.slick-slider .slick-list,.slick-slider .slick-track{transform:translate3d(0,0,0);}.slick-track{top:0;left:0;}.slick-track:after,.slick-track:before{display:table;content:'';}.slick-track:after{clear:both;}.slick-slide{display:none;float:left;height:100%;min-height:1px;}.slick-initialized .slick-slide{display:block;}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent;}.slick-arrow.slick-hidden{display:none;}.slick-list{margin:0 -1.2rem;}.slick-dots{list-style:none;display:flex !important;align-items:center;justify-content:center;margin-top:", ";li{background:white;width:12px;height:12px;border-radius:100%;display:flex;align-items:center;justify-content:center;margin:0 ", ";cursor:pointer;&.slick-active{background:", ";}}button{opacity:0;width:12px;height:12px;cursor:pointer;}}"], theme.spacings.small, theme.spacings.xxsmall, theme.colors.primary));
// CONCATENATED MODULE: ./src/components/SectionReviews/index.tsx
var SectionReviews_jsx = external_react_default.a.createElement;






const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      rows: 2,
      slidesPerRow: 1,
      slidesToScroll: 1
    }
  }]
};

const SectionReviews = ({
  title,
  reviews
}) => /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  reverseColor: true
}, title), /*#__PURE__*/external_react_default.a.createElement(SectionReviews_styles_Content, null, /*#__PURE__*/external_react_default.a.createElement(external_react_slick_default.a, settings, reviews.map(({
  name,
  photo,
  text
}, index) => /*#__PURE__*/external_react_default.a.createElement(components_ReviewCard, {
  key: index,
  name: name,
  image: photo.url,
  description: text,
  id: index
})))));

/* harmony default export */ var components_SectionReviews = (SectionReviews);
// CONCATENATED MODULE: ./src/components/SectionFaq/styles.ts


const SectionFaq_styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "iv6lie-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["background:", ";color:", ";transform:skewY(4deg);", ""], theme.colors.white, theme.colors.texts, external_styled_media_query_default.a.greaterThan('medium')`
      padding-bottom: ${theme.spacings.xxlarge};
    `));
const SectionFaq_styles_Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "iv6lie-1"
})(["transform:skewY(-4deg);"]);
const Questions = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Questions",
  componentId: "iv6lie-2"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["display:grid;grid-template-columns:1fr;grid-row-gap:", ";margin-top:", ";", ""], theme.spacings.medium, theme.spacings.medium, external_styled_media_query_default.a.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      grid-column-gap: ${theme.spacings.medium};
      grid-row-gap: ${theme.spacings.large};
      margin-top: ${theme.spacings.xlarge};
    `));
const Question = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Question",
  componentId: "iv6lie-3"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["a{color:", ";text-decoration:none;border-bottom:1px solid ", ";}"], theme.colors.primary, theme.colors.primary));
const ExtraQuestion = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ExtraQuestion",
  componentId: "iv6lie-4"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["margin-top:", ";a{border-bottom:1px solid ", ";color:", ";text-decoration:none;}", ""], theme.spacings.medium, theme.colors.secondary, theme.colors.secondary, external_styled_media_query_default.a.greaterThan('medium')`
      margin-top: ${theme.spacings.xlarge};
    `));
// CONCATENATED MODULE: ./src/components/SectionFaq/index.tsx
var SectionFaq_jsx = external_react_default.a.createElement;





const SectionFaq = ({
  title,
  questions
}) => /*#__PURE__*/external_react_default.a.createElement(SectionFaq_styles_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(SectionFaq_styles_Content, null, /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, null, title), /*#__PURE__*/external_react_default.a.createElement(Questions, null, questions.map(({
  question,
  answer
}, index) => /*#__PURE__*/external_react_default.a.createElement(Question, {
  key: index
}, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  lineBottom: true
}, question), /*#__PURE__*/external_react_default.a.createElement("div", {
  dangerouslySetInnerHTML: {
    __html: answer
  }
})))), /*#__PURE__*/external_react_default.a.createElement(ExtraQuestion, null, /*#__PURE__*/external_react_default.a.createElement(components_Heading, {
  lineBottom: true
}, "Eu tenho outra d\xFAvida!"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Sem problemas! Voc\xEA pode acessar qualquer uma das", ' ', /*#__PURE__*/external_react_default.a.createElement("a", {
  href: "https://willianjusten.com.br/about",
  target: "_blank",
  rel: "noreferrer"
}, "minhas redes sociais"), ' ', "ou entrar no", ' ', /*#__PURE__*/external_react_default.a.createElement("a", {
  href: "https://willianjusten-cursos.slack.com/join/shared_invite/zt-g20h37hj-GnSb_y7PXCRjS92N9T8LCQ#/",
  target: "_blank",
  rel: "noreferrer"
}, "slack do nosso curso."))))));

/* harmony default export */ var components_SectionFaq = (SectionFaq);
// CONCATENATED MODULE: ./src/components/Footer/styles.ts


const Footer_styles_Wrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "styles__Wrapper",
  componentId: "nk4sfh-0"
})(["", ""], ({
  theme
}) => Object(external_styled_components_["css"])(["background:", ";color:", ";text-align:center;font-size:1.3rem;line-height:", ";position:relative;z-index:2;margin-top:-", ";", " a{color:", ";text-decoration:none;border-bottom:1px solid ", ";}"], theme.colors.white, theme.colors.gray, theme.font.sizes.xlarge, theme.spacings.medium, external_styled_media_query_default.a.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      margin-top: -${theme.spacings.xxlarge};
      padding-bottom: ${theme.spacings.large};
    `, theme.colors.primary, theme.colors.primary));
// CONCATENATED MODULE: ./src/components/Footer/index.tsx
var Footer_jsx = external_react_default.a.createElement;




const Footer = () => /*#__PURE__*/external_react_default.a.createElement(Footer_styles_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(components_Container, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "Desenvolvido por", ' ', /*#__PURE__*/external_react_default.a.createElement("a", {
  href: "https://willianjusten.com.br/"
}, "Willian Justen "), "e", /*#__PURE__*/external_react_default.a.createElement("a", {
  href: "https://guilouro.dev"
}, " Guilherme Louro")), /*#__PURE__*/external_react_default.a.createElement("p", null, "Design por ", /*#__PURE__*/external_react_default.a.createElement("a", {
  href: "https://dribbble.com/vmarcosp"
}, "Marcos Oliveira"))));

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// CONCATENATED MODULE: ./src/components/JsonSchema/index.tsx
var JsonSchema_jsx = external_react_default.a.createElement;



const JsonSchema = () => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_next_seo_["CourseJsonLd"], {
  courseName: "React Avan\xE7ado",
  providerName: "Willian Justen Cursos",
  providerUrl: "https://reactavancado.com.br/",
  description: "Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!"
}), /*#__PURE__*/external_react_default.a.createElement(external_next_seo_["ProductJsonLd"], {
  productName: "Curso React Avan\xE7ado",
  images: ['https://reactavancado.com.br/img/cover.png'],
  description: "Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!",
  brand: "Willian Justen Cursos",
  reviews: [{
    author: {
      type: 'Person',
      name: 'Henrique Albert Schmaiske'
    },
    datePublished: '2020-03-06T12:37:40Z',
    reviewBody: 'O Curso foi incrível! Gostei muito das explicações, bem claras e objetivas! Deixo a sugestão para um próximo Curso: NextJS mostrando fazer um Ecommerce. Compraria sem nem olhar o preço.',
    name: 'Didática perfeita',
    reviewRating: {
      bestRating: '5',
      ratingValue: '5',
      worstRating: '1'
    },
    publisher: {
      type: 'Person',
      name: 'Henrique Albert Schmaiske'
    }
  }],
  aggregateRating: {
    ratingValue: '4.8',
    reviewCount: '27659'
  },
  offers: [{
    price: '289.95',
    priceCurrency: 'BRL',
    priceValidUntil: '2020-07-05',
    url: 'https://reactavancado.com.br/',
    availability: 'https://schema.org/InStock',
    seller: {
      name: 'Willian Justen Cursos'
    }
  }, {
    price: '579.99',
    priceCurrency: 'BRL',
    priceValidUntil: '2021-07-05',
    url: 'https://reactavancado.com.br/',
    availability: 'https://schema.org/InStock',
    seller: {
      name: 'Willian Justen Cursos'
    }
  }],
  mpn: "reactavancado",
  sku: "reactavancado"
}));

/* harmony default export */ var components_JsonSchema = (JsonSchema);
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__("dAJ7");

// CONCATENATED MODULE: ./src/graphql/client.ts

const client = new external_graphql_request_["GraphQLClient"](process.env.GRAPHQL_HOST);
/* harmony default export */ var graphql_client = (client);
// CONCATENATED MODULE: ./src/graphql/queries/getLandingPage.ts
const GET_LANDING_PAGE =
/* GraphQL */
`
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefis
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        photo {
          alternativeText
          url
        }
        name
        role
        socialLinks {
          title
          url
        }
        description
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        photo {
          url
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`;
/* harmony default export */ var getLandingPage = (GET_LANDING_PAGE);
// CONCATENATED MODULE: ./src/pages/index.tsx
var pages_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  pricingBox,
  sectionAboutUs,
  sectionReviews,
  sectionFaq
}) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_SectionHero, {
  logo: logo,
  header: header
}), /*#__PURE__*/external_react_default.a.createElement(components_SectionAboutProject, sectionAboutProject), /*#__PURE__*/external_react_default.a.createElement(components_SectionTech, sectionTech), /*#__PURE__*/external_react_default.a.createElement(components_SectionConcepts, sectionConcepts), /*#__PURE__*/external_react_default.a.createElement(components_SectionModules, sectionModules), /*#__PURE__*/external_react_default.a.createElement(components_SectionAgenda, sectionAgenda), /*#__PURE__*/external_react_default.a.createElement(components_PricingBox, pricingBox), /*#__PURE__*/external_react_default.a.createElement(components_SectionAboutUs, sectionAboutUs), /*#__PURE__*/external_react_default.a.createElement(components_SectionReviews, sectionReviews), /*#__PURE__*/external_react_default.a.createElement(components_SectionFaq, sectionFaq), /*#__PURE__*/external_react_default.a.createElement(components_Footer, null), /*#__PURE__*/external_react_default.a.createElement(components_JsonSchema, null));

const getStaticProps = async () => {
  const {
    landingPage
  } = await graphql_client.request(getLandingPage);
  return {
    props: _objectSpread({}, landingPage)
  };
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "SfhN":
/***/ (function(module, exports) {

module.exports = require("react-icons/gr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dAJ7":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "ocwR":
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "wqYh":
/***/ (function(module, exports) {

module.exports = require("styled-media-query");

/***/ })

/******/ });