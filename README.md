# Asset Finance Management Backend (Node.js + Express + MongoDB)

## <a name="introduction">🤖 Introduction</a>

This is the backend API for the Asset Finance Management Platform. It is built using Node.js,
Express.js, and MongoDB and provides a RESTful API for managing finance applications.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Backend**: Node.js & Express.js
- **Database**: MongoDB.
- **Deployment**: AWS Elastic Beanstalk using Github Actions.

## <a name="features">🔋 Features</a>

👉 **User Authentication**: 👉 **CRUD Operations** 👉 **MongoDB Integration** 👉**Deployed on AWS
Elastic Beanstalk** 👉**Implemented CI/CD Pipeline using Github Actions**

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Emprcode/asset-finance-management-platform-backend-node.git
cd asset-finance-management-platform-backend-node
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#Database
MONGO_URL=
```

Replace the placeholder values with your actual apiURL to perform CRUD.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) in your browser to view the project.

**Deploying to AWS elastic beanstalk via CI/CD (Github Actions)** This project includes GitHub
Actions for automatic deployment to AWS Elastic Beanstalk on every push to main.

**Setup Github Secrets**

In your repo, add:

```bash
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
```
