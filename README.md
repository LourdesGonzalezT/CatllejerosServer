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


## Cat Routes

#### Base URL /cats

| HTTP Method   | URI Path          | Description               |
| :--------     | :-------          | :-------------------------|
| POST          | /newCat           | Create new cat            |
| GET           | /getAllCats       | All cats list             |
| GET           | /:cat_id          | Matching ID cat details   |
| PUT           | /:cat_id/edit     | Matching ID cat edition   |
| DELETE        | /:cat_id/delete   | Matching ID cat deletion  |


## Event Routes

#### Base URL /events

| HTTP Method   | URI Path              | Description                   |
| :--------     | :-------              | :-------------------------    |
| POST          | /newEvent             | Create new event              |
| GET           | /getAllEvents         | All events list               |
| GET           | /:event_id            | Matching ID event details     |
| PUT           | /:event_id/edit       | Matching ID event edition     |
| DELETE        | /:event_id/delete     | Matching ID event deletion    |

## Report Routes

#### Base URL /reports

| HTTP Method   | URI Path               | Description                   |
| :--------     | :-------               | :-------------------------    |
| POST          | /newReport             | Create new report             |
| GET           | /getAllReports         | All reports list              |
| GET           | /:report_id            | Matching ID report details    |
| PUT           | /:report_id/edit       | Matching ID report edition    |
| DELETE        | /:report_id/delete     | Matching ID report deletion   |











