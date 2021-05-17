from flask import Flask,request
from flask_cors import CORS
from pymongo import MongoClient
app = Flask(__name__)
CORS(app)
from bson import ObjectId
import json

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

url='mongodb+srv://sanjay:1234@cluster0.cew55.mongodb.net/cloudwiry?retryWrites=true&w=majority'
client=MongoClient(url)
db=client['cloudwiry']   
collect=db['ProductDetails']                                       
@app.route('/',methods=['GET'])
def index():
    print("Got get request")
    print("Connected to the http server successfully")
    return 'Web App with Python Flask!'

@app.route('/data',methods=['POST'])
def reqdata():
    print("Got post request")
    print("Connected to the http server successfully")
    print(collect.insert_one(request.get_json()))
    return 'Done',201

@app.route('/delete/<id>',methods=['DELETE'])
def reqdeletedata(id):
    print( ObjectId(id))
    print("Got delete request")
    print("Connected to the http server successfully")
    collect.delete_one({"_id":ObjectId(id)})
    return 'Done',201

@app.route('/getvalues',methods=['GET'])
def getvalues():
    print("Got get request")
    print("Connected to the http server successfully")
    product=[]
    for x in collect.find():
        product.append(x)
    res = json.dumps({'product' : product}, cls=JSONEncoder)
  #  print(res)
    return res,200

app.run(host='0.0.0.0', port=8000,debug=True)