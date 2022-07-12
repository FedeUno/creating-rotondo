# T-shirt

## Description

Project developed by the `student Federico Rotondo` during the `React JS` course at `Coderhouse`, commission 31205, year 2022. **`Professor`: Guillermo Jorge Fergnani. `Tutor`: María Pía Achigar.**

The web application consists of an ecommerce where you can filter the products according to categories, and access to see the details of each product. Likewise, the selected items can be added to the shopping cart and after completing a form, the purchase process is completed.

Generated purchase orders are stored in `Firebase`.

You can visit this project in [https://ecommerce-b6267.web.app/](https://ecommerce-b6267.web.app/)


![GIF](/public/theGif.gif "Proyect gif")


## Used technology

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) 

* [React JS](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [Material UI](https://mui.com/)
* [Firebase](https://firebase.google.com/) 
* [Formik](https://formik.org/) 

## Other considerations

### `MaterialUI`
Material UI was chosen as the component library to streamline the application development and styling process, taking advantage of the possibility of extending the components through the use of themes.

### `Firebase`
In Firebase, in addition to the list of products and the generated orders, the categories corresponding to the products were stored. It was also used to make the Deployment.-

### `Formik`
Used for form validation.

### `LocalStorage`
LocalStorage was used to persist the users' cart on their devices in the event that they do not complete the purchase flow to improve the user experience.

### `Control de Stock`
Stock control is implemented to prevent a user from purchasing a larger quantity of a product than is available.


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

