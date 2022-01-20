package com.example.movies

import android.view.LayoutInflater
import android.view.View;
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.squareup.picasso.Picasso

class MovieAdapter(private var Movies: List<Movie>):
    RecyclerView.Adapter<MovieAdapter.MovieViewHolder>() {

    inner class MovieViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {

        private val poster: ImageView = itemView.findViewById(R.id.ivPoster)
        private val overView: TextView = itemView.findViewById(R.id.tvOverview)
        private val url: String = "https://image.tmdb.org/t/p/w342/"

        fun bind(movie: Movie) {
            Picasso
                .get()
                .load("${url}${movie.poster_path}")
                .into(poster)

            overView.setText(movie.overview)
            overView.setVisibility(View.INVISIBLE)

            poster.setOnClickListener { _ ->
                overView.setVisibility(View.VISIBLE)
            }

            overView.setOnClickListener { _ ->
                overView.setVisibility(View.INVISIBLE)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MovieViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_movie, parent, false)

        return MovieViewHolder(view)
    }

    override fun onBindViewHolder(holder: MovieViewHolder, position: Int) {
        holder.bind(this.Movies[position])
    }

    override fun getItemCount(): Int {
        return Movies.size;
    }

    fun updateMovies(movies: List<Movie>) {
        this.Movies = movies
        notifyDataSetChanged()
    }
}
