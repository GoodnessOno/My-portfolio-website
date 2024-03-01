# We're going to use some tools to build our chatbot.
import nltk  # This tool helps us understand words.
from sklearn.feature_extraction.text import CountVectorizer  # This tool helps us count words.
from sklearn.metrics.pairwise import cosine_similarity  # This tool helps us compare sentences.
import random  # This tool helps us do things randomly.
import string  # This tool helps us work with letters and punctuation.

# Our chatbot will listen to us and talk back.
def chatbot_response(user_input):
    def LemNormalize(text):
        # Implement the logic for LemNormalize function here
        pass

    robo_response = ''  # Our chatbot's response starts as nothing.
    sent_tokens.append(user_input)  # We add what we say to our chatbot's memory.

    # We count the words we say and compare them with what we already know.
    sent_tokens = []  # Define the variable "sent_tokens" as an empty list
    req_tfidf = 0  # Define the variable "req_tfidf" before using it

    TfidfVec = CountVectorizer(tokenizer=LemNormalize, stop_words='english')
    tfidf = TfidfVec.fit_transform(sent_tokens)
    vals = cosine_similarity(tfidf[-1], tfidf)
    idx = vals.argsort()[0][-2]  # We find the most similar thing we already know.

    # If we don't understand what we said, we apologize.
    if req_tfidf == 0:
        robo_response = robo_response + "I am sorry! I don't understand you"
        return robo_response
    else:
        # Otherwise, we say something similar to what we already know.
        robo_response = robo_response + sent_tokens[idx]
        return robo_response

# Load the file containing questions and answers
with open('chatbot-questions.txt', 'r') as file:
    lines = file.readlines()

# Process each line in the file
answers = []  # Define the "answers" list before appending values to it
questions = []  # Define the "questions" list before appending values to it

for line in lines:
    print(f"Processing line: {line.strip()}")  # Debugging statement
    # Split the line by comma
    parts = line.strip().split(',')
    # Check if the line contains both a question and an answer
    if len(parts) == 2:
        questions.append(parts[0])
        answers.append(parts[1])
    else:
        print(f"Ignoring invalid line: {line}")

    # Load the file containing questions and answers
with open('chatbot-questions.txt', 'r') as file:
    lines = file.readlines()

# Process each line in the file
for line in lines:
    # Split the line by comma
    parts = line.strip().split(',')
    # Check if the line contains at least a question and an answer
    if len(parts) >= 2:
        questions.append(parts[0])
        answers.append(','.join(parts[1:]))  # Join extra parts as the answer
    else:
        print(f"Ignoring invalid line: {line}")


