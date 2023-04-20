# Job-Portal-API
---
## Project Overview

This is a REST-API project that enables users to register either as an HR or a Candidate.

HRs can create a company, view their company's information, and post job listings. On the other hand, Candidates can apply for job listings and view the status of their applications.

Both types of users have the ability to perform CRUD (Create, Read, Update, and Delete) operations on their accounts.

---

## Data Modeling Schema
![image](https://user-images.githubusercontent.com/61789409/233234422-433463e3-a080-40f1-b90f-8ac50bb27f35.png)
---


## Features:

- Full CRUD operations on Candidate and HR users.
- Authentication & Authorization (using Jason Web Token)
- Error Handling
- P**recise** status code server-side responses
- MongoDB data modeling using Mongoose Package
- Production-ready REST-API using Docker
---

## Endpoints permissions
### HR

- Create company
- Edit company
- Get their company info.
- Get a company
- Create job
- Edit job
- Delete job
- Update application status
- Get single job applications
- Logout

### Candidate

- Apply for a job
- Get all applications
- Get application
- Delete application

### Common between Candidate & HR

- Show profile
- Update profile
- Delete account
- Update Password
- Logout

### ****Accessible by all****

- Register
- Login
- view all jobs
- view a single job
---
## How to run
`docker build . -t jobportal` to create a docker image

`docker-compose up` to start the server

---

