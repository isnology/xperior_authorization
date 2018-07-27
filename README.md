# Xperior Authentication and React server

to start the webpacker server use forman (it loads .env vars)
```
foreman start -f Procfile.dev
```

To query sqlite3 from command line:-
```
sqlite3 db/development.sqlite3
```

to fix node module upgade error with webpacker
```
bundle exec rails webpacker:binstubs
```
