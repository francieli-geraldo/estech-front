# Estech Front

Estech Front is the **frontend application** for the Estech platform, tailored for weight-loss and aesthetic clinics. It provides an intuitive user interface for managing patients, tracking progress, and overseeing contracts and programs. This application consumes the RESTful API provided by the [Estech Backend](https://github.com/francieli-geraldo/estech-back).

## 🖥️ Features

- **Dashboard Overview**: Visual representation of key metrics such as weight loss progress, contract statuses, and group performance.
- **Patient Management**: Detailed views for individual patient records, including personal information, assigned programs, and progress charts.
- **Contract Oversight**: Tools to monitor contract details, statuses, and adherence.
- **Program Configuration**: Ability to manage and assign various treatment programs to patients.
- **Group Structuring**: Organize patients into groups for comparative analysis and reporting.
- **Reporting Tools**: Generate and export reports in PDF or image formats for documentation and review.

## 🚀 Technologies Used

- Angular 9.1.9
- TypeScript
- RxJS
- Angular Material
- SCSS

## 📋 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or above)
- [Angular CLI](https://angular.io/cli) (version 9.1.9 or compatible)
- [Git](https://git-scm.com/)

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/francieli-geraldo/estech-front.git
   cd estech-front
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   - Navigate to the `src/environments/` directory.
   - Open the `environment.ts` file.
   - Update the `apiUrl` to point to your backend server:

     ```typescript
     export const environment = {
       production: false,
       apiUrl: 'http://localhost:8080/api' // Replace with your backend URL
     };
     ```

   - For production builds, ensure `environment.prod.ts` is also configured accordingly.

## ▶️ Running the Application

To start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you make changes to the source files.

## 🛠️ Building for Production

To build the project for production:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

To execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```
