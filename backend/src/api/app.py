from flask import Flask
from flask_cors import CORS
from src.api.models.user import db
from src.api.routes.auth import auth
from src.tools.config import Config
from dotenv import load_dotenv
import os
load_dotenv()  


app = Flask(__name__)

# For database setting 
app.config.from_object(Config)
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "dev")
CORS(app)

db.init_app(app)
app.register_blueprint(auth, url_prefix='/auth')


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
