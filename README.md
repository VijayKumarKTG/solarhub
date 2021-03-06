# SolarHub

## Project Setup on a local machine

>If you are not familiar with shell commands, then take this 1 day course [here](https://www.udacity.com/course/shell-workshop--ud206).

* First of all, install [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads). 
* Create a [Github](https://github.com) if you don't have one.
* Then, head to this [repository](https://github.com/VijayKumarKTG/solarhub) and **"Fork"** it. You will find the **"Fork"** button in the top-right corner of the page just below your profile icon. By forking the repo, there will be a copy of the repo into your Github account. You will automatically redirect to your new repo.
* You will find a green dropdown with **"Code"** text, click it and you will see a link in a box. Copy that link.
* Open your code editor or IDE of your choice. I'll recommend using VSCode. Open your terminal or command prompt. You can open the integrated terminal in VSCode by pressing *ctrl+`*
* Navigate to your prefer directory in the terminal.
* Then, paste the following git command with **the copied-link from your Github** page in this place `<link>`.
  ```bash
  git clone <link>
  ```
* After that, maybe you will need to sign up via your terminal or command prompt.
* After the cloned command completed, you will see a folder(directory) named as **"solarhub"**. CD into that folder with the following command.
  ```bash
  cd solarhub
  ```
* Then, paste the following command into your terminal.
  ```bash
  npm install
  ```
* Then, another git command below. That is a single-line command.
  ```bash
  git remote add upstream https://github.com/VijayKumarKTG/solarhub.git
  ```
* The project setup is completed.

> There are some global dependencies that will help you in this project.
```bash
npm install -g nodemon
```
> If you find out errors like `'git' is not a command` or `'npm' is not a command` although you have downloaded the Git and NodeJS, then follow this link which will help you to add system environmental variables. [Git](https://stackoverflow.com/questions/26620312/git-installing-git-in-path-with-github-client-for-windows) and [NPM](https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10#:~:text=Search%20for%20Environment%20Variables%20in,nodejs%5Cnode_modules%5Cnpm%5Cbin)
---
## Some Git Commands Specific to this projects

* To commit your local changes, first add your changes into git **`git add .`**
* Then, `git commit -m <message>`. Please write a commit message at the `<message>` place.
* To pull from upstream: `git pull upstream main`
* To push your code to origin: `git push origin main`
* To make a **Pull Request**, follow the below steps.
  1. Push your code to the origin. [ The second git push command]
  2. Go to your [Github](https://github.com) page and there you will see a message like 'main is `<number>` commit ahead of VijayKumarKTG/solarhub'.
  3. You will find a green button beside it. Click it and you will see "Make a pull request". Choose that option and you will redirect to my repo.
  4. There you will see a text box. Write the pull request there like what changes are there in the PR(pull request) and you can rite message there.
  5. Then, click the green button at below to submit the PR.