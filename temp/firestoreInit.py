import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime

# Use a service account.
cred = credentials.Certificate('C:/Users/kulra/Desktop/msu mini project/msu-project-S5/temp/mini-project-auth-2a307-9f09894308f4.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()


# doc_ref = db.collection("portfolio").document("hello")

# doc = doc_ref.get()
# if doc.exists:
#     print(f"Document data: {doc.to_dict()}")
# else:
#     print("No such document!")


import yfinance as yf

def get_stock_info(ticker_symbol, number_shares=1):
    try:
        # Create a Ticker object for the stock
        # stock = yf.Ticker(ticker_symbol)

        # Fetch information for the stock
        # stock_info = stock.info

        # Extract the desired information
        company_name = stock_info.get("longName", "N/A")
        current_price = stock_info.get("last_price", "N/A") * number_shares
        sector = stock_info.get("sector", "N/A")

        # Return the information as a dictionary
        return {
            "Company Name": company_name,
            "Ticker Symbol": ticker_symbol,
            "Current Price": current_price,
            "Sector": sector
        }
    except Exception as e:
        return {
            "error": str(e)
        }
        
        

# def add_stock_document(company_name, ticker, purchase_price, quantity, purchase_date, sector):
#     # Create a Firestore client
#     # Define the data to be added
#     data = {
#         "company_name": company_name,
#         "ticker": ticker,
#         "purchase_price": purchase_price,
#         "quantity": quantity,
#         "purchase_date": purchase_date,
#         "sector": sector
#     }

#     # Add a new document with auto-generated ID to the "stocks" collection
#     user_ref = db.collection("portfolio").document("iISkuvFnTgU6cikJL75EwhgXmmp2")
    
#     # Generate a new document ID for the stock
#     stock_ref = user_ref.collection("stocks").document()
#     # new_stock_ref = db.collection("portfolio").add(data)

#     # Optionally, you can return the auto-generated document ID
#     stock_ref.set(data)
#     return stock_ref.id

# # Example usage
# if __name__ == "__main__":
    company_name = "ABC Inc."
    ticker = "ABC"
    purchase_price = 100.50
    quantity = 20
    purchase_date = "2023-10-21"
    sector = "Technology"

    document_id = add_stock_document(company_name, ticker, purchase_price, quantity, purchase_date, sector)
    print(f"Added document with ID: {document_id}")
    
# fully working implement it
def add_or_update_stock(user_id, company_name, ticker, purchase_price, quantity, purchase_date, sector):
    
    # Create references to the user's document and the "stocks" subcollection
    user_ref = db.collection("portfolio").document(user_id)
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
        
        print(f"Stock with ticker '{ticker}' updated in Firestore")
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
        
        print(f"New stock with ticker '{ticker}' added to Firestore: {stock_ref}")

# Usage example
# add_or_update_stock("iISkuvFnTgU6cikJL75EwhgXmmp2", "Reliance industries", "Reliance.NS", 360.0, 50, "2023-10-21", "Technology")

# fully woroking
def sell_stock(user_id, ticker, sell_quantity, current_price):
    db = firestore.client()
    
    # Create references to the user's document and the "stocks" subcollection
    user_ref = db.collection("portfolio").document(user_id)
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
            
            print(f"Sold {sell_quantity} shares of '{ticker}' for a {gains_or_losses:+.2f} gain/loss")
            
            return gains_or_losses
        else:
            # Error: Trying to sell more shares than available
            print(f"Error: Insufficient shares of '{ticker}' for sale")
            return None
    else:
        # Error: Ticker not found
        print(f"Error: '{ticker}' not found in your portfolio")
        return None

# Usage example
gains_or_losses = sell_stock("iISkuvFnTgU6cikJL75EwhgXmmp2", "ABC", 40, 300.0)

if gains_or_losses is not None:
    print(f"Total gains/losses: {gains_or_losses:+.2f}")



def calculate_net_gains_or_losses(user_id):
    
    # Create references to the user's document and the "stocks" subcollection
    user_ref = db.collection("portfolio").document(user_id)
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


# Usage example
# total_gains_or_losses, percentage_gains_or_losses = calculate_net_gains_or_losses("iISkuvFnTgU6cikJL75EwhgXmmp2")

# print(f"Total net gains/losses: {total_gains_or_losses:+.2f}")
# print(f"Percentage of gains/losses: {percentage_gains_or_losses:+.2f}%")