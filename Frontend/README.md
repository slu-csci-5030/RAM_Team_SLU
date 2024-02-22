# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Addressed Issues 
## Home page _ Login Popup (Issue number #26)

For our project requirement we needed to create a homepage with login and sign up options. 
On 11/2/24 we built some essential components 
### 1. For testing frame we are using [JEST](https://jestjs.io/), [REACT Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with [React Scripts Module](https://www.npmjs.com/package/react-scripts). 
2. For unit testing we decided to test the functionality of the login button. Upon clicking on login, *A window should pop up allows them to login to their account*

## How to run tests :
1. Clone the repository
2. We have written the unit test for frontend so navigate to Frontend folder of the project and run the following command :
### npm install (to install the dependencies of the project)
3. Now to perform the unit testing, run the following command :
Installations:
### npm install --save @testing-library/react @testing-library/jest-dom
### npm i react-scripts
To run the unit tests:
### npm run test
4. You can find the execution status of unit tests in the terminal.
