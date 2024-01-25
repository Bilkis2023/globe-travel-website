# Globe-travel-Website

### (This is a group project)

"Globe Travel" is a dynamic and user-friendly travel website desigened to provide an immersive experience for users seeking informaion,inspiration, and services are related to travel. The website has a clean and morden design with intuitive navigation, making it easy for users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technology)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Git branching workflow](GitBranchingWorkflow)
- [Agile software development](AgileSoftwareDevelopment)
- [Contributing](#contributing)
- [About Us](#aboutme)
- [License](#license)

## Introduction

"Globe Travel" is a dynamic and user-friendly travel website desigened to provide an immersive experience for users seeking informaion,inspiration, and services are related to travel. The website has a clean and morden design with intuitive navigation, making it easy for users.

## Features

- Home
- Book
- Manage
  - Change Booking
  - Flight Status
- Help
  - FAQs
- Destinations
- Sign Up
- Login

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- [Rapid Api](https://rapidapi.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Fontawsome](https://fontawesome.com/)

## Getting Started

To get started with website, follow these steps:

1. Clone this repository to your local machine.

```bash
  git clone https://github.com/DKT15/globe-travel-website.git
```

2. Open the `index.html` file in a web browser.

## Usage

1. Open `index.html` in a web browser.
2. Go to `bookings.html` to book your flight.
3. Go to `flightstatus.html` to check flight status.
4. And Some other Webpages there for content.

## Screenshots

![The Globe Travel app with div tool screenshot.](assets/images/globeTravel.jpg)

## Deployment

The application is deployed and accessible online. Visit the live version [here](https://dkt15.github.io/globe-travel-website/destinations.html).

# Git branching workflow:

is a strategy or set of guidelines that developers follow when workin with Git, a distributed version control system. Branching allows developers to create a independent lines of development, making it workflows exist, but a commonly used one is the "Feature Branch Workflow".
Here's an overview:

1.  Main Branch(Master/Main):

- The main branch represents the stable version of the project. It should always be in a deployable state, meaning it contains the latest production-ready code.

2. Feature Branches: When a new feature or task needs to be implemented, a developer creates a new branch dedicated to that specific feature. This is called a "feature branch".The developer workers on the feature independently of the main branch.
3. Creating a Feature Branch:

- To creating a feature branch, developers typically use the following commands:

```bash
  git checkout -b feature/new-feature-name
```

This command creates and switches to a new branch named "feature/new-feature-name."

4. Development on Feature Branch:

- Developers make changes, add new code, and commit their work to the feature branch.This allows multiple developers to work on different features simultaneously without interfering with each other.

5. Regular Updates:

- while working on the feature branch, developers regularly pull the latest changes
  from the main brancr to ensure their feature branch is based on the most recent code.

```bash
  git pull origin main
```

6. Code Review:

- Once the feature is complete, the developer opens a pull request (PR) to merge their feature branch into the main branch. This is an oppertunity for code review and collaboration with other team members.

7. Integration and Testing:

- The feature branch undergoes integration testing to ensure that it works well with
  the existing codebase. This step helps identify and resolve conflicts or issues that may arise from the merge.

8. Merge into Main:

- After the code review and successful testing, the feature branch is merged into
  the main branch. This integraion brings the new feature into the stable codebage.

9. Tagging Releases:

- After significant features or bug fixes, a release may be tagged in the main branch.This allows for identificatin of specific versions and helps with version control.
  This brnching workflow promotes a systematic and collaboratve approach to development.
  Ungerstanding Git branching workflow is crucial for effective collaboration in software development projects.

# Agile software development

Agile software development is an iterative approach to software development that emphsizes flexibility, collaboration, and customer feedback. It contrasts with traditional "waterfall" methods by breaking the development process into smaller increments called iteration or sprints, allowing for incremental improvements and adjustments thoughout the project lifecycle. Here are key principales and characteristics of Agile software development:

- Iterative and Incremental Development
- Customer Collaboration
- Adaptive Planing
- Cross-Funtional Teams
- Continuous Integration and Delivery
- Emphasis on Individuals and Interactions
- Working Software as primary Measure of Progress
- Embracing Change
  Common Agile methodologies include Scrum, Kanban, Extreme Programming (PX), and Lean Software Development, eatch with its own set of practices and principles tailored to different project contexts. By promoting collaborating, adaptability, and customer-centricity, Agile methodologes aim to deliver high-quality software that meets customer needs efficiently and effectively.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or improvement.
3. Make changes and submit a pull request.

## 🚀 About Us

1. [Tj Thouhid](https://github.com/tjthouhid)
2. [Danté Kellman-Thompson](https://github.com/DKT15)
3. [Mst Bilkis Naher](https://github.com/Bilkis2023)
4. [Natasha](https://github.com/Tashsn)

## License

This project is licensed under the [MIT License](LICENSE).
