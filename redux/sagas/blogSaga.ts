import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios/axios";
import { fetchBlogDataSuccess, fetchBlogDataFailed, fetchBlogDataStart, fetchBlogDataByIdStart, fetchBlogDataByIdFailed, fetchBlogDataByIdSuccess, fetchBlogTagsDataStart } from "../slices/blogSlice";
import { ResponseGenerator } from "../types";

export function* blogSaga() {
    try {
        const response: ResponseGenerator = yield axios.get("/blogs");
        yield put(fetchBlogDataSuccess(response.data));
    } catch (error) {
        yield put(fetchBlogDataFailed(error));
    }
}

export function* searchBlogByIdSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.get(`/blogs/${action.payload}`);
        const responseContent: ResponseGenerator = yield axios.get(`/blogs-data/${response.data.name}`);
        yield put(fetchBlogDataByIdSuccess(
            {
                ...response.data,
                content: responseContent.data.content
            }
        ));
    } catch (error) {
        yield put(fetchBlogDataByIdFailed(error));
    }
}

export function* blogTagsSaga(action: PayloadAction<any>) {
    try {
        const response: ResponseGenerator = yield axios.get(`/tags/blogs/${action.payload}`);
        yield put(fetchBlogDataSuccess(response.data));
    } catch (error) {
        yield put(fetchBlogDataFailed(error));
    }
}

export function* watchBlogData() {
    yield takeLatest(fetchBlogDataStart, blogSaga);
    yield takeLatest(fetchBlogDataByIdStart, searchBlogByIdSaga);
    yield takeLatest(fetchBlogTagsDataStart, blogTagsSaga);
}

export default watchBlogData;