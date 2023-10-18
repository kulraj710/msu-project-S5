# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import firestore
# import requests
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

# apiKey = "LXNATUFPBG4TI02P"
# url = 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=NSE:LT&apikey=' + apiKey
# r = requests.get(url)
# data = r.json()

# print(data)

import os
import openai
import json
import yfinance as yf
# openai.api_key = os.getenv("OPENAI_API_KEY")
# openai.api_key = "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"



# completion = openai.ChatCompletion.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "You will be provided with the sentence that will contain a name of a stock listed on National stock exchange India and a time period. You need to find the stock name and modify it into Yahoo Finance API ticker symbol and you need to extract the time period mentioned in the sentnece. At the end you can return it all in json format that contains keys 'stock', 'start_date', 'end_date'. Make sure your json format is consistent each time"},
#     {"role": "user", "content": "how has icici been performing for last 3 months"}
#   ]
# )
# a = completion.choices[0].message.content

# dictionary = json.loads(a)

# print(dictionary['stock'])

def plot_chart(ticker):
    # ticker = input("Choose a ticker symbol: ")
    # ticker = "HDFC.NS"
    # ticker = "RELIANCE.NS"
    # completion = openai.ChatCompletion.create(
    # model="gpt-3.5-turbo",
    # messages=[
    #     {"role": "system", "content": """You will be provided with the sentence that will contain a name of a stock listed on National stock exchange India and a time period. You need to find the stock name and modify it into Yahoo Finance API ticker symbol and you need to extract the time period mentioned in the sentnece. At the end you can return it all in json format that contains keys 'stock', 'start_date', 'end_date'. if no stock or time can be found in the sentence just put "" as the value Make sure your json format is consistent each time"""},
    #     {"role": "user", "content": message}
    # ]
    # )
    # a = completion.choices[0].message.content

    # dictionary = json.loads(a)

    # ticker = dictionary['stock']
    # print(ticker)
    
        stock_data = yf.download(ticker, period="6mo", interval="1d")  # Replace with desired date range
        return stock_data.to_dict(orient="records")



a = plot_chart("hello")
print(a)