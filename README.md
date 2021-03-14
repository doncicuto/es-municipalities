# ES-Municipalities

This package offers Spain's municipalities names and codes as shown in INE (Spain's National Statistics Institute).

According to Wikipedia:
>A municipality is usually a single administrative division having corporate status and powers of self-government or jurisdiction as granted by national and regional laws to which it is subordinate.

Also Wikipedia has an specific page for [municipalities of Spain](https://en.wikipedia.org/wiki/Municipalities_of_Spain).

XLSX Files provided by INE are updated the first day of every year and can be found at [https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177031&menu=ultiDatos&idp=1254734710990](https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177031&menu=ultiDatos&idp=1254734710990).

Every change after the first day of the year is logged in the same page and this package will update its data accordingly. Information about new changes will be shown in this README file.

This package contains the data extracted from the information contained in an [XLSX file provided by INE](https://www.ine.es/daco/daco42/codmun/diccionario21.xlsx).

This package offers two files:

- An index.js file that contains an array with municipalities,
- A JSON file that you can read and parse to be offered using a REST API or to insert records into a database.

## Install

```bash
yarn add @doncicuto/es-municipalities
```

or

```bash
npm install @doncicuto/es-municipalities --save
```

## Usage

The default export is an array of objects with the following structure:

| Property   | Type     | Description                     | Example           |
| ---------- | -------- | ------------------------------- | ----------------- |
| `commCode` | `string` | INE's Autonomous community code | `07`              |
| `provCode` | `string` | INE's province code             | `47`              |
| `code`     | `string` | INE's municipality code         | `186`             |
| `dc`       | `string` | Control digit                   | `8`               |
| `name`     | `string` | province name                   | `Valladolid`      |

You can use [@doncicuto/es-provinces](https://www.npmjs.com/package/@doncicuto/es-provinces) and/or [@doncicuto/es-autonomous-communities](https://www.npmjs.com/package/@doncicuto/es-autonomous-communities) if you want to use the province and autonomous community codes to get the province and community names.

> **_WARNING_** Be warned that this array contains 8131 municipalities so it may be heavy for your usage case. You may prefer to use the JSON file called **'municipalitiesWithProvinces.json'** contained in the lib folder.

Example (Browser):

```ts
import municipalities from "@doncicuto/es-municipalities";

const names = municipalities.map((p) => p.name);
console.log(names);

const filtered = municipalities.filter((p) => p.commCode === "07");
console.log(filtered);
```

Example (NodeJS):

```js
const municipalities = require("@doncicuto/es-municipalities").default;

const names = municipalities.map((p) => p.name);
console.log(names);

const filtered = municipalities.filter((p) => p.commCode === "07");
console.log(filtered);
```
