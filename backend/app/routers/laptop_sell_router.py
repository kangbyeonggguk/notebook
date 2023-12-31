from fastapi import APIRouter, Header, Depends, UploadFile, Form, HTTPException
from starlette import status
from schemas.laptop_info_schema import LaptopSellFormCreate
from crud import laptop_sell_crud
from db.database import db
from sqlalchemy.orm import Session
from typing import List,Annotated
from crud import account_crud

router = APIRouter()


@router.post("/sell", status_code=status.HTTP_200_OK)
async def image_upload(device_name: Annotated[str, Form()], serial_number: Annotated[str, Form()], product_details: Annotated[str, Form()], step: Annotated[int,Form()],
                       files: List[UploadFile], session: Session = Depends(db.session), token: str = Header(None)):
   return await laptop_sell_crud.laptop_sell_info_input(device_name=device_name, serial_number=serial_number, product_details=product_details,
                                                  step=step, files=files, db=session, token=token)


# 노트북 이름, 시리어 넘버, 등록일, step response
@router.get("/sell/process/{sell_info_id}", status_code=status.HTTP_200_OK)
async def get_laptop_sell_process(sell_info_id: str, session: Session = Depends(db.session)):
    laptop_sell_process_info = laptop_sell_crud.latop_sell_info_get(db=session, sell_info_id = sell_info_id)

    if not laptop_sell_process_info:
        return HTTPException(status_code=400, detail="Item not found")

    return {
        "device_name": laptop_sell_process_info.device_name,
        "serial_numer": laptop_sell_process_info.serial_number,
        "create_date": laptop_sell_process_info.create_date,
        "step": laptop_sell_process_info.step
    }

#판매한 노트북 조회
@router.get("/sell", status_code=status.HTTP_200_OK)
async def get_laptop_sell_info(rank:str=None,date:str="desc",page:int=1,token: str = Header(None),session: Session = Depends(db.session)):
    account_id=account_crud.get_account_info(db=session, token=token)
    latop_sell_info,total_count=laptop_sell_crud.latop_sell_info_get_by_account(account_id=account_id.account_id,db=session,date=date,page=page,rank=rank)
    return {"laptop_sell_info":latop_sell_info,"totalcount":total_count}

# 노트북 진행상황 변경
@router.patch("/sell/progress", status_code=status.HTTP_200_OK)
async def patch_step(step:str=None,sell_id:str=None,session: Session = Depends(db.session)):
  
    laptop_sell_crud.patch_step_by_sell_id(db=session,sell_id=sell_id,step=step)