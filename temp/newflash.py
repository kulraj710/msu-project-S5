from flask import Flask, jsonify, request
from flask_restful import Resource, Api

app = Flask(__name__)

api = Api(app)

class Hello(Resource):
    
    def get(self):
        return jsonify({'data' : "hello world"})
    
    def post(self):
        data = request.get_json()
        return jsonify({'data' : data})
    

class Square(Resource):
    def get(self):
        return jsonify({'data' : "you asked for a get request what could I have done"})
    
    def post(self):
        data = request.get_json()['name']
        
        if len(data) == 6:
            return jsonify({'data' : data})
        else:
            return jsonify({'data' : 'Not correctly formatted'})


# routes
api.add_resource(Hello, '/')
api.add_resource(Square, '/num')

if __name__ == '__main__':
    app.run(debug=True)