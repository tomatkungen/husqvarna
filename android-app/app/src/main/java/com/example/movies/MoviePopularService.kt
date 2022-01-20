package com.example.movies

import kotlinx.serialization.Serializable
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.Path
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Query


interface MoviePopularService {
    @Headers("Content-Type: application/json;charset=utf-8")
    @GET("3/movie/popular")
    fun getMoviesCall(
        @Query("api_key") apiKey: String = "ApiKey",
        @Query("page") page: Int = 1
    ): Call<MoviePopular>
}

@Serializable
data class MoviePopular(
    val page: Int,
    val results: List<Movie>
)

@Serializable
data class Movie(
    val overview: String,
    val poster_path: String
)

fun createMoviePopularService(): MoviePopularService {
    val retrofit = Retrofit.Builder()
        .baseUrl("https://api.themoviedb.org/")
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    return retrofit.create(MoviePopularService::class.java)
}

