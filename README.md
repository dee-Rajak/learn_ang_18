# Pre-requisites

- Install `NodeJS`
- Or you may also install `nvm` and then manage `Node` versions.
- Install Angular CLI : `npm install -g @angular/cli`
- Check the Angular Installation using `ng v`

Links:

- [Node.js — Download Node.js® (nodejs.org)](https://nodejs.org/en/download/package-manager)
- [coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go. (github.com)](https://github.com/coreybutler/nvm-windows)
- [Home • Angular](https://angular.dev/)
- [What is Angular? • Angular](https://angular.dev/overview)
- [Playground • Angular](https://angular.dev/playground)

## Setting Up Environment:

- Create Project - `ng new <project_name>`
- Run Project:
  - `ng serve`
  - `ng serve --o`
  - `ng serve --port 4204`

## Project Files & Structure

1. `.angular`: This hidden folder contains cache and temporary files used by the Angular CLI.
2. `.vscode`: Contains VS Code-specific settings for your project.
3. `node_modules`: Contains all the npm packages and dependencies for your project.
4. `public`: May contain static assets that are copied to the build output directory.
5. `src`: This is where your application's source code resides. It's the most important folder for development.
6. `.editorconfig`: Defines coding style rules for your project.
7. `.gitignore`: Specifies which files and folders should be ignored by Git.
8. `angular.json`: The main configuration file for your Angular project. It defines build and development options.
9. `package-lock.json`: Locks the versions of installed npm packages.
10. `package.json`: Lists your project dependencies and defines scripts for building, testing, and running your app.
11. `README.md`: A markdown file containing information about your project.
12. `tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json`: TypeScript configuration files for your project, application, and tests respectively.

The most important folder for your day-to-day development will be the `src` folder. Typically, it contains the following files and directories:

1. `app` folder:
   - This is the main folder where you'll spend most of your development time.
   - Contains components, services, modules, and other Angular-specific files.
   - Usually has an `app.component.ts` (the root component), `app.component.html`, `app.component.css`, and `app.module.ts`.
2. `assets` folder:
   - Stores static assets like images, fonts, or JSON files.
3. `environments` folder:
   - Contains environment-specific configuration files (e.g., `environment.ts` and `environment.prod.ts`).
   - Useful for managing different settings between development and production.
4. `index.html`:
   - The main HTML file that serves as the entry point for your application.
   - Contains the `<app-root>` tag where your Angular app is bootstrapped.
5. `main.ts`:
   - The entry point for your Angular application.
   - Bootstraps the root module (usually AppModule).
6. `styles.css` (or `.scss`):
   - Contains global styles for your application.
7. `polyfills.ts`:
   - Imports necessary polyfills for browser compatibility.
8. `test.ts`:
   - The main entry point for your unit tests.
9. `favicon.ico`:
   - The icon displayed in the browser's address bar.

Little more about `package.json`. The `package.json` file is a crucial part of any Node.js project, including Angular applications. It contains metadata about the project and lists its dependencies. Let's break down its main components:

- `name`: The name of your project.
- `version`: The current version of your project, following semantic versioning.
- `scripts`: Defines various commands that can be run using npm. Common scripts include:
  - `start`: Runs the development server.
  - `build`: Builds the production version of the app.
  - `test`: Runs the test suite.
- `private`: When set to true, prevents accidental publication of your package to npm.
- `dependencies`: Lists the production dependencies of your project. These are packages required for the application to run. In an Angular project, this typically includes Angular core libraries and other essential packages.
- `devDependencies`: Lists dependencies used only for development and testing. These aren't included in the production build. For Angular, this includes the Angular CLI, testing frameworks, and build tools.
- `engines` (not shown in this example): Can specify which versions of Node.js and npm your project is compatible with.
- `browserslist` (not shown in this example): Specifies which browsers your project supports.

## Components

Components are fundamental building blocks in Angular applications. A component in Angular is a TypeScript class that controls a patch of screen called a view. It consists of:

- A TypeScript class that defines behavior
- An HTML template that defines the view
- CSS styles (optional)

Key points about components:

1. They manage their own data and logic
2. They have a defined lifecycle that you can hook into
3. They can interact with other components through inputs and outputs
4. They can be nested within other components

Components encapsulate data, logic, and view into reusable pieces.

**Standalone components**: are components that don't need to be declared in an NgModule. They:

- Are self-contained
- Can be imported directly into other components
- Simplify the application structure by reducing the need for numerous NgModules

Standalone components offer several advantages:

1. Simplified bootstrapping process
2. Easier to understand and maintain
3. Better tree-shaking, potentially leading to smaller bundle sizes
4. Can be lazily loaded without an accompanying module

**Component Decorator**: The `@Component decorator` is used to define a class as an Angular component and provide metadata about the component.

- `selector`: Defines the HTML tag for this component. (a unique identifier for the component)
- `template`: Contains the HTML for the component. It can be inline (as shown) or reference an external file using `templateUrl`.
- `styles`: Contains CSS for the component. Can be inline or reference external files using `styleUrls`.
- `standalone`: Indicates that this is a standalone component.

### Playing with Component

Create Component

```cmd
ng generate component <componentName>
ng g c<componentName>
```

Component `.ts` content:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-add-employee",
  standalone: true,
  imports: [], //template: '', [ inline HTML ]
  templateUrl: "./add-employee.component.html", // [ external HTML ]
  // styles: ['.primary{color:red}'],
  styleUrl: "./add-employee.component.css",
})
export class AddEmployeeComponent {}
```

To make use of these components, you must import the **component class name** into the `target.component.ts > @Component > imports`

---

# LearnAng18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
