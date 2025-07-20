from fastapi import FastAPI

# importing routes
# To add the API endpoints from files in the Routes directory, do "from Routes import <filename>"
from Routes import search  # Import your route module here

app = FastAPI()

# Correct way to include routers from other modules
app.include_router(search.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "FastAPI is running"}

