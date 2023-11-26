# Catllejeros

Website created with javascript and React for the stray cat protection association.

## SERVER ROUTES

## Auth Routes

#### Base URL /auth

| HTTP Method   | URI Path      | Description               |
| :--------     | :-------      | :-------------------------|
| POST          | /signup       | Signup user               |  
| POST          | /login        | Login user                |
| GET           | /verify       | Verify Auth token         |


## User Routes

#### Base URL /users

| HTTP Method   | URI Path               | Description               |
| :--------     | :-------               | :-------------------------|
| POST          | /newUser               | Create new user           |
| GET           | /getOneUser/:user_id   | Matching ID user details   |
| GET           | /getAllUsers           | All users list             |
| PUT           | /:user_id/edit         | Matching ID user edition   |
| DELETE        | /:user_id/delete       | Matching ID user deletion  |

## Cat Routes

#### Base URL /cats

| HTTP Method   | URI Path              | Description               |
| :--------     | :-------              | :-------------------------|
| POST          | /newCat               | Create new cat            |
| GET           | /getOneCat/:cat_id    | Matching ID cat details   |
| GET           | /getAllCats           | All cats list             |
| PUT           | /:cat_id/edit         | Matching ID cat edition   |
| DELETE        | /:cat_id/delete       | Matching ID cat deletion  |


## Event Routes

#### Base URL /events

| HTTP Method   | URI Path              | Description                   |
| :--------     | :-------              | :-------------------------    |
| POST          | /newEvent             | Create new event              |
| GET           | /getOneEvent/:event_id| Matching ID event details     |
| GET           | /getAllEvents         | All events list               |
| PUT           | /:event_id/edit       | Matching ID event edition     |
| DELETE        | /:event_id/delete     | Matching ID event deletion    |

## Report Routes

#### Base URL /reports

| HTTP Method   | URI Path                  |Description                   |
| :--------     | :-------                  |:-------------------------    |
| POST          | /newReport                | Create new report            |
| GET           | /getOneReport/:report_id  | Matching ID report details   |
| GET           | /getAllReports            | All reports list             |
| PUT           | /:report_id/edit          | Matching ID report edition   |
| DELETE        | /:report_id/delete        |  Matching ID report deletion |











