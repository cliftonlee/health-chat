import os
import openai
import sys

from fastapi import FastAPI, Request
from llama_index import GPTSimpleVectorIndex

app = FastAPI()

@app.middleware("http")
async def add_cors_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

@app.get("/models/{model_name}/ask")
async def query_model(model_name:str, query: str):
	index = GPTSimpleVectorIndex.load_from_disk(f'indices/{model_name}.json')
	response = index.query(query)
	return {"message": response}
