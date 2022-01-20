## Tools

- Android studio
- Kotlin
- Retrofit
- Picasso
- Recyclerview / TextView / ImageView
- Coroutines

## Prerequisite

- Get Api Key from https://developers.themoviedb.org/3/getting-started/introduction
- Create ApiKey in developers.themoviedb.org
  - Replace the string "ApiKey" in app/src/main/java/com/example/movies/MoviePopularServices.kt with your Api key

```javacscript

@Query("api_key") apiKey: String = "<<ApiKey>>",

```

## Commands

Run App in Android Studio
≈

## File

```shell

Kotlin:
MainActivity            // Main and request Api≈
MovieAdapter            // RecycleView Adapter
MoviePopularService     // interface APi

Layout:
activity_main           // RecyclerView
item_movie              // TextView & ImageView

```
