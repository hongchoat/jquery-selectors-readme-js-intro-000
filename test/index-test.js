<!doctype html>
<html>
<head>
  <title> jQuery Selectors</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="node_modules/mocha/mocha.css" />
</head>
<body>
  <div class="pics">
    <img id="baby-ninja" src="https://s3.amazonaws.com/after-school-assets/baby-ninja.gif" width="300px">
    <img alt="the beatles making faces" src="https://s3.amazonaws.com/after-school-assets/beatles.gif" width="300px">
    <img class="cat" src="https://s3.amazonaws.com/after-school-assets/cat.gif" width="300px">
  </div>

  <p>
    Cupcake ipsum dolor sit amet dragée. Gummi bears biscuit sweet roll oat cake. Chupa chups candy soufflé cake cookie. Brownie donut cupcake bear claw danish chupa chups lemon drops. Gummies pastry croissant caramels apple pie jelly beans cookie tart. Caramels soufflé sweet tart chocolate powder candy canes. Brownie wafer cotton candy cake biscuit dessert jujubes. Biscuit jelly topping candy jujubes. Icing cotton candy icing pie. Jelly-o jelly-o gummi bears candy canes muffin ice cream pastry. Pie macaroon icing jelly candy. Powder jujubes candy liquorice wafer. Marshmallow lemon drops tart cheesecake cake jelly oat cake caramels pastry.

    Lollipop gingerbread powder chocolate liquorice icing. Pastry croissant bonbon ice cream tiramisu. Pastry sesame snaps lollipop marshmallow. Chupa chups brownie candy canes. Halvah sweet apple pie powder dessert jelly. Halvah tart donut lollipop jelly. Icing bear claw toffee carrot cake candy canes. Marshmallow gingerbread candy wafer cupcake toffee cupcake tart. Muffin carrot cake tiramisu icing cupcake fruitcake cotton candy biscuit cupcake. Croissant cake chupa chups tootsie roll soufflé liquorice candy canes. Pie pie biscuit tiramisu sweet roll cookie pie. Croissant dragée halvah gummies jelly beans macaroon tart. Chocolate cake jelly beans powder gingerbread gummies. Powder sweet roll dessert candy canes cheesecake jelly lollipop.
  </p>


  <div class="pics">
    <ul id="pic-list">
      <li>
        <img src="https://s3.amazonaws.com/after-school-assets/awesome.jpg">
      </li>
      <li>
        <img src="https://s3.amazonaws.com/after-school-assets/cat-stretch.jpg">
      </li>
      <li>
        <img src="https://s3.amazonaws.com/after-school-assets/confused.gif">
      </li>
    </ul>
  </div>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
  <script src="js/selectors.js"></script>

  <!-- Open this file in the browser and call `mocha.run()` in console to run tests -->
  <div id="mocha"></div>
  <script src="node_modules/mocha/mocha.js"></script>
  <script src="node_modules/expect/umd/expect.min.js"></script>
  <script>mocha.setup('bdd');</script>
  <script src="test/index-test.js"></script>
</body>
</html>
