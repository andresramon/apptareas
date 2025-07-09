from pydantic import BaseModel
from typing import Optional

class TaskBase(BaseModel):
    titulo: str
    descripcion: Optional[str] = None

class TaskCreate(TaskBase):
    pass

class TaskUpdate(BaseModel):
    titulo: Optional[str] = None
    descripcion: Optional[str] = None

class TaskResponse(TaskBase):
    id: int
    
    class Config:
        from_attributes = True
