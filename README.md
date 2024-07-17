## Project Overview

In this project, we will be using the TypeScript compiler.

We know that when we use `tsc index.ts`, it returns a `.js` file. Our goal is to create a structured project where:

1. We have a folder named `src` containing all the TypeScript (`.ts`) code.
2. We create a folder named `build` to store all the compiled JavaScript (`.js`) files.

To achieve this, we will generate a `tsconfig.json` file and customize the TypeScript compiler configuration.

## Steps to Configure the Project

1. **Create the Folder Structure:**

   - `src`: This folder will contain all the `.ts` files.
   - `build`: This folder will store all the compiled `.js` files.

2. **Initialize TypeScript Configuration:**

   Generate the `tsconfig.json` file using the following command:

   ```sh
   tsc --init

   ```

3. **Configure tsconfig.json:**

In the tsconfig.json file, update the following properties:

```
{
  "compilerOptions": {
    "outDir": "./build", // Specify an output folder for all emitted files.
    "rootDir": "./src" // Specify the root folder within your source files.
  }
```

## Compiling TypeScript Files

Now we just need to run `tsc` in the terminal, which will automatically compile the TypeScript files in the `src` folder and output the JavaScript files into the `build` folder.

To avoid running the `tsc` command every time you make changes to a TypeScript file, you can use the `tsc -w` command. This will watch the `src` folder and automatically compile the TypeScript files into JavaScript files whenever changes are detected.

```sh
tsc -w
```

---

## Running and Automating Code Execution

To check whether our code is running properly, we typically use the `node filename` command to execute the JavaScript files. However, to automate this process and run the code every time we make a change, we can use `nodemon` and `concurrently`.

`nodemon` automatically restarts the node application when file changes are detected. `concurrently` allows us to run multiple npm scripts at the same time.

### Installation

Install `nodemon` and `concurrently` using npm:

```sh
npm install nodemon concurrently
```

### Add This in your package.json file

```
"scripts": {
  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently \"npm:start:build\" \"npm:start:run\""
}
```

Now to start the code just type
`npm start`
