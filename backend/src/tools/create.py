from dotenv import load_dotenv
load_dotenv()  

from src.api.app import app, db
from src.api.models.user import User

with app.app_context():
    db.create_all()
    manager = User(email="danielkai890802@gmail.com")
    manager.set_password("29339159")
    db.session.add(manager)
    db.session.commit()

    print("✅ Tables created and manager account added.")