from typing import Union

from fastapi import FastAPI

app = FastAPI(
    title="My API",
    description="This is a custom API documentation with FastAPI",
    verstion="1.0.0",
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
