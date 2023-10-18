# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import firestore
import requests
# # Use a service account.
# cred = credentials.Certificate('C:/Users/kulra/Desktop/msu mini project/msu-project-S5/temp/mini-project-auth-2a307-9f09894308f4.json')

# app = firebase_admin.initialize_app(cred)

# db = firestore.client()


# doc_ref = db.collection("portfolio").document("hello")

# doc = doc_ref.get()
# if doc.exists:
#     print(f"Document data: {doc.to_dict()}")
# else:
#     print("No such document!")

apiKey = "LXNATUFPBG4TI02P"
url = 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=NSE:LT&apikey=' + apiKey
r = requests.get(url)
data = r.json()

print(data)