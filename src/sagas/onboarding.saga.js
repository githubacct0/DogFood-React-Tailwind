import { takeLatest, call, put } from "redux-saga/effects";

import { onboardingService } from "../services";
import { onboardingContstants } from "../constants";

function* getOnboardingData() {
  try {
    const payload = yield call(onboardingService.getOnboardingData);
    yield put({
      type: onboardingContstants.GET_ONBOARDING_DATA_SUCCESS,
      payload,
    });
  } catch (e) {
    yield put({
      type: onboardingContstants.GET_ONBOARDING_DATA_FAILED,
      payload: e,
    });
  }
}

function* getDogsFromForm(action) {
  yield put({
    type: onboardingContstants.GET_DOGS_FROM_FORM_SUCCESS,
    payload: action.payload,
  });
}

function* getOnboardingDetails() {
  try {
    const payload = yield call(onboardingService.getOnboardingDetails);
    yield put({
      type: onboardingContstants.GET_ONBOARDING_DETAILS_SUCCESS,
      payload,
    });
  } catch (e) {
    yield put({
      type: onboardingContstants.GET_ONBOARDING_DETAILS_FAILED,
      payload: e,
    });
  }
}

function* createTempUser(action) {
  try {
    const payload = yield call(
      onboardingService.createTempUser,
      action.payload
    );
    yield put({ type: onboardingContstants.CREATE_TEMP_USER_SUCCESS, payload });
  } catch (error) {
    yield put({
      type: onboardingContstants.CREATE_TEMP_USER_FAILED,
      payload: error,
    });
  }
}

function* updateTempUser(action) {
  try {
    const payload = yield call(
      onboardingService.updateTempUser,
      action.payload
    );
    yield put({ type: onboardingContstants.UPDATE_TEMP_USER_SUCCESS, payload });
  } catch (error) {
    yield put({
      type: onboardingContstants.UPDATE_TEMP_USER_FAILED,
      payload: error,
    });
  }
}

function* addDogRecipes(action) {
  try {
    const payload = yield call(onboardingService.addDogRecipes, action.payload);
    yield put({ type: onboardingContstants.ADD_DOG_RECIPES_SUCCESS, payload });
  } catch (error) {
    yield put({
      type: onboardingContstants.ADD_DOG_RECIPES_FAILED,
      payload: error,
    });
  }
}

function* getDogDietPortion(action) {
  try {
    const payload = yield call(
      onboardingService.getDogDietPortion,
      action.payload
    );
    yield put({
      type: onboardingContstants.GET_DOG_DIET_PORTION_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: onboardingContstants.GET_DOG_DIET_PORTION_FAILED,
      payload: error,
    });
  }
}

export default function* onboarding() {
  yield takeLatest(onboardingContstants.GET_ONBOARDING_DATA, getOnboardingData);
  yield takeLatest(onboardingContstants.GET_DOGS_FROM_FORM, getDogsFromForm);
  yield takeLatest(
    onboardingContstants.GET_ONBOARDING_DETAILS,
    getOnboardingDetails
  );

  yield takeLatest(onboardingContstants.CREATE_TEMP_USER, createTempUser);
  yield takeLatest(onboardingContstants.UPDATE_TEMP_USER, updateTempUser);
  yield takeLatest(onboardingContstants.ADD_DOG_RECIPES, addDogRecipes);
  yield takeLatest(
    onboardingContstants.GET_DOG_DIET_PORTION,
    getDogDietPortion
  );
}
