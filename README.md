# health-chat

This is a demo health chat that uses GPT to answer health-related questions.

The app is publicly accessible at https://cliftonlee.github.io/health-chat.
The API is hosted at https://gentle-fortress-89872.herokuapp.com.

## Developer Guide
### Develop
To run the app locally on port 127.0.0.1:8000, use the command:

```
uvicorn main:app --reload
```

Swagger docs accessible at: http://127.0.0.1:8000/docs


To create a new dataset, add a new folder in the dataset/ directory and fill it with documents/resources. Then, run the `make_gpt_index.py` script like so:

```
python3 make_gpt_index.py <PATH_TO_DATASET> <PATH_TO_NEW_INDEX>
```


### Deploy

To push changes to GitHub:
```
git push

```

To deploy current `main` branch to heroku:

```
git push heroku main
```

Ensure at least one instance of the app is running:
```
heroku ps:scale web=1
```

To visit the app:

```
heroku open
```

View logs:
```
heroku logs --tail
```