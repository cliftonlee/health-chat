import os
import openai
from langchain.llms import OpenAI

from llama_index import GPTSimpleVectorIndex, Document, SimpleDirectoryReader, LLMPredictor, PromptHelper
import sys

path_to_dataset = sys.argv[1]
path_to_new_index = sys.argv[2] # should end in .json

openai.api_key = os.environ["OPENAI_API_KEY"]

# Loading from a directory
documents = SimpleDirectoryReader(path_to_dataset).load_data()

llm_predictor = LLMPredictor(llm=OpenAI(temperature=0, model_name="text-davinci-003"))

# define prompt helper
# set maximum input size
max_input_size = 4096
# set number of output tokens
num_output = 256
# set maximum chunk overlap
max_chunk_overlap = 20
prompt_helper = PromptHelper(max_input_size, num_output, max_chunk_overlap)

index = GPTSimpleVectorIndex(
    documents, llm_predictor=llm_predictor, prompt_helper=prompt_helper
)

# Save your index to a index.json file
index.save_to_disk(path_to_new_index)