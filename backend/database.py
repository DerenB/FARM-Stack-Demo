from model import Todo
from dotenv import load_dotenv
import os

# Get Secret Items
load_dotenv()
connection_string = os.getenv("ConnectionString")

# MongoDB Driver
import motor.motor_asyncio
client = motor.motor_asyncio.AsyncIOMotorClient(connection_string)

# Create Database & Collection
database = client.TodoList
collection = database.TodoCollection

# Fetch 1 Todo
async def fetch_one_todo(title):
    document = await collection.find_one({"title":title})
    return document

# Fetch All Todos
async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos

# Create a Todo
async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document

# Update a Todo
async def update_todo(title, desc):
    await collection.update_one({"title": title}, {"$set": {"description": desc}})
    document = await collection.find_one({"title": title})
    return document

# Delete a Todo
async def remove_todo(title):
    await collection.delete_one({"title":title})
    return True