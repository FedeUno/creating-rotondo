# T-shirt

## Descripción

Proyecto desarrollado por el alumno Federico Rotondo durante el curso de `React JS` en `Coderhouse`, comisión 31205, año 2022. ![Profesor:] Guillermo Jorge Fergnani. ![Tutora:] María Pía Achigar.

La aplicación web consiste en un ecommerce donde se puede filtrar los productos de acuerdo a categorías, y acceder a ver el detalle de cada producto. Asimismo los elementos seleccionados pueden ser agregados al carrito de compras y luego de completar un formulario se finaliza el proceso de compra.

Las órdenes de compra generadas se almacenan en `Firebase`.

Podrás visitar este proyecto en  ...

![GIF](/public/theGif.gif "Gif del proyecto")


## Tecnologías utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) 

* [React JS](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [Material UI](https://mui.com/)
* [Firebase](https://firebase.google.com/) 

## Otras consideraciones

### MaterialUI
Se escogió Material UI como librería de componentes para agilizar el proceso de desarrollo y estilado de la aplicación, aprovechando la posibilidad de extender los componentes mediante el uso de themes.

### Firebase
En Firebase se almacenaron, además del listado de productos y las órdenes generadas, las categorías correspondientes a los productos. Además se utilizó para hacer the Deployement.-

### LocalStorage
Se utilizó LocalStorage para persistir el carrito de los usuarios en sus dispositivos en el caso de que no finalicen el flujo de compra para mejorar la experiencia de uso.

### Control de Stock
Se implementó control de stock en dos puntos del flujo de compra para evitar que un usuario pueda adquirir una cantidad mayor de un producto de la que se encuentre disponible:




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

