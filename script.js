<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
 <link rel="stylesheet" href="style-general.css" />
    <title>Document</title>
  </head>
  <body>
    <!-- Search form -->
    <form
      class="
        form-inline
        d-flex
        justify-content-center
        md-form
        form-sm
        active-cyan active-cyan-2
        mt-2
      "
      id="search-form"
      
    >
      <i class="fas fa-search" aria-hidden="true">
      <input
        class="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
        id="search-text-input"
      />
    </form>
    <!-- erster container mit emoji -->
    <div class="container-bg">
      <div class="container">
        <div class="row">
          <div class="col" >
           <span id="tempnow">23°C</span> <br />
            <h1 id="cityname">
            Coimbra, Portugal</h1>
          </div>
          <div class="col text-right">
            <img class="sun" src="images/hot_sun.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- zweiter container -->
    <div class="container-bg">
      <div class="container">
        <div class="row row-cols-5" id="temperature">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
        <div class="row row-cols-5" id="emojis">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
        <div class="row row-cols-5" id="time">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
    <!-- dritter container -->
    <div class="container-bg">
      <div class="container">
        <div class="row row-cols-5" id="temperatur">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
        <div class="row row-cols-5" id="emojis">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
        <div class="row row-cols-5" id="time">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
    <!-- aktuelle zeit -->
    <div class="currenttime">
      <h4>Current time and place</h4><small class="opensource"><a href="https://github.com/carbrt/my-weather-app" target="_blank">Open-source code </a> by Carla Brandschert</small>
    </div>
    
  </body>
<script src="script.js"></script>
</html>
