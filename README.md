# Squint, Support

## Run app modes

### run project in dev

```
    npm run start:dev
```

After running the project, it can be used on the graphic interface on http://localhost:4000 or http(s)://www.yourdomain.com:4000

## Structure

<

## Config database connection

#### ormconfig.json
```
   
    {
        "name": "Trends",
        "type": "mysql",
        "host": "ls-12d36fc3bdd65f2a11cdf23910a33767e186e18b.cnz9raiumfbl.us-east-1.rds.amazonaws.com",
        "port": 3306,
        "username": "squint_user_exractor02",
        "password": "Squint2020#",
        "database": "squintadmin",
        "synchronize": false,
        "logging": false,
        "entities": [
            "app/models/**/*.ts"
        ],
        "cli": {
            "entitiesDir": "app/models"
        },
        "autoSchemaSync": true
    }

```
## Header


## References

**CHANNEL: You must specify the channel for the historical report, possible values "Google Custumen Search" and "NewsApi"

If the body is no sent, the request will not be processed

## CHANGELOG

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)