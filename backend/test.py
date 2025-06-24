from dotenv import load_dotenv
load_dotenv()

from app import app, db
print(app.config["SQLALCHEMY_DATABASE_URI"])