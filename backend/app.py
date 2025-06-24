from flask import Flask
from flask_cors import CORS
from models import db
from auth import auth
from config import Config
from dotenv import load_dotenv
load_dotenv()  




app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db.init_app(app)
app.register_blueprint(auth, url_prefix='/auth')




@app.route("/")
def home():
    return {"message": "Backend working"}

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
