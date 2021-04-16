import { getResults } from "../api";
import { getMovieResults } from "../api";

export const getSearchData = (result) => {
  return (dispatch) => {
    dispatch({
      type: "START",
      payload: [],
    });
    getResults(result)
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FAILED",
          payload: error,
        });
      });
  };
};

export const getMovieData = (movie) => {
  return (dispatch) => {
    dispatch({
      type: "MOVIE_START",
      payload: [],
    });
    getMovieResults(movie)
      .then((data) => {
        dispatch({
          type: "MOVIE_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "MOVIE_FAILED",
          payload: error,
        });
      });
  };
};

export const getSeriesData = (series) => {
  return (dispatch) => {
    dispatch({
      type: "SERIES_START",
      payload: [],
    });
    getResults(series)
      .then((data) => {
        dispatch({
          type: "SERIES_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SERIES_FAILED",
          payload: error,
        });
      });
  };
};

export const addToFav = (elm,idx) =>{
  return{
    type:'ADD_TO_FAV',
    payload:{elm,idx}
  }
}

export const selectIndexAction = (idx) => {
  return {
    type: "SELECT_INDEX",
    payload: idx
  };
}
