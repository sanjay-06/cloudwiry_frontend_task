from pymongo import MongoClient
url='mongodb+srv://sanjay:1234@cluster0.cew55.mongodb.net/cloudwiry?retryWrites=true&w=majority'
client=MongoClient(url)
db=client['cloudwiry']   
collect=db['ProductDetails']  
products= [
    {
      "title": "Bonsai tree 1",
      "image": "https://i.pinimg.com/originals/73/18/84/731884f538fea19e240313d7d0d124f2.jpg",
      "description":"A simple tree",
      "price": 29.9
    },
    {
      "title": "Bonsai tree 2",
      "image": "https://st.depositphotos.com/1268660/3097/i/950/depositphotos_30970519-stock-photo-bonsai-tree-on-display.jpg",
      "description":"A simple tree",
      "price": 18.9
    },
    {
      "title": "Bonsai tree 3",
      "image":"https://i.pinimg.com/originals/5c/b1/74/5cb17412282e13a736ba6ac02203e590.jpg",
      "description":"A simple tree",
      "price": 14.9
    },
    {
      "title": "Bonsai tree 4",
      "image": "https://i.pinimg.com/originals/df/4b/b7/df4bb7d20e5e348f7ebbb4cabfee4543.jpg",
      "description":"A simple tree",
      "price": 25.9
    },
    {
      "title": "Bonsai tree 5",
      "image": "https://www.bonsaiempire.com/great-bonsai-album/Goshin-bonsai.jpg",
      "description":"A simple tree",
      "price": 10.9
    },
    {
      "title": "Bonsai tree 6",
      "image": "https://www.bonsaiempire.com/images/gallery/large/A_045_Nov.jpg",
      "description":"A simple tree",     
      "price": 49.9
    }
  ]
collect.insert_many(products)
# product=[]
# respond={}
# for x in collect.find({}):
#     product.append(x)
# respond={
#     "product":product
# }
# print(respond)