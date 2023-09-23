# FARM-Stack-Demo

### Resources

- [Tutorial Video](https://www.youtube.com/watch?v=OzUzrs8uJl8)

# Step 1: Setup Backend

### Virtual Environments

- Packages:
  - FastAPI
  - pydantic
  - python-dotenv
  - uvicorn
  - Motor
 
### FastAPI Items

- `main.py` - where the server runs
- `database.py`
  - connects to the database
  - has query logic
- `model.py`
  - Model for FastAPI

### Python Secrets

- Create a file called `.env`
- Add `.env` to the `.gitignore` file
- Create a Varible
  - Sample Variable: `ConnectionString=mongodbConnectionString`
- Call Variable in python example:
```
from dotenv import load_dotenv
import os

load_dotenv()
connection_string = os.getenv("ConnectionString")
```

# Step 2: Setup Frontend

### Install Items

- `npx create-react-app frontend`
- Install Items:
  - `npm install axios`
  - `npm install bootstrap`
- Add Bootstrap import
  - Added to `index.js` file
  - Line: `import '../node_modules/bootstrap/dist/css/bootstrap.min.css';`