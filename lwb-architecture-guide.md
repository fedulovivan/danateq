## Table of contents

<!-- toc -->

- [This document purpose](#this-document-purpose)
- [External documentation](#external-documentation)
- [General principles](#general-principles)
- [Application layers](#application-layers)
- [Delopment environment](#delopment-environment)
- [Target platforms](#target-platforms)
- [Distribution, deployment and migration](#distribution-deployment-and-migration)
- [3PP libraries usage](#3pp-libraries-usage)
- [Package.json maintenance/extension](#packagejson-maintenanceextension)
- [Code extension rules / maitenance rules / refactoring of code / keeping backward compatibilty](#code-extension-rules--maitenance-rules--refactoring-of-code--keeping-backward-compatibilty)
- [Backend REST API](#backend-rest-api)
- [Websockets](#websockets)
- [Logging](#logging)
- [Error messaging rules (logs and end-user errors)](#error-messaging-rules-logs-and-end-user-errors)
- [Error handling / Throwing exceptions / throw an exeption (or write error to log) for unexpexted case / branch](#error-handling--throwing-exceptions--throw-an-exeption-or-write-error-to-log-for-unexpexted-case--branch)
- [Redundance](#redundance)
- [Scaling](#scaling)
- [Database / transactions](#database--transactions)
- [Configuration files / options](#configuration-files--options)
- [Version Control](#version-control)
- [Documets update](#documets-update)
- [Local domain / local https](#local-domain--local-https)
- [Open arch questions reconcilation process](#open-arch-questions-reconcilation-process)
- [Security aspects / OS Hardening](#security-aspects--os-hardening)
- [Permissions handling](#permissions-handling)
- [Rules violation rules](#rules-violation-rules)
- [Visual/UI/UX](#visualuiux)
  * [Pessimistic updates / Progress tracking](#pessimistic-updates--progress-tracking)
  * [UI/UX rules](#uiux-rules)
  * [Markup/CSS](#markupcss)
- [Howto](#howto)
  * [Create new page](#create-new-page)
  * [Create new menu item](#create-new-menu-item)
  * [Create new react compoment](#create-new-react-compoment)
  * [Setup dev environment](#setup-dev-environment)
- [Technologies fits](#technologies-fits)
  * [JSP place](#jsp-place)
  * [JSX](#jsx)
  * [Java place](#java-place)
  * [Node.js](#nodejs)
  * [NPM](#npm)
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
  * [Const vs let vs var](#const-vs-let-vs-var)
  * [Avoid cast to number using + operator](#avoid-cast-to-number-using--operator)
  * [No synchronous ajax requests](#no-synchronous-ajax-requests)
  * [Explicit type cast, strict equalty operator (identity operator), do cast before switch block of indexOf or _.contains()](#explicit-type-cast-strict-equalty-operator-identity-operator-do-cast-before-switch-block-of-indexof-or-_contains)

<!-- tocstop -->

## This document purpose
Purpose of this document is defining set of formal rules which help to align approach of Link Workbench development across GUI team members. Improving product quality. Making new members integration more seamless and effective. Reducing maintenance and deployment consts and efforts. Creating single source reference, which help to solve controversial issues.

## External documentation
Following list of documents are highly recommended for learning:
- [DANATEQ CPP Designer Guide](https://confluence.danateq.net/download/attachments/3735662/DANATEQ%20CPP%20Designer%20Guide.docx?api=v2)
- [React](https://facebook.github.io/react/docs/getting-started.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Material design](https://material.google.com/)

## General principles
- Use airbnb coding style guide as primary reference. Mind our own extensions for it.
- Mind server resources/capability
- Comments (give implementation details when needed, reference to jira items for fixes)
- Following OOP principles/ Design patterns / Think of incapsulation / mind private members
- Constants usage
- Static fiels
- JsDoc usage / inline documentation
- Developer mode / production mode
- Performace / Memory / CPU / Profiling
- Design tests
- Unit tests
- Code reusability / Modularity / Keep code DRY
- Callbacks / Promises usage
- Think of types even in Js
- Do not reinvent a wheel, but use reasanble approach when adding new dependency, use utils.js

## Application layers
Frontend-backend interaction
tbd

## Delopment environment
tbd

## Target platforms
| Language/Platform | Version |
| --- | --- |
| Java | java 8 (1.8), Oracle JRE/JDK implementation |
| Node.js | 0.12.7 |
| Javascript | ES6(ES2015) with Babel, ES5 without Babel |
| Target web browser | latest version of Firefox (Chrome is supported unofficially) |
| Minial browser screen width | 1200px |
| Production host OS | Linux RHEL 7.2 |
| Development host OS | Linux(preferable)/Windows |

## Distribution, deployment and migration
Software distribution / Release Deployment procedure / Release migration procedure / Offline deployment aspects (both target host and end users have no www access).

## 3PP libraries usage
3PP libraries usage/upgrade

## Package.json maintenance/extension
tbd

## Code extension rules / maitenance rules / refactoring of code / keeping backward compatibilty
tbd

## Backend REST API
tbd

## Websockets
tbd

## Logging
tbd

## Error messaging rules (logs and end-user errors)
tbd

## Error handling / Throwing exceptions / throw an exeption (or write error to log) for unexpexted case / branch
tbd

## Redundance
tbd

## Scaling
tbd

## Database / transactions
tbd

## Configuration files / options
tbd

## Version Control
VCS / SVN / Commit rules, message format, version files

## Documets update
(imternal: TODO.md, README.md, DEPENDENCIES.ms, product documents: LWB manual, Configuration changes history, LINK installation manual)

## Local domain / local https
tbd

## Open arch questions reconcilation process
tbd

## Security aspects / OS Hardening
tbd

## Permissions handling
tbd

## Rules violation rules
tbd

## Visual/UI/UX
### Pessimistic updates / Progress tracking
tbd

### UI/UX rules
tbd

### Markup/CSS
tbd

## Howto
### Create new page
tbd

### Create new menu item
tbd

### Create new react compoment
tbd
presentational/container

### Setup dev environment
tbd

## Technologies fits
### JSP place
tbd 

### JSX
tbd 

### Java place
tbd 

### Node.js
tbd 

### NPM
tbd 

### Webpack / Babel
tbd 

### ES6 usage
tbd 

### SOAP usage / maitenance
tbd 

### jQuery place
tbd 

### Backbone place
tbd 

### React usage / Component structure
tbd 

### Underscore/Lodash
tbd 

### Jade (Pug)
tbd 

### SSR
tbd

## Gereral js coding rules
### Const vs let vs var
### Avoid cast to number using + operator
### No synchronous ajax requests
### Explicit type cast, strict equalty operator (identity operator), do cast before switch block of indexOf or _.contains()