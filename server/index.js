require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  passport = require('passport'),
  Auth0Strategy = require('passport-auth0'),
  massive = require('massive'),
  controller = require('./controller'),
  app = express(),
  port = process.env.PORT;

// ========== MIDDLEWARE ========== //
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));
// ===== TOP LEVEL MIDDLEWARE ===== //
app.use(express.static(__dirname + '/../build'));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUnitialized: false,
    resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK
    },
    function(accessToke, refreshToken, extraParams, profile, done) {
      const db = app.get('db');
      let userData = profile._json;
      console.log(userData);
      let auth_id = userData.sub.split('|')[1];

      db.get_User_email([userData.email]).then(user => {
        console.log(user);
        if (user[0]) {
          return done(null, user[0].id);
        } else {
          db
            .create_User([
              userData.email,
              userData.given_name,
              userData.family_name,
              userData.nickname,
              userData.locale,
              userData.picture
            ])
            .then(user => {
              return done(null, userData[0].id);
            });
        }
      });
    }
  )
);

app.get('/auth/login', passport.authenticate('auth0'));
app.get(
  '/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: process.env.AUTH_SUCCESS_REDIRECT,
    failureRedirect: process.env.AUTH_LANDINGPAGE_REDIRECT
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  const db = app.get('db');
  db.find_User_by_session([user]).then(user => {
    done(null, user[0]);
  });
});

app.get('/auth/me', function(req, res, next) {
  if (!req.user) {
    res.status(401).send('Login required!');
  } else {
    // console.log(req.user)
    res.status(200).send(req.user);
  }
});

app.get('/auth/logout', function(req, res, next) {
  req.logout();
  res.redirect(process.env.AUTH_SUCCESS_LANDINGPAGE);
});

// ===== CUSTOM MIDDLEWARE ===== //

// ========== ENDPOINTS ========== //

// === GET REQUESTS === //
app.get('/user/:id', controller.get_User); // user
app.get('/user/companions', controller.get_relationships); // friends
app.get('/post', controller.get_allPost);
app.get('/post/:id', controller.get_post_by_id);

// === PUT REQUESTS === //
app.put('/user/:id', controller.edit_User_Information);

// === POST REQUESTS === //
app.post('/create/post', controller.create_Post);
app.post('/create/reply', controller.create_reply);

// === DELETE REQUESTS === //
app.delete('/delete/post', controller.delete_post);
app.delete('/delete/reply', controller.delete_reply);
app.delete('/delete/friend', controller.delete_relationship);

// ===== BrowserRouter ===== //
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port || 3030, () => {
  console.log(`listening on port ${port}`);
});
