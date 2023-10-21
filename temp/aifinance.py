from main import GenericAssistant
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader as web
import mplfinance as mpf
import yfinance as yf
import pickle
import datetime as dt
import os
import json
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")
from helper import get_answer

# firestore db
cred = credentials.Certificate('C:/Users/kulra/Desktop/msu mini project/msu-project-S5/temp/mini-project-auth-2a307-9f09894308f4.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()



def user_help():
    pass

# Add a firm's share into the user's portfolio
def add_or_update_stock(uid, message):
    # company_name, ticker, purchase_price, quantity, purchase_date, sector
    ticker = "TCS.NS"
    company_name = "Tata consultancy services"
    purchase_price = 100
    quantity = 200
    sector = "IT"
    # Create references to the user's document and the "stocks" subcollection
    user_ref = db.collection("portfolio").document(uid)
    stocks_ref = user_ref.collection("stocks")
    
    # Query for existing stocks with the same ticker
    query = stocks_ref.where("ticker", "==", ticker)
    stock_query = query.stream()
    
    # Check if a stock with the same ticker already exists
    existing_stock = None
    for stock in stock_query:
        existing_stock = stock.reference
    
    if existing_stock:
        # If the stock with the same ticker exists, update its data
        existing_stock_data = existing_stock.get().to_dict()
        existing_quantity = existing_stock_data.get("quantity", 0)
        existing_purchase_price = existing_stock_data.get("purchase_price", 0)

        updated_quantity = existing_quantity + quantity
        updated_purchase_price = (existing_purchase_price + purchase_price) / 2  # Calculate new average price
        updated_purchase_date = datetime.now() # You can implement your own logic for updating the date
        
        existing_stock.update({
            "quantity": updated_quantity,
            "purchase_price": updated_purchase_price,
            "purchase_date": updated_purchase_date
        })
        
        return (f"Stock with ticker '{ticker}' updated in Firestore")
    else:
        # If the stock doesn't exist, create a new stock document
        stock_ref = stocks_ref.add({
            "company_name": company_name,
            "ticker": ticker,
            "purchase_price": purchase_price,
            "quantity": quantity,
            "purchase_date": datetime.now(),
            "sector": sector
        })
        
        return (f"New stock with ticker '{ticker}' added to Firestore: {stock_ref}")



# Removes a share from the user's porfolio
def sell_stock(uid, message):
    
    # ticker, sell_quantity, current_price
    ticker = "TCS.NS"
    sell_quantity = 10
    current_price = 90
    # Create references to the user's document and the "stocks" subcollection
    user_ref = db.collection("portfolio").document(uid)
    stocks_ref = user_ref.collection("stocks")
    
    # Query for the stock with the specified ticker
    query = stocks_ref.where("ticker", "==", ticker)
    stock_query = query.stream()
    
    # Check if a stock with the same ticker exists
    existing_stock = None
    for stock in stock_query:
        existing_stock = stock.reference
    
    if existing_stock:
        # If the stock with the same ticker exists, update its data
        existing_stock_data = existing_stock.get().to_dict()
        existing_quantity = existing_stock_data.get("quantity", 0)
        purchase_price = existing_stock_data.get("purchase_price", 0)
        
        if existing_quantity >= sell_quantity:
            updated_quantity = existing_quantity - sell_quantity
            gains_or_losses = (current_price - purchase_price) * sell_quantity
            
            existing_stock.update({
                "quantity": updated_quantity
            })
            
            return (f"Sold {sell_quantity} shares of '{ticker}' for a {gains_or_losses:+.2f} gain/loss")
            
            # return gains_or_losses
        else:
            # Error: Trying to sell more shares than available
            return (f"Error: Insufficient shares of '{ticker}' for sale")
            # return None
    else:
        # Error: Ticker not found
        return (f"Error: '{ticker}' not found in your portfolio")
        # return None


# Show the number of shares in the user's porfolio
def calculate_net_gains_or_losses(uid, message):
    
    # Create references to the user's document and the "stocks" subcollection
    user_ref = db.collection("portfolio").document(uid)
    stocks_ref = user_ref.collection("stocks")
    
    total_gains_or_losses = 0
    total_investment = 0  # Total cost of all stocks
    
    # Iterate through all the stocks in the "stocks" subcollection
    for stock in stocks_ref.stream():
        stock_data = stock.to_dict()
        quantity = stock_data.get("quantity", 0)
        purchase_price = stock_data.get("purchase_price", 0)
        current_price = 500 # Get the current price for this stock
        
        # Calculate gains or losses for this stock
        gains_or_losses = (current_price - purchase_price) * quantity
        total_gains_or_losses += gains_or_losses
        
        # Calculate the cost of this stock
        total_investment += purchase_price * quantity
    
    # Calculate the percentage of gains or losses
    percentage_gains_or_losses = (total_gains_or_losses / total_investment) * 100
    
    return total_gains_or_losses, percentage_gains_or_losses



def plot_chart(uid, message=None):
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": """You will be provided with the sentence that will contain a name of a stock listed on National stock exchange India and a time period. You need to find the stock name and modify it into Yahoo Finance API ticker symbol and you need to extract the time period mentioned in the sentnece. At the end you can return it all in json format that contains keys 'stock', 'start_date', 'end_date'. if no stock or time can be found in the sentence just put "" as the value Make sure your json format is consistent each time"""},
        {"role": "user", "content": message}
    ]
    )
    a = completion.choices[0].message.content

    try:
        dictionary = json.loads(a)

        ticker = dictionary['stock']
        print(type(ticker))
        stock_data = yf.download(ticker, period="6mo", interval="1d")  # Replace with desired date range
        return stock_data.to_dict(orient="records")
    except Exception as e:
        return []
    
    
    
def get_balance_sheet(uid, message):
    ticker = "ITC.NS"
    data = yf.Ticker(ticker)
    balance_sheet = data.balance_sheet

    return balance_sheet.to_json(orient="split")



def get_lastest_news(uid, message):
    ticker = "TCS.NS"
    data = yf.Ticker(ticker)
    news_data = data.news
    print(news_data)
    return news_data
    


def get_generic_answer(uid, message):
    return str(get_answer(message))

# Mapping of the intents from the .json file to train the AI chatbot to recognize patterns of speech and requests
intents_mapping = {
    'plot_chart': plot_chart,
    # 'add_portfolio': add_portfolio,
    # 'remove_portfolio': remove_portfolio,
    # 'show_portfolio': show_porfolio,
    # 'portfolio_worth': portfolio_worth,
    # 'portfolio_gains': portfolio_gains,
    # 'user_help': user_help,
    'get_balance_sheet' : get_balance_sheet,
    'get_lastest_news' : get_lastest_news,
    'get_generic_answer' : get_generic_answer
}


assistant_AI = GenericAssistant('intents.json', intent_methods=intents_mapping,
                                model_name="kulraj")
# 1st time initialization of the model
# assistant_AI.train_model()
# assistant_AI.save_model()
# After first initialization (load model instead)
assistant_AI.load_model(model_name="kulraj")



from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)

api = Api(app)

cors = CORS(app, origins='*')

class Chat(Resource):
    def post(self):
        message = request.get_json()['req']
        logged_in_user_id = request.headers.get('uid')
        res = assistant_AI.request(message, logged_in_user_id)  # Ask something to the assistant
        print(res)
        return jsonify({'res' : res})


api.add_resource(Chat, '/chat')

if __name__ == '__main__':
    app.run(debug=True)
        
# while True:
#     message = input("Enter : ")
#     res = assistant_AI.request(message)  # Ask something to the assistant
#     print(res)