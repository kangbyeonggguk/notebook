import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

import "./Goods.css";
import Pagetitle from "../../shared/Pagetitle/Pagetitle";
import Filter from "../../shared/UIElements/Filter";
import Page from "../../shared/UIElements/Page";
import { useHttpClient } from "../../shared/hooks/http-hook"; //api호출 훅 불러오기

const Goods = (props) => {
  const isLoading = props.isLoading;
  const loadedGoods = props.loadedGoods;
  const itemlen = props.totalcount;
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 렌더링 시 맨 위로 스크롤
  }, []);
  return (
    <React.Fragment>
      {!isLoading && loadedGoods && (
        <>
          <div className="goods">
            <Pagetitle title="구매하기">
              판매자들의 노트북을 구매할 수 있습니다
            </Pagetitle>
            <div className="goods_sortcontain">
              <Filter title="낮은가격순"></Filter>
            </div>
            <div className="goods_notebookcontain">
              {!props.error &&
                loadedGoods.map((notebook, index) => (
                  <NavLink
                    key={index}
                    to={`/main/goods/detail/${
                      notebook.laptop_info_list_id
                    }?price=${
                      searchParams.get("price")
                        ? searchParams.get("price")
                        : "asc"
                    }&page=${
                      searchParams.get("page")
                        ? `${searchParams.get("page")}`
                        : ""
                    }&rating=${
                      searchParams.get("rating") &&
                      searchParams.get("rating") != ""
                        ? `&rating=${searchParams.get("rating")}`
                        : ""
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="goods_notebook" key={index}>
                      <div>
                        {/*-- */}
                        <div className="goods_notebook_imgbox center">
                          {notebook.laptop_info_list.laptop_info_list_image
                            .length > 0 ? (
                            <img
                              className="goods_notebook_img"
                              src={`${notebook.laptop_info_list.laptop_info_list_image[0].path}`}
                              alt="notebookimage"
                            />
                          ) : (
                            <div>No Image Available</div>
                          )}
                        </div>
                        <div className="goods_notebook_name">
                          [{notebook.title}]
                          {notebook.laptop_info_list.device_name}
                        </div>
                        <div className="goods_notebook_pricecontain">
                          <div className="goods_notebook_price">
                            {notebook.price_time_sale
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </div>
                          <div className="goods_notebook_discount">
                            {notebook.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </div>
                        </div>
                      </div>
                      {/*-- */}
                      <div>
                        <div className="goods_notebook_des">
                          <div className="goods_descontain">
                            <div className="goods_des_title">OS</div>
                            <div className="goods_des_value">
                              <img
                                className="goods_dev_osimg"
                                src={`/img/goods/Window 10 HOME.png`}
                              />
                              {notebook.os}
                            </div>
                          </div>

                          <div className="goods_descontain">
                            <div className="goods_des_title">화면크기</div>
                            <div className="goods_des_value">
                              <img
                                className="goods_dev_scaleimg"
                                src={`/img/goods/scale.png`}
                              />
                              {notebook.laptop_info_list.screen_size}인치
                            </div>
                          </div>

                          <div className="goods_descontain">
                            <div className="goods_des_title">업무용</div>
                            <div className="goods_des_value">
                              {notebook.laptop_info_list.business_usage
                                .split(",")
                                .map((img, index) => (
                                  <img
                                    key={index}
                                    className="goods_dev_useimg"
                                    src={`/img/goods/${img}.png`}
                                  />
                                ))}
                            </div>
                          </div>

                          <div className="goods_descontain">
                            <div className="goods_des_title">인강용</div>
                            <div className="goods_des_value">
                              인터넷 강의 용으로{" "}
                              {notebook.laptop_info_list.internet_lecture_usage}
                            </div>
                          </div>

                          <div className="goods_descontain">
                            <div className="goods_des_title">게임용</div>
                            <div className="goods_des_value">
                              {notebook.laptop_info_list.gaming_usage}
                            </div>
                          </div>

                          <div className="goods_descontain_hardware">
                            <div className="goods_des_title">하드웨어</div>
                            <div className="goods_des_value_hardware">
                              {notebook.hardware
                                .split(",")
                                .map((props, index) => (
                                  <div key={index}>
                                    <span>{props}</span>
                                    <br />
                                  </div>
                                ))}
                            </div>
                          </div>
                          <img
                            className="goods_notebook_rank"
                            src={`/img/rating/${notebook.rank}.png`}
                            alt="rankimage"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
            </div>
            {!props.error ? (
              <Page
                itemlen={itemlen}
                searchParams={props.searchParams}
                setSearchParams={props.setSearchParams}
                searchparamshandler={props.searchparamshandler}
                itemcount={6}
              ></Page>
            ) : (
              <Page
                itemlen={1}
                searchParams={props.searchParams}
                setSearchParams={props.setSearchParams}
                searchparamshandler={props.searchparamshandler}
                itemcount={6}
              ></Page>
            )}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Goods;
