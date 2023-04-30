const firebaseConfig = {
    apiKey: "AIzaSyDuw4BJCFgwlhVtHDCfkcDcd4M5UMFD7bk",
    authDomain: "webtech-6cc2d.firebaseapp.com",
    databaseURL: "https://webtech-6cc2d-default-rtdb.firebaseio.com",
    projectId: "webtech-6cc2d",
    storageBucket: "webtech-6cc2d.appspot.com",
    messagingSenderId: "907150802893",
    appId: "1:907150802893:web:73dc0acbc5b43c1b444e84",
    measurementId: "G-CBC1EEDNPM"
  };

    firebase.initializeApp(firebaseConfig);
    
    // Get a reference to the database service
    var database = firebase.database();
    
    // Get a reference to the table
    var table = document.getElementById('table');
    
    // Function to fetch all data from Firebase and display it in the table
    function fetchData() {
      var ref = database.ref('users');
      ref.on('value', function(snapshot) {
        // Clear the table first
        table.innerHTML = '<thead><tr><th>First Name</th><th>Last Name</th><th>Username</th><th>Password</th><th>Favorite Subject</th></tr></thead><tbody>';
    
        // Loop through the data and add each row to the table
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          table.innerHTML += '<tr><td>' + childData.firstname + '</td><td>' + childData.lastname + '</td><td>' + childData.username + '</td><td>' + childData.password + '</td><td>' + childData.favourite_subject + '</td></tr>';
        });
    
        // Close the table body
        table.innerHTML += '</tbody>';
      });
    }
    
    // Call the fetchData function to display the data when the page loads
    fetchData();