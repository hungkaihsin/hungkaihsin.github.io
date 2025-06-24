from flask import Blueprint, request, jsonify, current_app
from src.api.models.user import db, User
import jwt, datetime

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data.get('email')).first()
    if user and user.check_password(data.get('password')):
        token = jwt.encode({
            'user_id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, current_app.config["SECRET_KEY"], algorithm='HS256')  # ✅ Use current_app
        return jsonify({'token': token})
    return jsonify({'error': 'Invalid credentials'}), 401