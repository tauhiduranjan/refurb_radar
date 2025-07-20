import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    results = response.json()
    assert isinstance(results, dict)
    assert "message" in results
    assert results["message"] == "FastAPI is running"

