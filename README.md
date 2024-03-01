# Hephaestus

_A job search platform for those with multiple career paths._

> [!NOTE]
> This is an educational project built with NextJS that looks to improve upon the current models for job searching.

<details>
<summary>Devlopment Progress</summary>

### Current list of active tasks 
- [ ] Frontend
  - [ ] Profile
    - [x] Base Style
    - [x] Main Cards Implemented (Education, Experience, Skills, Certifications)
    - [ ] Supplementary cards (Projects, Documents, Languages, Links)
  - [ ] Role
    - [x] Base Style
    - [x] Integrate Role into Profile page
    - [ ] Present Profile information as per Role tag
- [ ] Backend
  - [ ] Database
    - [x] Setup Docker Postgres container
    - [ ] Finalize DB Schema
    - [ ] Populate DB with placeholder data
  - [ ] Routing
    - [ ] Finalize routing structure
  - [ ] ORM and Server
    - [ ] Install Nexus, Prisma, and Apollo
    - [ ] Define Models
    - [ ] Generate Prisma Client
    - [ ] Expose GraphQL API
    - [ ] Implement server and setup Docker connection
- [ ] Editor
  - [ ] Linting and Formatting
    - [ ] Determine config settings
  
</details>

## Features
>[!NOTE]
>Section under construction.

There are several main features of Hephaestus, each with a focus on streamlining the application process.

### Profiles
Profiles are the central source of user information. This information source holds every entry to every field available to a role. This includes things like past experience and personal projects. 

### Roles
Roles contain, "tagged," information that allows for presenting specific information to a company when applying and when being searched. This means that users can show up in different searches with specialized presentations.

>[!IMPORTANT]
>- Profile A has career information that is all encompassing of a Web Development Software Engineer (Role A) as well as a Videographer (Role B) that specializes in corporate work.
>- Company A is hiring for a Software Engineer and when searching for engineers, Profile A comes up with the Role A presentation.
>- Company B is hiring for a Corporate Videographer and when searching for videographers, Profile A comes up with the Role B presentation. 

## Goals
>[!NOTE]
>Section under construction.

The main goal of Hephaestus is to streamline the process of applying to jobs for thos with careers spanning several disciplines and industries.

## Development
### Tech Stack
> [!NOTE]
> Tools are tentative and have the potential to change
- Frontend
  - NextJS (App Router)
  - Typescript
  - TailwindCSS
- Backend
  - GraphQL
  - Nexus
  - Prisma
  - Apollo (Client/Server)
- Database
  - PostgreSQL
- Testing
  - Playwright
- Linting and Formatting
  - ESLint
  - Stylelint
  - Prettier
- Docker (Local Postgres)

### Workflow
- Project Management
  - Notion
- OS
  - Linux
  - MacOS
- IDE
  - VS Code
- Version Control
  - Git
