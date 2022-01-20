package com.example.movies

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var movieList = findViewById<RecyclerView>(R.id.rvMoviesList)
        movieList.layoutManager = LinearLayoutManager(
            this,
            LinearLayoutManager.VERTICAL,
            false
        )
        val listMovieAdapter = MovieAdapter(listOf());
        movieList.adapter = listMovieAdapter;

        val moviePopularService = createMoviePopularService()
            .getMoviesCall()
            .enqueue(object : Callback<MoviePopular> {
                override fun onResponse(
                    call: Call<MoviePopular>,
                    response: Response<MoviePopular>
                ) {
                    if (response.isSuccessful) {
                        val responseBody = response.body()
                        val message = response.message()

                        if (responseBody != null) {
                            listMovieAdapter.updateMovies(responseBody.results)
                            Log.d("Repository", "Movies: ${responseBody.toString()} $")
                        } else {
                            Log.d("Repository", "Failed to get response")
                        }
                    }
                }

                override fun onFailure(call: Call<MoviePopular>, t: Throwable) {
                    Log.e("Repository", "onFailure", t)
                }
            })
    }
}
