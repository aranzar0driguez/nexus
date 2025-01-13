from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from python_to_postgres import insert_user

app = FastAPI(
    title="My API",
    description="This is a custom API documentation with FastAPI",
    verstion="1.0.0",
)

#The basemodel ensures incoming data matches the expected data type,
# updates the model on swagger UI, converts it into JSON response  

class UserCreate(BaseModel):
    first_name: str
    last_name: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/users/")
def create_user(user: UserCreate):
    # Create new user by calling insert_user from python_to_postgres
    result = insert_user(user.first_name, user.last_name)
    if "error" in result: 
        raise HTTPException(status_code=400, detail=result["error"])
    return {"message": "User has been successfully created", "user": result}
