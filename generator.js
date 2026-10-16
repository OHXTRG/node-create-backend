import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';


console.log('process arguents ' , process.argv);

// const rootDir = process.argv[2] || process.cwd();

// const rootDir2 = import.meta;

// console.log(import.meta.url);
// console.log(path.dirname(fileURLToPath(import.meta.url)));
// console.log(import.meta.dirname);


const fileUrl = import.meta.url ; 
const filePath = fileURLToPath(fileUrl);
const rootDir = path.dirname(filePath);
const templateDir = path.join(rootDir, 'template');

const processDir = process.cwd();
const project_name = process.argv[2] || 'node-backend-project';
const projectDir = path.join(processDir, project_name);

console.log('rootDir ', rootDir);
console.log('templateDir ', templateDir);
console.log('processDir ', processDir);
console.log('project_name ', project_name);
console.log('projectDir ', projectDir);

// filter the project name 

const isValid = /^[a-zA-Z0-9_-]+$/.test(project_name);

if (!isValid) {
    console.error('Invalid project name. Only letters, numbers, underscores, and hyphens are allowed.');
    process.exit(1);
}

// console.log('rootDir ', rootDir);

console.log('making directory');

fs.mkdirSync(path.join(processDir, project_name));

console.log("initializing project");

const pkg = {
  name: project_name,
  version: '1.0.0',
  type: 'CommonJS',
  scripts: { start: 'node app.js' , dev: 'nodemon app.js' },
};


fs.writeFileSync(path.join(projectDir , 'package.json') , JSON.stringify(pkg,null,2));
// execSync('npm init -y',{cwd:projectDir, stdio: 'inherit'});

console.log('initializing project done');

console.log('copying files');


fs.copyFileSync(path.join(templateDir,"app.js"), path.join(projectDir,"app.js"));
fs.copyFileSync(path.join(templateDir,"routes.js") , path.join(projectDir,"routes.js"));

console.log('copying files done');


console.log('installing dependencies');

execSync('npm install nodemon --save-dev', {cwd : projectDir, stdio: 'inherit'});

console.log('installing dependencies done');

console.log('project setup complete');








