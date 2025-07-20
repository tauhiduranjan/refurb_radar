# routers/search.py
#use this to import the APIRRouter
from fastapi import APIRouter, Query
#importing types
from typing import List, Dict

# Create a new APIRouter instance
router = APIRouter()

#router.get or router.post 
@router.get("/search") #/search?query={query}
def search_products(query: str = Query(..., min_length=2)) -> List[Dict[str, str]]:
    """
    Simulate product search based on query.
    """
    return [
        {"product_name": query, "price": query, "condition": query},
        {"product_name": "Refurbished iPhone", "price": "$250", "condition": "Excellent"},
    ]
