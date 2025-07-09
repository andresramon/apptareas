import os
import time
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import OperationalError

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://todo_user:todo_pass@localhost:5432/todo_db")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Task(Base):
    __tablename__ = "tasks"
    
    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(255), nullable=False)
    descripcion = Column(Text, nullable=True)

def wait_for_db(max_retries=30, delay=1):
    """Wait for database to be ready"""
    for attempt in range(max_retries):
        try:
            # Try to create a connection
            engine.connect().close()
            print("Database is ready!")
            return True
        except OperationalError as e:
            print(f"Database not ready (attempt {attempt + 1}/{max_retries}): {e}")
            time.sleep(delay)
    
    raise Exception("Could not connect to database after maximum retries")

def create_tables():
    """Create tables if they don't exist"""
    wait_for_db()  # Wait for DB to be ready before creating tables
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()