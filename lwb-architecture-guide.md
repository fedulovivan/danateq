

<!-- toc -->

- [This document purpose](#this-document-purpose)
- [External documents must have to learn (Material design, React, Airbnb Code style, CPP designer guide)](#external-documents-must-have-to-learn-material-design-react-airbnb-code-style-cpp-designer-guide)
- [Application layers](#application-layers)
- [Delopment environment](#delopment-environment)
- [Target java / node.js / js versions / Target browser](#target-java--nodejs--js-versions--target-browser)
- [Release Deployment procedure / Release migration procedure / Target OS for application deployment / offline deployment (no www access)](#release-deployment-procedure--release-migration-procedure--target-os-for-application-deployment--offline-deployment-no-www-access)
- [3PP libraries usage / 3PP upgrades](#3pp-libraries-usage--3pp-upgrades)
- [Package.json maintenance/extension](#packagejson-maintenanceextension)
- [Code extension rules / maitenance rules / refactoring of code / backward compatibilty](#code-extension-rules--maitenance-rules--refactoring-of-code--backward-compatibilty)
- [Frontend-backend interaction](#frontend-backend-interaction)
- [Backend REST API](#backend-rest-api)
- [Websockets](#websockets)
- [Logging](#logging)
- [Error messaging rules (logs and end-user errors)](#error-messaging-rules-logs-and-end-user-errors)
- [Error handling / Throwing exceptions / throw an exeption (or write error to log) for unexpexted case / branch](#error-handling--throwing-exceptions--throw-an-exeption-or-write-error-to-log-for-unexpexted-case--branch)
- [Redundance](#redundance)
- [Scaling](#scaling)
- [Database / transactions](#database--transactions)
- [Configuration files / options](#configuration-files--options)
- [VCS / SVN / Commit rules, message format](#vcs--svn--commit-rules-message-format)
- [Documets update (imternal: TODO.md, README.md, DEPENDENCIES.ms, product documents: LWB manual, Configuration changes history, LINK installation manual)](#documets-update-imternal-todomd-readmemd-dependenciesms-product-documents-lwb-manual-configuration-changes-history-link-installation-manual)
- [Local domain / local https](#local-domain--local-https)
- [Open arch questions reconcilation process](#open-arch-questions-reconcilation-process)
- [Security aspects / OS Hardening](#security-aspects--os-hardening)
- [Permissions handling](#permissions-handling)
- [Rules violation rules](#rules-violation-rules)
- [Fin / Summary](#fin--summary)
- [Visual/UI/UX](#visualuiux)
  * [Pessimistic updates / Progress tracking](#pessimistic-updates--progress-tracking)
  * [UI/UX rules](#uiux-rules)
  * [Markup/CSS](#markupcss)
- [Howto](#howto)
  * [Create new page](#create-new-page)
  * [Create new menu item](#create-new-menu-item)
  * [Create new react compoment](#create-new-react-compoment)
  * [Setup dev environment](#setup-dev-environment)
- [General coding principles](#general-coding-principles)
  * [Code style - mind airbnb and our own extensions](#code-style---mind-airbnb-and-our-own-extensions)
  * [Mind server resources/capability](#mind-server-resourcescapability)
  * [Comments (give implementation details when needed, reference to jira items for fixes)](#comments-give-implementation-details-when-needed-reference-to-jira-items-for-fixes)
  * [Following OOP principles/ Design patterns / Think of incapsulation / mind private members](#following-oop-principles-design-patterns--think-of-incapsulation--mind-private-members)
  * [Constants usage](#constants-usage)
  * [Static fiels](#static-fiels)
  * [JsDoc usage / inline documentation](#jsdoc-usage--inline-documentation)
  * [Developer mode / production mode](#developer-mode--production-mode)
  * [Performace / Memory / CPU / Profiling](#performace--memory--cpu--profiling)
  * [Design tests](#design-tests)
  * [Unit tests](#unit-tests)
  * [Code reusability / Modularity / Keep code DRY](#code-reusability--modularity--keep-code-dry)
  * [Callbacks / Promises usage](#callbacks--promises-usage)
  * [Think of types even in Js](#think-of-types-even-in-js)
  * [Do not reinvent a wheel, but use reasanble approach when adding new dependency, use utils.js](#do-not-reinvent-a-wheel-but-use-reasanble-approach-when-adding-new-dependency-use-utilsjs)
- [Technologies](#technologies)
  * [JSP place](#jsp-place)
  * [JSX](#jsx)
  * [Java place](#java-place)
  * [Node.js](#nodejs)
  * [Webpack / Babel](#webpack--babel)
  * [ES6 usage](#es6-usage)
  * [SOAP usage / maitenance](#soap-usage--maitenance)
  * [jQuery place](#jquery-place)
  * [Backbone place](#backbone-place)
  * [React usage / Component structure](#react-usage--component-structure)
  * [Underscore/Lodash](#underscorelodash)
  * [Jade (Pug)](#jade-pug)
  * [SSR](#ssr)
- [Gereral js coding rules](#gereral-js-coding-rules)
- [Const vs let vs var](#const-vs-let-vs-var)
  * [Avoid cast to number using + operator](#avoid-cast-to-number-using--operator)
  * [No synchronous ajax requests](#no-synchronous-ajax-requests)
  * [Explicit type cast, strict equalty operator (identity operator), do cast before switch block of indexOf or _.contains()](#explicit-type-cast-strict-equalty-operator-identity-operator-do-cast-before-switch-block-of-indexof-or-_contains)

<!-- tocstop -->

## This document purpose
## External documents must have to learn (Material design, React, Airbnb Code style, CPP designer guide)
## Application layers
## Delopment environment
## Target java / node.js / js versions / Target browser
## Release Deployment procedure / Release migration procedure / Target OS for application deployment / offline deployment (no www access)
## 3PP libraries usage / 3PP upgrades
## Package.json maintenance/extension
## Code extension rules / maitenance rules / refactoring of code / backward compatibilty
## Frontend-backend interaction
## Backend REST API
## Websockets
## Logging
## Error messaging rules (logs and end-user errors)
## Error handling / Throwing exceptions / throw an exeption (or write error to log) for unexpexted case / branch
## Redundance
## Scaling
## Database / transactions
## Configuration files / options
## VCS / SVN / Commit rules, message format
## Documets update (imternal: TODO.md, README.md, DEPENDENCIES.ms, product documents: LWB manual, Configuration changes history, LINK installation manual)
## Local domain / local https
## Open arch questions reconcilation process
## Security aspects / OS Hardening
## Permissions handling
## Rules violation rules
## Fin / Summary

## Visual/UI/UX
### Pessimistic updates / Progress tracking
### UI/UX rules
### Markup/CSS

## Howto
### Create new page
### Create new menu item
### Create new react compoment
### Setup dev environment

## General coding principles
### Code style - mind airbnb and our own extensions
### Mind server resources/capability
### Comments (give implementation details when needed, reference to jira items for fixes)
### Following OOP principles/ Design patterns / Think of incapsulation / mind private members
### Constants usage
### Static fiels
### JsDoc usage / inline documentation
### Developer mode / production mode
### Performace / Memory / CPU / Profiling
### Design tests
### Unit tests
### Code reusability / Modularity / Keep code DRY
### Callbacks / Promises usage
### Think of types even in Js
### Do not reinvent a wheel, but use reasanble approach when adding new dependency, use utils.js

## Technologies
### JSP place
### JSX
### Java place
### Node.js
### Webpack / Babel
### ES6 usage
### SOAP usage / maitenance
### jQuery place
### Backbone place
### React usage / Component structure
### Underscore/Lodash
### Jade (Pug)
### SSR

## Gereral js coding rules
## Const vs let vs var
### Avoid cast to number using + operator
### No synchronous ajax requests
### Explicit type cast, strict equalty operator (identity operator), do cast before switch block of indexOf or _.contains()