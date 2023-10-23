# DeHangover

DeHangover helps you understand your drinking habits by keeping track of your nights out. Record each type of drink you have every time you go out; over time, the app will calculate your expected hangover based on your own habits and how much you are drinking that night.

![image](https://github.com/pfroda/project-dehangover/assets/79263049/675ba146-ad70-4730-9281-165169e0d4ee)

### Getting started

1. Clone the repo:

```bash
git clone https://github.com/pfroda/project-dehangover.git
cd project-dehangover
```

2. You’ll need a MongoDB database to run the project. Also, create a .env file in the server root folder and add your variables:

```env
DB_NAME= your dbname
DB_HOST= your host
PORT= your port
```

3. Then create a .env.local file in the client root folder and add your variables:

```env
REACT_APP_APP_URL=your server url
```

4. Install the dependencies and run the server:

```bash
cd server && npm install
npm run dev
```

5. To populate your database with the project data:

```bash
cd server
npm run db
```

6. Install the dependencies and run the client:

```bash
cd client && npm install
npm start
```

### Tech stack

DeHangover runs on an Express server with a MongoDB database. On the frontend, it's built in React. The app's UI is designed for mobile use, so select one of the phone options in your browser's inspector tools.

### Author

Pau Fàbrega Rodríguez-Roda

[GitHub](https://github.com/pfroda/) - [Linkedin](https://www.linkedin.com/in/paufabregaroda/)

If you have any feedback or issues, please contact me or open a GitHub issue in this repository.
Pull requests are welcome. :)
