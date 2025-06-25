from flask import Blueprint, request, jsonify
from src.api.models.user import db
from src.api.models.link import Link
from functools import wraps
import jwt
from flask import current_app

links_bp = Blueprint('links', __name__)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
        except Exception as e:
            return jsonify({'error': 'Token is invalid or expired!'}), 401
        return f(*args, **kwargs)
    return decorated

@links_bp.route('/links', methods=['POST'])
@token_required
def add_link():
    data = request.get_json()
    new_link = Link(title=data['title'], url=data['url'])
    db.session.add(new_link)
    db.session.commit()
    return jsonify({'message': 'Link added successfully'})

@links_bp.route('/links', methods=['GET'])
@token_required
def get_links():
    links = Link.query.all()
    return jsonify([{'title': l.title, 'url': l.url} for l in links])

@links_bp.route('/links/<int:link_id>', methods=['DELETE'])
@token_required
def delete_link(link_id):
    link = Link.query.get_or_404(link_id)
    db.session.delete(link)
    db.session.commit()
    return jsonify({'message': 'Link deleted successfully'})