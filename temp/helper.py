import openai
import os
openai.api_key = os.getenv("OPENAI_API_KEY")


def get_answer(question):
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": """You will be asked finance and stock market related questions about economincs, ratios, stategies. Explain the concept in short and if the question is out of your scope or training simply reply with "I do not have training to answer this question yet" """},
        {"role": "user", "content": question}])
   
    return completion.choices[0].message.content 